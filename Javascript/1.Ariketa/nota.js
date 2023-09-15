function Batezbeste(){
    var nota, notaGuztira = 0
    

    for(i = 0; i <= 2; i++){
        nota = prompt("sartu nota bat", 0);
        notaInt = parseInt(nota);
        notaGuztira = notaGuztira + notaInt;
    }
    if(notaGuztira / 3 >= 5){
        alert("gaindituta");
    }
    else{
        alert("ez duzu gainditu");
    }
}