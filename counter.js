const point = document.getElementById("point")
const counter = document.getElementById("counter")
//Incremento de puntos
let counterIncr = 0

function movePoint() {

    //Calcular el tamaño de la pantalla para evitar generación del punto en sus limites
    const maxX = window.innerWidth - 30
    const maxY = window.innerHeight - 30
    //Generación del punto en los ejes x e y
    const x = Math.random() * maxX
    const y = Math.random() * maxY

    //Muestra la nueva posición de punto
    point.style.left = `${x}px`
    point.style.top = `${y}px`


}

point.addEventListener("click", () => {

    counterIncr++
    counter.innerHTML = `Clicks: ${counterIncr}`
    movePoint()

})