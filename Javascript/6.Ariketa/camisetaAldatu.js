function CamisetaAurrera(){
    var camiseta;
  
    if(document.getElementById("camiseta") == "Camiseta 6"){
        camiseta = document.getElementById("camiseta");
        camiseta.innerHTML = "Camiseta 9";
        document.getElementById("camisetaimg").src = "/img/9.jpg"
    } 
    else if(document.getElementById("camiseta") == "Camiseta 9"){
        camiseta = document.getElementById("camiseta");
        camiseta.innerHTML = "Camiseta 11";
        document.getElementById("camisetaimg").src = "/img/11.jpg"
    } 
    else{
        alert("ezin da mugimendu hori egin")
    }
}
function CamisetaAtzera(){
    var camiseta;
  
    if(document.getElementById("camiseta") == "Camiseta 11"){
        camiseta = document.getElementById("camiseta");
        camiseta.innerHTML = "Camiseta 9";
        document.getElementById("camisetaimg").src = "/img/9.jpg"
    } 
    else if(document.getElementById("camiseta") == "Camiseta 9"){
        camiseta = document.getElementById("camiseta");
        camiseta.innerHTML = "Camiseta 6";
        document.getElementById("camisetaimg").src = "/img/6.jpg"
    } 
    else{
        alert("ezin da mugimendu hori egin")
    }
}