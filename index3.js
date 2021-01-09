
var TelegramBot = require('node-telegram-bot-api'),
    bot = new TelegramBot("1274008775:AAFeXXPT9b2tK_V77dElNmZ0ErG74oK9aaw", {
        polling: true
    });
console.log(bot);

bot.onText(/\/createroom/, function (res, match) {
    console.log("ping");
    //use res.chat.id for groups and res.user.id for individuals
    service.checkIfRoomExist(res.chat.id).then(function (isExist) {
        if (isExist === false) {
            service.createRoom(res.chat.id).then(function () {
                bot.sendMessage(res.chat.id, 'Initializing game!')
                    // send game content here
            });
        }
        bot.sendMessage(res.chat.id, 'A game has already started in this group!')
    })
});

function checkIfRoomExist(id) {
    // Your logic here that checks in database if game has been created
}