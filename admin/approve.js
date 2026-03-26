const bot = require("../bot")
const config = require("../config")
const users = require("../data/user")

bot.on("callback_query",(query)=>{

const data = query.data
const adminChat = query.message.chat.id

if(adminChat !== config.ADMIN_ID) return


if(data.startsWith("approve_")){

const userId = data.split("_")[1]

const user = users.getUser(userId)

bot.sendMessage(userId,
"Payment approved ✅\nYou can now receive contact information and the way foward remember to be respectful to each other T.me/kiptookd.")

user.step = "approved"

bot.sendMessage(adminChat,"Client approved")

}


if(data.startsWith("reject_")){

const userId = data.split("_")[1]

bot.sendMessage(userId,
"Payment rejected ❌\nUpload correct screenshot.")

bot.sendMessage(adminChat,"Client rejected")

}

})