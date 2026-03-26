const TelegramBot = require("node-telegram-bot-api")
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