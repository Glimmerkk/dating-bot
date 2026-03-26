const bot = require("../bot")
const users = require("../data/user")

bot.on("message",(msg)=>{

const chatId = msg.chat.id
const text = msg.text

const user = users.getUser(chatId)

if(text === "Bella ❤️"){

user.girl = "bella"

bot.sendMessage(chatId,
"Name: Bella\nAge: 22\nRegion: Texas",
{
reply_markup:{
keyboard:[
["View Photos 📸"],
["Reserve 💌"],
["Back"]
],
resize_keyboard:true
}
})

}

if(text === "Anna ❤️"){

user.girl = "anna"

bot.sendMessage(chatId,
"Name: Anna\nAge: 24\nRegion: Ohio",
{
reply_markup:{
keyboard:[
["View Photos 📸"],
["Reserve 💌"],
["Back"]
],
resize_keyboard:true
}
})

}

if(
text === "Hellen 🔒" ||
text === "Amanda 🔒" ||
text === "Christine 🔒"
){
bot.sendMessage(chatId,"This profile is currently reserved.")
}

})