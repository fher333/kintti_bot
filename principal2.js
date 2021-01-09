var TelegramBot = require('node-telegram-bot-api'); //se invoca la libreria de none-telegram-bot-api


var monitor = {name:"monitor", code: 16, ID: 717550092, city: "cali", age: 19, category: "cita", numberPhone: 321457889,  chatOnline: false};
var girl11 = {name:"Jeka", code: 11, ID: 1250187130, city: "cali", age: 28, category: "amistad", numberPhone: 3212215487,  chatOnline: false};
var girl12 = {name:"maryu", code: 12, ID: 1204215559, city: "cali", age: 22, category: "cita", numberPhone: 3155584525,  chatOnline: false};
var girl13 = {name:"luisa", code: 13, ID: 1115398938, city: "cali", age: 18, category: "amistad", numberPhone: 3187895847,  chatOnline: false};
var girl14 = {name:"nayi", code: 14, ID: 1135835787, city: "cali", age: 30, category: "amistad", numberPhone: 3217896587,  chatOnline: false};
var girl15 = {name:"La Gata", code: 15, ID: 933443152, city: "cali", age: 18, category: "cita", numberPhone: 3202235689,  chatOnline: false};

var chatMonitor = {name:"Chat Room 2", token: '1274008775:AAFeXXPT9b2tK_V77dElNmZ0ErG74oK9aaw', used: false, userOk: false, girlOK: false, link: "t.me/user_bog_bot"}; //monitor
var room1 = {name:"Chat Room 1", token: '1266204356:AAEMD4OCm9n75dYjNEqsbLSse61eys6ECCs', used: false, userOk: false, girlOK: false, link: "t.me/user_cali_bot"};
var room2 = {name:"Chat Room 2", token: '838906383:AAGAyVvkVQL1bKkw4DZ9K5KQ08HY_pkILvM', used: false, userOk: false, girlOK: false, link: "t.me/room_2_bot"};
var room3 = {name:"Chat Room 3", token: '1054009828:AAFNXsqZ8eCHq4_nssTWfi8vGz-nZYMoaBc', used: false, userOk: false, girlOK: false, link: "t.me/UserCali_bot"};
var room4 = {name:"Chat Room 4", token: '1071043028:AAE82MBopRIrsVnRvij9J3YG-Cd_Mn98V8c', used: false, userOk: false, girlOK: false, link: "t.me/ChicaCali_bot"};
var room5 = {name:"Chat Room 5", token: '1103870332:AAHMLWODcJ2G9g4emsAJpNArieFGhUp5PCc', used: false, userOk: false, girlOK: false, link: "t.me/Chica_1_bot"};
var room6 = {name:"Chat Room 6", token: '1170692133:AAGUVL7iyrcG6Xo4SnWfAEJslS_cF_InWI4', used: false, userOk: false, girlOK: false, link: "t.me/room_6_bot"};

var rooms = [room1, room2, room3, room4, room5, room6];

var keywords = ["email", "gmail", "hotmail","yahoo", "outlook", "msn", "google", "instagram", "whatsapp","mail","snapchat","tik", "tok","tango","facebook","face","book","http","@","arroba",".com",".co",".net",".org","www","telegram", "numero","celular","celu","300","301","302","303","304","305","306","307","308","310","311","312","313","314","315","316","317","318","319","320","321","322","323","carrera","cra","calle","cll","ave","avenida","autopista","buscame","llamame","#","movistar","tres"];

var tokenPrincipal = '1145096687:AAFVKlN7KkpQCmdjjWLOiuZEVVLGHQwzbWg'; //  t.me/cali_girls_bot  bot principal
var tokenMonitor = chatMonitor.token;
var userMonitor =  monitor.ID;
var idBot0 = "";
var roomBusy=1;
var num = '5';
var tokenRoom2 = room2.token; 
var tokenRoom5 = room5.token; 
var tokenRoom6 = room6.token;  

// var wordUser = -1;
// var wordGirl = -1;
// var Upos=-1;
// var Gpos=-1;
var botMonitor = new TelegramBot(tokenMonitor, {polling:true}); 
var botPrincipal = new TelegramBot(tokenPrincipal, {polling:true}); 
var botRoom2 = new TelegramBot(tokenRoom2, {polling:true}); 
var botRoom5 = new TelegramBot(tokenRoom5, {polling:true}); 
var botRoom6 = new TelegramBot(tokenRoom6, {polling:true}); 

function sendMessageRoom(msgText,roomSelect,userChat,girlChat,typeAnswer) {


    switch (roomSelect) {
            case 1:

            if (typeAnswer==error) {
                botRoom5.sendMessage(userChat,"Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!");
                botRoom5.sendMessage(girlChat,"El usuario esta tratando de escribirte texto no aceptado");
            }
            
            break;
            case 2:
            
            break;
            case 3:
            
            break;
            case 4:
            
            break;
    
        default:
            break;
    }
    
}

