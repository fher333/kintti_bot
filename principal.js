var TelegramBot = require('node-telegram-bot-api'); //se invoca la libreria de none-telegram-bot-api

var tokenPrincipal = '1145096687:AAFVKlN7KkpQCmdjjWLOiuZEVVLGHQwzbWg'; //  t.me/cali_girls_bot  bot0

var girl11 = {name:"Jeka", code: 11, ID: 1250187130, city: "cali", age: 28, category: "amistad", numberPhone: 3212215487,  chatOnline: false};
var girl12 = {name:"maryu", code: 12, ID: 1204215559, city: "cali", age: 22, category: "cita", numberPhone: 3155584525,  chatOnline: false};
var girl13 = {name:"luisa", code: 13, ID: 1115398938, city: "cali", age: 18, category: "amistad", numberPhone: 3187895847,  chatOnline: false};
var girl14 = {name:"nayi", code: 14, ID: 1135835787, city: "cali", age: 30, category: "amistad", numberPhone: 3217896587,  chatOnline: false};
var girl15 = {name:"chica5", code: 15, ID: 933443152, city: "cali", age: 18, category: "cita", numberPhone: 3202235689,  chatOnline: false};
var girl16 = {name:"chica6", code: 16, ID: 933443152, city: "cali", age: 19, category: "cita", numberPhone: 321457889,  chatOnline: false};

var chat1 = {name:"Chat Room 1", token: '1266204356:AAEMD4OCm9n75dYjNEqsbLSse61eys6ECCs', used: false, userOk: false, girlOK: false, link: "t.me/user_cali_bot"};
var chat2 = {name:"Chat Room 2", token: '1274008775:AAFeXXPT9b2tK_V77dElNmZ0ErG74oK9aaw', used: false, userOk: false, girlOK: false, link: "t.me/user_bog_bot"};
var chat3 = {name:"Chat Room 3", token: '1054009828:AAFNXsqZ8eCHq4_nssTWfi8vGz-nZYMoaBc', used: false, userOk: false, girlOK: false, link: "t.me/UserCali_bot"};
var chat4 = {name:"Chat Room 4", token: '1071043028:AAE82MBopRIrsVnRvij9J3YG-Cd_Mn98V8c', used: false, userOk: false, girlOK: false, link: "t.me/ChicaCali_bot"};
var chat5 = {name:"Chat Room 5", token: '1103870332:AAHMLWODcJ2G9g4emsAJpNArieFGhUp5PCc', used: false, userOk: false, girlOK: false, link: "t.me/Chica_1_bot"};
var chat6 = {name:"Chat Room 6", token: '1170692133:AAGUVL7iyrcG6Xo4SnWfAEJslS_cF_InWI4', used: false, userOk: false, girlOK: false, link: "t.me/room_6_bot"};

var keywords = ["email", "gmail", "hotmail","yahoo", "outlook", "msn", "google", "instagram", "whatsapp","mail","snapchat","tik", "tok","tango","facebook","face","book","http","@","arroba",".com",".co",".net",".org","www","telegram", "numero","celular","celu","300","301","302","303","304","305","306","307","308","310","311","312","313","314","315","316","317","318","319","320","321","322","323","carrera","cra","calle","cll","ave","avenida","autopista","buscame","llamame","#","movistar","tres"];

var botPrincipal = new TelegramBot(tokenPrincipal, {polling:true}); // se crea un nuevo objeto con el token del Bot de usuarios Cali

var idBot0 = "";
var roomToken= chat6.token;
var userID=0;
var girlID=0;
var roomBusy;

//msg="bienvenido";

botPrincipal.onText(/^\/start/, function(msg){
  // Imprimimos en consola el mensaje recibido.
  console.log(msg);
  // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
  var chatId = msg.chat.id;
  idBot0 = msg.chat.id;
  // msg.from.username se encarga de recoger el @alias del usuario.
  var username = msg.from.username;
  // Enviamos un mensaje indicando el id del chat, y concatenamos el nombre del usuario con nuestro saludo
  botPrincipal.sendMessage(chatId, "Bienvenido, " + username + " al chat de citas, escribe el codigo de la chica:");

});

botPrincipal.on('message', function(msg){
    var chatId = msg.chat.id;
    var mensaje_principal = msg.text;
    console.log(msg);
    
    if (mensaje_principal==girl15.code){
        console.log(mensaje_principal); console.log(girl15.code);  console.log(chat1.link);  console.log(chat5.token);  console.log(girl15.ID);
        
        //bot0.sendMessage(chatId, "Bienvenido, " + username + " al chat de "+girl11.name+" codigo: "+girl11.code);
        botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa a la sala privada de '+girl15.name+' haz click en el siguiente enlace '+ chat5.link);
        //chat5.sendMessage(girl15.ID, 'hola chica el usuario te va escribir'+username);
        botPrincipal.sendMessage(girl15.ID, 'hola chica el usuario te va escribir al room5 '+ chat5.link);
        var bot_chat5 = new TelegramBot(chat5.token, {polling:true});
        //chat5.sendMessage(girl15.ID, 'hola este es el chatroom');
        roomToken=chat5.token;
        userID=chatId;
        girlID=girl15.ID;
        roomBusy=1;
        userChat=userID;
        girlChat=girlID;
        console.log(roomBusy);

    } else {

      botPrincipal.sendMessage(chatId, 'Has ingresado un codigo errado, vuelve a escribirlo:');
    }
    
    

    if (roomBusy==1){

      console.log("este es: "+roomBusy);
    
    var token_b0 = roomToken; //  t.me/cali_girls_bot   
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
    
    }





});


 




var token_b0 = roomToken; //  t.me/cali_girls_bot   
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
    
    


