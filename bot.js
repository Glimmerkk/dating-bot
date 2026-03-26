const TelegramBot = require("node-telegram-bot-api")
const express = require("express")
const config = require("./config")

const bot = new TelegramBot(config.BOT_TOKEN,{polling:true})

module.exports = bot

// LOAD HANDLERS
require("./handlers/start")
require("./handlers/profiles")
require("./handlers/photos")
require("./handlers/reserve")
require("./handlers/payment")
require("./admin/approve")

// EXPRESS SERVER (needed for Render)
const app = express()

app.get("/", (req,res)=>{
res.send("Dating bot is running")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log("Server running on port " + PORT)
})