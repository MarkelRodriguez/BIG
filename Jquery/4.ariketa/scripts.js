$(document).ready(function () {
    const itemList = [];

    $("#agregarButton").click(function () {
        const texto = $("#textField").val();
        if (texto.trim() !== "") {
            itemList.push(texto);
            $("#itemList").append("<li>" + texto + "</li>");
            $("#textField").val("");
        }
    });

    $("#estilizarButton").click(function () {
        $("#lista").css({
            "background-color": "green",
            "border": "2px solid black"
        });
        alert("zure erosketa listo dago")
    });
});