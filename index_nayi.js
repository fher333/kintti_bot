var TelegramBot = require('node-telegram-bot-api'); //se invoca la libreria de none-telegram-bot-api
//var token_b0 = '1119763048:AAF7lGV8AN2lcRLQMGBjHRjThNeOGcTCAyM';
//var token_b1 = '1027772692:AAEq0AQn2kPxX5isjV0ZpwKgljAiB-nQwXM';
//var token_b0 = '1054009828:AAFNXsqZ8eCHq4_nssTWfi8vGz-nZYMoaBc'; //bot t.me/UserCali_bot
//var token_b1 = '1071043028:AAE82MBopRIrsVnRvij9J3YG-Cd_Mn98V8c'; //bot t.me/ChicaCali_bot 
var token_b1 = '1274008775:AAFeXXPT9b2tK_V77dElNmZ0ErG74oK9aaw'; //  t.me/user_bog_bot. 
var token_b0 = '1145096687:AAFVKlN7KkpQCmdjjWLOiuZEVVLGHQwzbWg'; //  t.me/cali_girls_bot    

var bot0 = new TelegramBot(token_b0, {polling:true}); // se crea un nuevo objeto con el token del Bot de usuarios Cali

bot0.onText(/\/ (.+)/, function(msg,match){   //la funcion onText permite recibir los textos e ID de quien ingresa al Bot
      
    var chatId = msg.chat.id; // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
    // msg.from.username se encarga de recoger el @alias del usuario.
    var username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
    var echo = match[1];

    if (chatId==717550092){
        //bot0.sendMessage('933443152',"usuario#1 dice: "+echo); //933443152 es el numero identificador de la chica   
        bot0.sendMessage('1135835787',"usuario#1 dice: "+echo); //1250187130 es el numero identificador de luisa fernanda diaz el tiro   
        
        console.log(msg);
        bot0.sendMessage(chatId, "Hola, " + username + " tu mensaje fue enviado a la chica");
        //} else if (chatId==933443152){
        } else if (chatId==1135835787){
            bot0.sendMessage('717550092',"chica#1 dice: "+echo);
            // var username1 = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
            //var echo = match[1];
            console.log(msg);
            bot0.sendMessage(chatId, "Hola, " + username + " tu mensaje fue enviado al usuario");
        }
    
    
    //bot0.sendMessage(chatId,echo);
    
});


// var bot1 = new TelegramBot(token_b1, {polling:true});

// bot1.onText(/\/ (.+)/, function(msg,match){
//     // bot1.onText(/\/echo (.+)/, function(msg,match){
//      // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
//      var chatId1 = msg.chat.id;
//      // msg.from.username se encarga de recoger el @alias del usuario.
//      var username1 = msg.from.first_name;
//      var echo1 = match[1];
//          console.log(msg);
 
//      //var chatId = msg.chat.id;
     
//      // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
//      bot1.sendMessage(chatId1, "Hola, " + username1 + " soy un bot y mi nombre es Gerh");
//      bot1.sendMessage(chatId1,echo1);    
//      bot0.sendMessage('717550092',echo1);    //717550092 es el numero identificador del hombre usuario
//  });




