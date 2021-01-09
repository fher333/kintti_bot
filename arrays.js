var roomChat = [
    
    [0 , "room000", '1071043028:AAE82MBopRIrsVnRvij9J3YG-Cd_Mn98V8c',false,"t.me/ChicaCali_bot"],
    [1 , "room001", '1054009828:AAFNXsqZ8eCHq4_nssTWfi8vGz-nZYMoaBc',false,"t.me/UserCali_bot"]

];
var users = [
    {name: 'david', id: 851567315}, 
    {name: 'alejandro', id: 921828190}
];


var room1 = {name:"Chat Room 1", token: '1266204356:AAEMD4OCm9n75dYjNEqsbLSse61eys6ECCs', used: true, userOk: false, girlOK: false, link: "t.me/user_cali_bot"};
var room2 = {name:"Chat Room 2", token: '838906383:AAGAyVvkVQL1bKkw4DZ9K5KQ08HY_pkILvM', used: true, userOk: false, girlOK: false, link: "t.me/room_2_bot"};
var room3 = {name:"Chat Room 3", token: '1054009828:AAFNXsqZ8eCHq4_nssTWfi8vGz-nZYMoaBc', used: true, userOk: false, girlOK: false, link: "t.me/UserCali_bot"};
var room4 = {name:"Chat Room 4", token: '1071043028:AAE82MBopRIrsVnRvij9J3YG-Cd_Mn98V8c', used: false, userOk: false, girlOK: false, link: "t.me/ChicaCali_bot"};
var room5 = {name:"Chat Room 5", token: '1103870332:AAHMLWODcJ2G9g4emsAJpNArieFGhUp5PCc', used: true, userOk: false, girlOK: false, link: "t.me/Chica_1_bot"};
var room6 = {name:"Chat Room 6", token: '1170692133:AAGUVL7iyrcG6Xo4SnWfAEJslS_cF_InWI4', used: true, userOk: false, girlOK: false, link: "t.me/room_6_bot"};

var rooms = [room1, room2, room3, room4, room5, room6];

var userBaned = [];
//room1=roomChat[1];
//console.log(room1[4]);

var a = [2,"room002",'xxxxxxxxx',false, "t.me/sdscdf_bot"];

roomChat1=roomChat.push(a);


console.log(roomChat[2][4]);
console.log(users[1].name)
console.log(rooms[6-1].token)

chatId=921828190;

users.forEach(element => {
    if (chatId==element.id) {
        console.log("ya eres usuario"+element.name)
        index=element.index;
        
    }else{
        console.log("eres nuevo"+element.name)
        users.push({name: 'fher', id: 94533884});
    }
});
console.log(users[2].name)
console.log(users)
//console.log(index)

indice=users.findIndex(usuario =>{
    return usuario.id==94533884
})
console.log(indice)


banedPos=userBaned.findIndex(usuariob =>{
    return usuariob.id==94533884;
})
console.log(banedPos)

function roomSelect(){

    var encontrado=false;
    var cont = 0;
    var sizeRooms = rooms.length;

    while (encontrado==false) {
    
        if (cont<sizeRooms){

            if(rooms[cont].used==false){
                
                encontrado=true
                console.log('final de la funcion var cont: '+cont);
                console.log('estatus de la variable encontrado'+encontrado);
                return cont;
                

            }else {
    
                
                cont ++

                    
            }

        }

        if (cont==sizeRooms){
            encontrado=true;
            return -1;
            console.log('final de la funcion var cont: '+cont);
            console.log('estatus de la variable encontrado'+encontrado);
        }
        
        

    }

   
}

salida=roomSelect();
console.log('Room asignado '+salida);


