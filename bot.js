const TelegramBot = require("node-telegram-bot-api")
const config = require("./config")

// CREATE BOT
const bot = new TelegramBot(config.BOT_TOKEN, { polling: true })

module.exports = bot


// LOAD HANDLERS
require("./handlers/start")
require("./handlers/profiles")
require("./handlers/photos")
require("./handlers/reserve")
require("./handlers/payment")

require("./admin/approve")


// ===== KEEP ALIVE SERVER (FOR RENDER FREE HOSTING) =====
const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Bot is running 🚀")
})

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


// ===== AUTO RESTART ON CRASH =====
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err)
  process.exit(1) // force restart
})

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err)
  process.exit(1) // force restart
})


// ===== MANUAL RESTART COMMAND (ADMIN ONLY) =====
const ADMIN_ID = config.ADMIN_ID // add this in config

bot.onText(/\/restart/, (msg) => {
  const chatId = msg.chat.id

  if (chatId.toString() !== ADMIN_ID.toString()) {
    return bot.sendMessage(chatId, "❌ You are not allowed to restart the bot")
  }

  bot.sendMessage(chatId, "♻️ Restarting bot...")

  setTimeout(() => {
    process.exit(1) // Render will restart it automatically
  }, 1000)
})