var TelegramBot = require('node-telegram-bot-api'); //se invoca la libreria de none-telegram-bot-api

var token_b1 = '1274008775:AAFeXXPT9b2tK_V77dElNmZ0ErG74oK9aaw'; //  t.me/user_bog_bot. 
var token_b0 = '1145096687:AAFVKlN7KkpQCmdjjWLOiuZEVVLGHQwzbWg'; //  t.me/cali_girls_bot    
var ID_user = [717550092, 933443152, 1250187130, 1204215559, 1115398938, 1135835787]; //fher, ingstudio, jnx, maryu, luisa, nay
userChat=ID_user[1];
girlChat=ID_user[2];
var keywords = ["email", "gmail", "hotmail","yahoo", "outlook", "msn", "google", "instagram", "whatsapp","mail","snapchat","tik", "tok","tango","facebook","face","book","http","@","arroba",".com",".co",".net",".org","www","telegram", "numero","celular","celu","300","301","302","303","304","305","306","307","308","310","311","312","313","314","315","316","317","318","319","320","321","322","323","carrera","cra","calle","cll","ave","avenida","autopista","buscame","llamame","#","movistar","tres"];
var bot0 = new TelegramBot(token_b0, {polling:true}); // se crea un nuevo objeto con el token del Bot de usuarios Cali
var wordUser = -1;
var wordGirl = -1;
var Upos=-1;
var Gpos=-1;

    bot0.on('message', function(msg){   //la funcion onText permite recibir los textos e ID de quien ingresa al Bot
    
    var chatId = msg.chat.id; // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
    var username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
    var echo = msg.text;


    if (chatId==userChat){
        //console.log(Upos);
        echoRev = echo.toLowerCase();
        echoRev = echoRev.replace(/ /g, "");
        //uso foreach para recorrer cada elemento del array
        keywords.forEach(function(element) {
        //En caso de existir se asigna la posición en pos
        wordUser = echoRev.indexOf(element.toString());
       
            if (wordUser!=-1){
                Upos=1;
    
             }

        });
        //console.log(Upos);
            if (Upos==1){
                bot0.sendMessage(userChat,"Estas usando palabras NO ACEPTADAS, Si persiste tu cuenta sera cancelada!");
                bot0.sendMessage(girlChat,"el usuario esta tratando de escribirte texto no aceptado");
                Upos=-1;
                }else {
                        bot0.sendMessage(girlChat,"usuario#1 dice: "+echo); //933443152 es el numero identificador de la chica   
                        console.log(msg);
            }
        


    } else if (chatId==girlChat){


        //console.log(Gpos);
        echoRev = echo.toLowerCase();
        echoRev = echoRev.replace(/ /g, "");
        //uso foreach para recorrer cada elemento del array
        keywords.forEach(function(element) {
        //En caso de existir se asigna la posición en pos
        wordGirl = echoRev.indexOf(element.toString());
       
            if (wordGirl!=-1){
                Gpos=1;
    
             }

        });
       // console.log(Gpos);
            if (Gpos==1){

                bot0.sendMessage(girlChat,"Estas usando palabras NO ACEPTADAS, Si persiste tu cuenta sera cancelada!");
                bot0.sendMessage(userChat,"la chica esta tratando de escribirte texto no aceptado");
                Gpos=-1;
            }else{
            bot0.sendMessage(userChat,"chica#1 dice: "+echo);
            console.log(msg);
            }
        }
    
        
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




