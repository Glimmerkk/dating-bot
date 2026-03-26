const TelegramBot = require("node-telegram-bot-api")
const express = require("express")
const config = require("./config")

console.log("Dating bot starting...")

const bot = new TelegramBot(config.BOT_TOKEN,{polling:true})

module.exports = bot


// LOAD HANDLERS
require("./handlers/start")
require("./handlers/profiles")
require("./handlers/photos")
require("./handlers/reserve")
require("./handlers/payment")
require("./admin/approve")


// ======================
// EXPRESS SERVER (FOR RENDER FREE TIER)
// ======================

const app = express()

app.get("/", (req,res)=>{
res.send("Dating bot running 24/7")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log("Server running on port",PORT)
})