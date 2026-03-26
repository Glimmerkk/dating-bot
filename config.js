require("dotenv").config()

module.exports = {

BOT_TOKEN: process.env.BOT_TOKEN,

ADMIN_ID: Number(process.env.ADMIN_ID),

BINANCE_ADDRESS: process.env.BINANCE_ADDRESS,

girls: {

bella:{
name:"Bella",
age:23,
region:"Texas",
contact:"@bella_contact"
},

anna:{
name:"Anna",
age:22,
region:"Ohio",
contact:"@anna_contact"
}

}

}