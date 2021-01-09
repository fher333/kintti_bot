var incognita = "Hola Como Estas amigo  http: w w w.hotm  ai l.com j uan Andes ll amam e al tres quince";
incognita1 = incognita.toLowerCase();
incognita1 = incognita1.replace(/ /g, "");
var keywords = ["email", "gmail", "hotmail","yahoo", "outlook", "msn", "google", "instagram", "whatsapp","mail","snapchat","tik", "tok","tango","facebook","face","book","http","@","arroba",".com",".co",".net",".org","www","telegram", "numero","celular","celu","300","301","302","303","304","305","306","307","308","310","311","312","313","314","315","316","317","318","319","320","321","322","323","carrera","cra","calle","cll","ave","avenida","autopista","buscame","llamame","#","movistar","tres"];

console.log(incognita1); 

var resultado = "";
var pos = -1

//uso foreach para recorrer cada elemento del array
keywords.forEach(function(element) {

    //En caso de existir se asigna la posición en pos
    pos = incognita1.indexOf(element.toString());

    //Si existe
    if(pos!=-1){
    resultado += " Palabra "+element+ " encontrada en la posición "+pos;
    console.log(resultado); 
   
    }else{
        //console.log("libre"+ pos);

    }
   
    //break;
});
