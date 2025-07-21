const point = document.getElementById("point")
const counter = document.getElementById("counter")
const timer = document.getElementById("timer")
const end = document.getElementById("endGame")
//Decremento del contador de puntos
let counterDecr = 15
//Estado del juego
let gameOn = false
//Temporizador
let timeLeft = 0
let timeOn = false
let time

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

function startTime() {

    //El tiempo comienza
    timeOn = true

    //Intervalo de tiempo entre cada cambio de segundo
    intervalValue = setInterval(() => {

        timeLeft++
        timer.innerHTML = `Time: ${timeLeft}`

    }, 1000)

}

function endGame() {

    //Cuando el juego acaba
    clearInterval(intervalValue)
    timeOn = false
    point.style.display = "none"
    end.style.display = "block"
    end.innerHTML += `<span style='color: green'>Challenge complete in: ${timeLeft}s</span>`

}

point.addEventListener("click", () => {

    //Si el juego no ha comenzado, se inicia
    if (!gameOn) {
        gameOn = true
        startTime()
    }

    //El contador de puntos se decrementa
    counterDecr--
    counter.innerHTML = `Counter: ${counterDecr}`

    //Si el contador llega a 0, se detiene el juego
    if (counterDecr <= 0) {
        endGame()
        return
    }

    //Mueve el punto a una nueva posición
    movePoint()

})

movePoint()