function sendMessageUserGirl(msgText,whoWriteId,userChat,girlChat) {
    
    var wordUser = -1;
    var wordGirl = -1;
    var Upos=-1;
    var Gpos=-1;
    
    if (whoWriteId==userChat)
    {
        
            echoRev = msgText.toLowerCase();
            echoRev = echoRev.replace(/ /g, "");
            //uso foreach para recorrer cada elemento del array
            keywords.forEach(function(element) 
            {
                //En caso de existir se asigna la posición en pos
                wordUser = echoRev.indexOf(element.toString());
       
                if (wordUser!=-1)
                {
                    Upos=1;
    
                }

            });
                    
            if (Upos==1)
            {
                botRoom5.sendMessage(userChat,"Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!");
                botRoom5.sendMessage(girlChat,"El usuario esta tratando de escribirte texto no aceptado");
                botMonitor.sendMessage(monitor.ID, 'El usuario intenta enviar texto no aceptado '+msgText);
        
                Upos=-1;
                
            } else {
                //console.log(msgText);console.log(whoWriteId);console.log(userChat);console.log(girlChat);
                        botRoom5.sendMessage(girlChat,"usuario#1 dice: "+msgText); //933443152 es el numero identificador de la chica   
                        botMonitor.sendMessage(monitor.ID, "usuario#1 dice: "+msgText);
                        
                        
                        console.log(msgText);
                        
                    }
      } else if (whoWriteId==girlChat)
                {

                echoRev = msgText.toLowerCase();
                echoRev = echoRev.replace(/ /g, "");
                //uso foreach para recorrer cada elemento del array
                keywords.forEach(function(element) {
                //En caso de existir se asigna la posición en pos
                wordGirl = echoRev.indexOf(element.toString());
            
                    if (wordGirl!=-1){
                        Gpos=1;
            
                    }

        });
       
            if (Gpos==1){

                botRoom5.sendMessage(girlChat,"Estas usando palabras NO ACEPTADAS, Sí persiste tu cuenta sera cancelada!");
                botRoom5.sendMessage(userChat,"La chica esta tratando de escribirte texto no aceptado");
                botMonitor.sendMessage(monitor.ID, 'La chica intenta enviar texto no aceptado '+msgText);
        
                Gpos=-1;
            }else{
            botRoom5.sendMessage(userChat,"chica#1 dice: "+msgText);
            botMonitor.sendMessage(monitor.ID, "chica#1 dice: "+msgText);
            console.log(msgText);
            }
       
    }

}



botPrincipal.onText(/^\/start/, function(msg){
  console.log(msg.text);
  var chatId = msg.chat.id;
  console.log(msg.chat.id);
  idBot0 = msg.chat.id;
  var username = msg.from.username;
  botPrincipal.sendMessage(chatId, "Bienvenido, " + username + " al chat de citas, escribe el codigo de la chica:");

});

botPrincipal.on('message', function(msg){
    
    var chatId = msg.chat.id;
    var mensaje_principal = msg.text;
    console.log(msg.text);

    //921828190  alejo
    //851567315 perez
switch(mensaje_principal){
    case '11':
      //break;
    case '12':

        botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+room2.name+' de '+girl12.name+' haz click en el siguiente enlace: '+ room2.link);
        botPrincipal.sendMessage(girl15.ID, 'Hola chica el usuario '+msg.from.first_name+' te va escribir al '+room2.name+' haz click en este link: '+ room2.link);
        botMonitor.sendMessage(monitor.ID, 'el usuario '+msg.from.first_name+' ingreso el codigo correcto '+girl12.code+' de la chica '+girl12.name+' y el room habilitado es: '+ room2.link);
        var photo = 'cats.png';
        botPrincipal.sendPhoto(chatId, photo, {caption: 'La Gata'});
        console.log("inicio el roomBusy: "+roomBusy);
        roomBusy=0;
        userChat12=chatId;
        girlChat12=girl15.ID;
        break;

    case '13':

    case '14':

    case '15':

        botPrincipal.sendMessage(chatId, 'Bienvenido, ingresa al '+room5.name+' de '+girl15.name+' haz click en el siguiente enlace: '+ room5.link);
        botPrincipal.sendMessage(girl15.ID, 'Hola chica el usuario '+msg.from.first_name+' te va escribir al '+room5.name+' haz click en este link: '+ room5.link);
        botMonitor.sendMessage(monitor.ID, 'el usuario '+msg.from.first_name+' ingreso el codigo correcto '+girl15.code+' de la chica '+girl15.name+' y el room habilitado es: '+ room5.link);
        var photo = 'perra.png';
        botPrincipal.sendPhoto(chatId, photo, {caption: 'La perra'});
        console.log("inicio el roomBusy: "+roomBusy);
        roomBusy=0;
        userChat15=chatId;
        girlChat15=girl15.ID;
        break;

    default:
        botPrincipal.sendMessage(chatId, 'Has ingresado un codigo errado, vuelve a escribir el codigo de la chica:');
  }


     
});

if(roomBusy==0){console.log("cambio el roomBusy: "+roomBusy);}



botRoom2.on('message', function(msg){   //la funcion onText permite recibir los textos e ID de quien ingresa al Bot
    console.log("userchat: "+userChat12);
    var chatId = msg.chat.id; // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
    var username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
    var echo = msg.text;
    sendMenssageUserGirl(echo,chatId,userChat12,girlChat12);
    
});

botRoom5.on('message', function(msg){   //la funcion onText permite recibir los textos e ID de quien ingresa al Bot
    console.log("userchat: "+userChat15);
    var chatId = msg.chat.id; // msg.chat.id se encarga de recoger el id del chat donde se está realizando la petición.
    var username = msg.from.first_name; //msg.from.first_name se encarga de recoger el nombre del usuario
    var echo = msg.text;
    console.log("texto: "+echo);
    sendMessageUserGirl(echo,chatId,userChat15,girlChat15);
    
});



  
    botMonitor.on('message', function(msg){console.log("estamos dentro del bot monitor") });


  


    