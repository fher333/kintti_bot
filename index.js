var TelegramBot = require('node-telegram-bot-api');
var token = '1119763048:AAF7lGV8AN2lcRLQMGBjHRjThNeOGcTCAyM';
var bot = new TelegramBot(token, {polling:true});
bot.onText(/\/echo (.+)/, function(msg,match){
    // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
    var chatId = msg.chat.id;
    // msg.from.username se encarga de recoger el @alias del usuario.
    //var username = msg.from.username;
    var echo = match[1];
   //     console.log(msg);

    //var chatId = msg.chat.id;
    
    // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
   // bot.sendMessage(chatId, "Hola, " + username + " soy un bot y mi nombre es Gerh");
    bot.sendMessage(chatId,echo);    
});




