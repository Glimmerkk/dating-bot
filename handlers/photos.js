const bot = require("../bot")
const users = require("../data/user")

bot.on("message",(msg)=>{

const chatId = msg.chat.id
const text = msg.text

const user = users.getUser(chatId)

if(text === "View Photos 📸"){

if(user.girl === "bella"){

bot.sendMediaGroup(chatId,[

{type:"photo",media:"./photos/bella1.jpg"},
{type:"photo",media:"./photos/bella2.jpg"},
{type:"photo",media:"./photos/bella3.jpg"},
{type:"photo",media:"./photos/bella4.jpg"},
{type:"photo",media:"./photos/bella5.jpg"},
{type:"photo",media:"./photos/bella6.jpg"},
{type:"photo",media:"./photos/bella7.jpg"}

])

bot.sendMessage(chatId,
`Hope you like what you see 😘
Tap Reserve 💌 to spend time with me tonight.`)

}

if(user.girl === "anna"){

bot.sendMediaGroup(chatId,[

{type:"photo",media:"./photos/anna1.jpg"},
{type:"photo",media:"./photos/anna2.jpg"},
{type:"photo",media:"./photos/anna3.jpg"},
{type:"photo",media:"./photos/anna4.jpg"},
{type:"photo",media:"./photos/anna5.jpg"},
{type:"photo",media:"./photos/anna6.jpg"},
{type:"photo",media:"./photos/anna7.jpg"}

])

bot.sendMessage(chatId,
`Hope you like what you see 😘
Tap Reserve 💌 to spend time with me.`)

}

}

})