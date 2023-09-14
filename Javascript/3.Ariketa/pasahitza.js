function Pasahitza(){
    var pasahitza1,  pasahitza2;
    pasahitza1 = prompt("pasahitza sartu");
    pasahitza2 = prompt("pasahitza sartu");
    
    while(pasahitza1 != pasahitza2){
        alert("Ez dira berdinak");
        pasahitza1 = prompt("pasahitza sartu");
        pasahitza2 = prompt("pasahitza sartu");
    }
    
    alert("Ongi etorri")
        
}
