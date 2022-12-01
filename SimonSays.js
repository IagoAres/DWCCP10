"use STRICT";

var variables = [];
var coordenadas = [];
var counter = document.getElementById("counter");
var tabla = document.getElementById("tabla");

window.onload = function () {
    console.log(counter.innerHTML);
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
            var texto = generate();
            span.appendChild(document.createTextNode(texto));
            div.appendChild(span);
            container.appendChild(div);
            tabla.appendChild(container);
        }

    }


    console.log("------------------------------");
    coordenadas.forEach((element) => {
        console.log(element);
});
}




function generate() {

    if (variables.length <= 20) {
        var valor = Math.ceil(Math.random() * (20));
        while (variables.includes(valor)) {
            valor = Math.ceil(Math.random() * (20));
        }
        variables.push(valor);

        return valor;
    }

    if (variables.length == 15) {
        var coor = Math.ceil(Math.random() * (8));
        while (coordenadas.includes(coor)) {
            coor = Math.ceil(Math.random() * (8));
        }
        coordenadas.push(coor);
    };


}

function coordenadas(){}



