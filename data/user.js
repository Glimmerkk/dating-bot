const users = {}

module.exports = {

getUser(id){

if(!users[id]){
users[id] = {
step:null,
girl:null,
paymentMethod:null
}
}

return users[id]

}

}