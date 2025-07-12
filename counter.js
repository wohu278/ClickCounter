const point = document.getElementById("point")
const counter = document.getElementById("counter")
const timer = document.getElementById("timer")
//Incremento de puntos
let counterIncr = 0
//Estado de el juego
let gameOn = false
let gameOver = false
//Temporizador
let timeLeft = 15
let intervalValue

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

//Función para empezar el juego
function startGame () {

    //El juego comienza
    gameOn = true

    //Intervalo de tiempo entre cada cambio de segundo
    intervalValue = setInterval(() => {

        timeLeft--
        timer.innerHTML = `Time: ${timeLeft}`

        //Cuando llegue a 0, se detiene el juego
        if (timeLeft <= 0) {

            endGame()

        }

    }, 1000)

}

function endGame() {

    //Cuando el juego acaba
    clearInterval(intervalValue)
    gameOver = true
    point.style.display = "none"
    timer.innerHTML = `<span style='color: red'>GAME OVER</span>`

}

//Acción al hacer click
point.addEventListener("click", () => {

    //El contador va sumando a cada click
    counterIncr++
    counter.innerHTML = `Clicks: ${counterIncr}`

    //Si le da el primer click, empieza el juego
   if(counterIncr == 1){

        startGame()

   }

   movePoint()

})

movePoint()