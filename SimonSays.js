"use STRICT";

var variables = [];
var coordenadas = [];
var counter = document.getElementById("counter");
var tabla = document.getElementById("tabla");

window.onload = function () {
    var i = 0;
    document.querySelectorAll(".area").forEach((e) => {

        e.addEventListener("click", function () {
            if (e.innerHTML == coordenadas[i]) {

                var div = document.createElement("div");
                var span = document.createElement("span");
                span.appendChild(document.createTextNode(e.innerHTML));
                div.appendChild(span);
                console.log(div);
                counter.insertAdjacentElement('beforeend', div);
                console.log("true");
                console.log("--------------------");
                i++;
            } else {
                i = 0;
            }
        })
    });


    for (i = 0; i < 5; i++) {
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        for (j = 0; j < 4; j++) {
            var div = document.createElement("div");
            div.setAttribute("class", "box");
            var span = document.createElement("span");
            var text = generate();
            span.appendChild(document.createTextNode(text));
            div.appendChild(span);
            container.appendChild(div);
            tabla.appendChild(container);
        }

    }

    coordinates;

    console.log(coordenadas[0])
    coordenadas.forEach((element) => {
        console.log(element);
        console.log("------------------------------");
    });
}

function generate() {
    while (variables.length <= 19) {
        var valor = Math.ceil(Math.random() * (20));
        while (variables.includes(valor)) {
            valor = Math.ceil(Math.random() * (20));
        }
        variables.push(valor);
        console.log(valor)
        return valor;
    }
}

function coordinates() {
    while (coordenadas.length <= 10) {
        var coor = Math.ceil(Math.random() * (8));
        while (coordenadas.includes(coor)) {
            coor = Math.ceil(Math.random() * (8));
        }
        coordenadas.push(coor);
    }
}



