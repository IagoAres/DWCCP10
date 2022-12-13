"use STRICT";

var variables = [];
var coordenadas = [];
var counter = document.getElementById("counter");
var tabla = document.getElementById("tabla");
var rows;
var cols;
var coordinates;
var modes = [["Facil", 4, 4, 8], ["Media", 4, 5, 10], ["Dificil", 4, 6, 12]];

window.onload = function () {
    var i = 0;
    document.querySelectorAll(".mode").forEach(e => {
        e.addEventListener("click", function () {
            modes.forEach(element => {
                if (element[0] == e.innerHTML) {
                    rows = element[1];
                    cols = element[2];
                    coordinates = element[3];
                    variables.length = 0;
                    coordenadas.length = 0;
                    LuckyNumbers();
                    BuildTable();
                }
            })
            coordenadas.forEach((element) => {
                console.log("------------------------------");
                console.log(element);
            });
            console.log("#####################################################################");
        })  
    })
}

function BuildTable() {
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    for (i = 0; i < cols; i++) {
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        for (j = 0; j < rows; j++) {
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
                while (counter.firstChild) {
                    counter.removeChild(counter.firstChild);
                }
                i = 0;
            }
        })
    });
}

function generate() {
    if (variables.length < ((rows * cols))) {
        var valor = Math.ceil(Math.random() * (rows * cols));
        while (variables.includes(valor)) {
            valor = Math.ceil(Math.random() * (rows * cols));
        }
    }
    variables.push(valor);
    return valor;
}

function LuckyNumbers() {
    if (coordenadas.length >= 8) {
        coordenadas.length = 0;
    }

    while (coordenadas.length < coordinates) {
        var coor = Math.ceil(Math.random() * (coordinates));
        while (coordenadas.includes(coor)) {
            coor = Math.ceil(Math.random() * (coordinates));
        }
        coordenadas.push(coor);
    }
}