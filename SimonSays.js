"use STRICT";

var variables = [];
var coordenadas = [];
var counter = document.getElementById("counter");
var tabla = document.getElementById("tabla");
var dificulty;
var modes = [["Facil", 16, 8], ["Media", 20, 10], ["Dificil", 24, 12]];
var chances = modes[1]

window.onload = function () {
    var i = 0;
    console.log("¡¡" + chances[2]);
    for (i = 0; i < 5; i++) {
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        for (j = 0; j < 4; j++) {
            var div = document.createElement("div");
            div.setAttribute("class", "box");
            var span = document.createElement("span");
            span.setAttribute("class", "button")
            var text = generate();
            span.appendChild(document.createTextNode(text));
            div.appendChild(span);
            container.appendChild(div);
        }
        tabla.appendChild(container);
    }
    coordinates();
    
    document.querySelectorAll(".mode").forEach(e => {
        e.addEventListener("click", function () {
            dificulty = e.innerHTML;
            console.log(dificulty);
        })
    })

    document.querySelectorAll(".button").forEach(e => {

        e.addEventListener("click", function () {

            if (e.innerHTML == coordenadas[i]) {
                i++;
                var div = document.createElement("div");
                var span = document.createElement("span");
                span.appendChild(document.createTextNode(e.innerHTML));
                div.appendChild(span);
                counter.insertAdjacentElement('beforeend', div);
                console.log("true");
                console.log("--------------------");
                console.log(i);

            } else {
                i = 0;
            }
        })
    });



    coordenadas.forEach((element) => {
        console.log("------------------------------");
        console.log(element);
    });
}

function generate() {
    while (variables.length <= 19) {
        var valor = Math.ceil(Math.random() * (20));
        while (variables.includes(valor)) {
            valor = Math.ceil(Math.random() * (20));
        }
        variables.push(valor);
        return valor;
    }
}

function coordinates() {

    while (coordenadas.length < 12) {

        var coor = Math.ceil(Math.random() * (12));
        while (coordenadas.includes(coor)) {
            coor = Math.ceil(Math.random() * (12));
        }
        coordenadas.push(coor);
    }
}



