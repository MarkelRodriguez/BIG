function LiburuakGorde(){

    var liburua;
    var liburuak = [
        {
            titulua:"El chico de arriba",
            autorea:"anonimoa",
            irakurrita: true
        },
        {
            titulua:"Raul-en bizitza",
            autorea:"anonimoa",
            irakurrita: false
        },
        {
            titulua:"Haritz-en bizitza",
            autorea:"anonimoa",
            irakurrita: true
        }
    ]
    
    
   
    for(var i = 0 ; i < liburuak.length; i++){
        liburua = liburuak[i];
        if(liburua.irakurrita == true){
            alert("liburu hau irakurri duzu " + liburua.titulua + " "+ liburua.autorea);
        }
        else{
            alert("liburu hau irakurri behar duzu " + liburua.titulua + " " + liburua.autorea);
        }
    }
}