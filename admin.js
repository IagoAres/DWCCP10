"use STRICT";
var i = 0;
var variables = [];
var coordenadas = [];
var tabla = document.getElementById("tabla");
var th_span = document.getElementById("th");

window.onload = function () {
    document.querySelectorAll(".texto").forEach((e) => {

        e.addEventListener("click", function () {

            if (e.innerHTML == coordenadas[i]) {

                var div = document.createElement("div");
                var p = document.createElement("p");
                p.appendChild(document.createTextNode(e.innerHTML));
                div.appendChild(p);
                console.log(div);

                th_span.insertAdjacentElement('beforeend',div);

                console.log("true");
                console.log("-------------");
                i++;
            } else {
                i = 0;
            }

        })
    });



    document.querySelectorAll(".texto").forEach((element) => {
        if (variables.length <= 19) {
            var valor = Math.round(Math.random() * (20 - 1) + 1);

            while (variables.includes(valor)) {
                valor = Math.round(Math.random() * (20 - 1) + 1);
            }
            variables.push(valor);
            element.innerHTML = valor;
        }

        var coor = Math.round(Math.random() * (20 - 1) + 1);

        if (coordenadas.length <= 7) {
            while (coordenadas.includes(coor)) {
                coor = Math.round(Math.random() * (20 - 1) + 1);
            }
            coordenadas.push(coor);
        }
    });

    console.log("------------------------------");
    coordenadas.forEach((element) => {
        console.log(element);
    });

};