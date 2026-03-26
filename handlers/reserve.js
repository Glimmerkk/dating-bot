const bot = require("../bot")
const users = require("../data/user")

bot.on("message", (msg) => {

const chatId = msg.chat.id
const text = msg.text || ""

const user = users.getUser(chatId)

if(text === "Reserve 💌"){

user.step = "choose_payment"

bot.sendMessage(chatId,
"Reservation Fee: $30\n\nChoose payment method:",
{
reply_markup:{
keyboard:[
["Binance Payment"],
["Gift Card Payment"]
],
resize_keyboard:true
}
})

}


if(text === "Binance Payment" && user.step === "choose_payment"){

user.paymentMethod = "binance"
user.step = "awaiting_binance"

bot.sendMessage(chatId,
"Send $30 to this Binance address:\n\n`0xCe3E1b0A7072e7c62D1EE3BBcF85D4d1Dc0e50e8`\n\nTap and hold to copy.\n\nAfter payment upload screenshot.",
{
parse_mode:"Markdown"
})

}


if(text === "Gift Card Payment" && user.step === "choose_payment"){

user.paymentMethod = "giftcard"
user.step = "awaiting_giftcard"

bot.sendMessage(chatId,
`Send your gift card by:

1️⃣ Upload gift card screenshot + type card name
OR
2️⃣ Send gift card code

Example:
Razor $50
CODE: XXXX-XXXX

Steam $50
CODE: XXXX-XXXX

Amazon $50
CODE: XXXX-XXXX

Binance $50
CODE: XXXX-XXXX`)

}

})