'use STRICT'
var i = 0
var variables = [];
var coordenadas = [];
var tabla = document.getElementById("tabla");
window.onload = function () {
    tabla.addEventListener("click", function (e) {
        switch (e.target.tagName) {

            case "SPAN":
                if (e.target.innerHTML == coordenadas[i]) {
                    console.log("true");
                    console.log("-------------")
                    i++;
                } else {
                    i = 0;
                }
                break;
            
            case "TH":
                console.log(th);
                break;
            default:

        }


    })

    document.querySelectorAll("table td span").forEach(element => {
        if (variables.length <= 15) {
            var valor = Math.round(Math.random() * (16 - 1) + 1);
            
            while (variables.includes(valor)) {
                valor = Math.round(Math.random() * (16 - 1) + 1);
            }
            variables.push(valor);
            element.innerHTML = valor;
        }

        var coor = Math.round(Math.random() * (16 - 1) + 1);

        if (coordenadas.length <= 7) {
            while (coordenadas.includes(coor)) {
                coor = Math.round(Math.random() * (16 - 1) + 1);
            }
            coordenadas.push(coor);

        }
    })

    console.log("------------------------------");
    coordenadas.forEach(element => {
        console.log(element);
    });
}
