function Faktoriala(){
    var zenb;
    var faktoriala = 1;
    zenb = prompt("sartu zenbakia:");
    zenbInt = parseInt(zenb);
    
    for(i = 1; i <= zenbInt; i++){
        faktoriala *= i;
    }
    alert(faktoriala);
}