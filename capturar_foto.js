var TelegramBot = require('node-telegram-bot-api');
var token = '1145096687:AAFVKlN7KkpQCmdjjWLOiuZEVVLGHQwzbWg';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var userId = msg.from.id;

    // bot.sendMessage(chatId,"There is something");   
    // bot.sendPhoto(chatId,bot.getUserProfilePhotos(userId, 1, 1) ,{caption: "It's your photo!"});    
    var photos = bot.getUserProfilePhotos(userId,{ limit: 2 });
   //var x = photos.photos[0][0].;
     console.log(photos);
     bot.sendPhoto(chatId,photos);  
});

// bot.onText(/\/testuserphoto$/, function onMessage(msg) {
//     var chatId = msg.chat.id;
//     var userId = msg.from.id;

//     bot.getUserProfilePhotos(userId, 1, 1).then(function(data){
//       bot.sendPhoto(chatId,data.photos[0][0].file_id,{caption: "It's your photo!"});
//     });

// });