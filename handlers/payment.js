const bot = require("../bot")
const config = require("../config")
const users = require("../data/user")



// =====================
// HANDLE SCREENSHOTS
// =====================

bot.on("photo",(msg)=>{

const chatId = msg.chat.id
const user = users.getUser(chatId)

if(user.step !== "awaiting_binance" && user.step !== "awaiting_giftcard") return


// notify client
bot.sendMessage(chatId,
"Payment screenshot received. Waiting for admin approval.")


// send info to admin
bot.sendMessage(config.ADMIN_ID,
`New Payment

Client ID: ${chatId}
Girl: ${user.girl}
Payment Type: ${user.paymentMethod}`)


// forward screenshot to admin
bot.forwardMessage(
config.ADMIN_ID,
chatId,
msg.message_id
)


// admin approval buttons
bot.sendMessage(config.ADMIN_ID,
"Approve this payment?",
{
reply_markup:{
inline_keyboard:[
[
{text:"Approve",callback_data:`approve_${chatId}`},
{text:"Reject",callback_data:`reject_${chatId}`}
]
]
}
})

})




// =====================
// HANDLE GIFTCARD CODE
// =====================

bot.on("message",(msg)=>{

const chatId = msg.chat.id
const text = msg.text || ""

const user = users.getUser(chatId)

if(user.step !== "awaiting_giftcard") return

// ignore commands and buttons
if(text === "Reserve 💌" || text === "Binance Payment" || text === "Gift Card Payment") return


bot.sendMessage(chatId,
"Gift card received. Waiting for admin approval.")


bot.sendMessage(config.ADMIN_ID,
`New Gift Card Code

Client ID: ${chatId}
Girl: ${user.girl}

Code:
${text}`)


bot.sendMessage(config.ADMIN_ID,
"Approve this gift card?",
{
reply_markup:{
inline_keyboard:[
[
{text:"Approve",callback_data:`approve_${chatId}`},
{text:"Reject",callback_data:`reject_${chatId}`}
]
]
}
})

})