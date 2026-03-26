const bot = require("../bot")

bot.onText(/\/start/, (msg)=>{

const chatId = msg.chat.id

bot.sendMessage(chatId,
`Welcome to Dating Connection 💖
Where lonely hearts meet beautiful companions.

Choose a profile below and start your private connection today. 👋

Choose a profile:`,
{
reply_markup:{
keyboard:[
["Bella ❤️","Anna ❤️"],
["Hellen 🔒","Amanda 🔒","Christine 🔒"]
],
resize_keyboard:true
}
})

})