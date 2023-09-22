
function argazkiaAldatu() {
    rbJauna = document.getElementById("genderjauna");
    rbAndrea = document.getElementById("genderandrea");
    image = document.getElementById("argazkia");
    if (rbJauna.checked) {
        image.src = "img/caraHombre.jpg";
    }
    if (rbAndrea.checked) {
        image.src = "img/caraMujer.jpg";
    }
}

function datuakBistaratu() {


    var emaitzamezuaid = document.getElementById("emaitzamezua");
    var genero = document.querySelector('input[name="gender"]:checked').value;
    var izena = document.getElementById("izena").value;
    var abizena = document.getElementById("abizena").value;
    var helbidea = document.getElementById("helbidea").value;
    var hiria = document.getElementById("hiria").value;
    var gustokoenaElements = document.getElementsByName("gustoak");
    var gustokoena = [];

    for (var i = 0; i < gustokoenaElements.length; i++) {
        if (gustokoenaElements[i].checked) {
            gustokoena.push(gustokoenaElements[i].value);
        }
    }

    var emaitzamezua = `
                    Genero: ${genero}<br>
                    Izena: ${izena}<br>
                    Abizena: ${abizena}<br>
                    Helbidea: ${helbidea}<br>
                    Hiri: ${hiria}<br>
                    Gustokoenak: ${gustokoena.join(", ")}
                `;

    emaitzamezuaid.innerHTML = emaitzamezua;
}