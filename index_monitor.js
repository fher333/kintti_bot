const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
var TelegramBot = require('node-telegram-bot-api'); //se invoca la libreria de none-telegram-bot-api

var token_b0 = '1274008775:AAFeXXPT9b2tK_V77dElNmZ0ErG74oK9aaw'; //  t.me/user_bog_bot. 
var token_b1 = '1145096687:AAFVKlN7KkpQCmdjjWLOiuZEVVLGHQwzbWg'; //  t.me/cali_girls_bot    
var ID_user = [717550092, 933443152, 1250187130, 1204215559, 1115398938, 1135835787]; //fher, ingstudio, jnx, maryu, luisa, nay
var bot0 = new TelegramBot(token_b0, {polling:true}); // se crea un nuevo objeto con el token del Bot de usuarios Cali

    bot0.on('message', function(msg){   //la funcion onText permite recibir los textos e ID de quien ingresa al Bot
    var chatId = msg.chat.id; // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
    var username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
    var echo = msg.text;
    if (chatId==ID_user[0]){
        rl.question('text: '+echo, (answer) => {
                     
            if (answer=="y") {
          
              console.log(`texto aceptado:: ${echo}`);
              bot0.sendMessage(ID_user[1],"usuario#1 dice: "+echo); //933443152 es el numero identificador de la chica  
              //rl.pause(); 
            }
          //rl.resume();
            //rl.close();
          });

        
        
        //console.log(msg);
        } else if (chatId==ID_user[1]){
            bot0.sendMessage(ID_user[0],"chica#1 dice: "+echo);
            console.log(msg);
        }
    
        
});


var bot1 = new TelegramBot(token_b1, {polling:true});

bot1.onText(/\/ (.+)/, function(msg,match){
    // bot1.onText(/\/echo (.+)/, function(msg,match){
     // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
     var chatId1 = msg.chat.id;
     // msg.from.username se encarga de recoger el @alias del usuario.
     var username1 = msg.from.first_name;
     var echo1 = match[1];
         console.log(msg);
 
     //var chatId = msg.chat.id;
     
     // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
     bot1.sendMessage(chatId1, "Hola, " + username1 + " soy un bot y mi nombre es Gerh");
     bot1.sendMessage(chatId1,echo1);    
     bot0.sendMessage('717550092',echo1);    //717550092 es el numero identificador del hombre usuario
 });




