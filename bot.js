require("dotenv").config()

const TelegramBot = require("node-telegram-bot-api")
const express = require("express")
const https = require("https")
const config = require("./config")

console.log("Dating bot starting...")

// TELEGRAM BOT
const bot = new TelegramBot(config.BOT_TOKEN,{ polling:true })

module.exports = bot



// LOAD HANDLERS
require("./handlers/start")
require("./handlers/profiles")
require("./handlers/photos")
require("./handlers/reserve")
require("./handlers/payment")

require("./admin/approve")



// EXPRESS SERVER (Required for Render Web Service)

const app = express()

app.get("/",(req,res)=>{
res.send("Dating bot is running 24/7")
})

const PORT = process.env.PORT || 10000

app.listen(PORT,"0.0.0.0",()=>{
console.log(`Server running on port ${PORT}`)
})



// ===============================
// SELF PING SYSTEM (keeps active)
// ===============================

const RENDER_URL = process.env.RENDER_URL

if(RENDER_URL){

setInterval(()=>{

https.get(RENDER_URL,(res)=>{
console.log("Self ping success")
}).on("error",(err)=>{
console.log("Ping error:",err.message)
})

},300000) // every 5 minutes

}



// ===============================
// CRASH PROTECTION
// ===============================

process.on("uncaughtException",(err)=>{
console.log("Uncaught Exception:",err)
})

process.on("unhandledRejection",(err)=>{
console.log("Unhandled Rejection:",err)
})