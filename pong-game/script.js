

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d")

canvas.style.backgroundColor = "lightgray"

let ballY = 50;
let ballX = 50;
let ballRadius = 20;
let ballSpeed = 4
let ballDirectionX = 1; // muevo a la derecha
let ballDirectionY = 1; // muevo a abajo

let paddleW = 200; // ancho
let paddleH = 50; // alto
// let paddleX = canvas.width / 3; // 300
let paddleX = canvas.width / 2 - paddleW / 2; // 300
let paddleY = canvas.height - 100; // 700

let isGameOn = true;

let drawBall = () => {
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black"
  // ctx.fillRect(ballX, ballY, 50, 50)
  ctx.beginPath()
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2)
  ctx.fill()
  ctx.stroke()
  ctx.closePath()
}

let paddleDraw = () => {
  ctx.fillStyle = "black";
  ctx.fillRect(paddleX, paddleY, paddleW, paddleH)
}

let moveBall = () => {
  ballX = ballX + (ballSpeed * ballDirectionX)
  ballY = ballY + (ballSpeed * ballDirectionY)
}

let ballCollision = () => {
  if (ballX > canvas.width) {
    ballDirectionX = -1; // cambiar la direccion en el eje X
  } else if (ballY > canvas.height) {
    // esto deberia ocasionar el final del juego
    isGameOn = false;
    // ballDirectionY = -1
  } else if (ballX < 0) {
    // no igualar valores cuando hacemos checkeos, en vez, utilizar < > <= >=
    ballDirectionX = 1
  } else if (ballY < 0) {
    ballDirectionY = 1
  }
}

let paddleCollision = () => {
  if (ballX < paddleX + paddleW &&
    ballX + ballRadius > paddleX &&
    ballY < paddleY + paddleH &&
    ballRadius + ballY > paddleY) {
      // collision detected!
      // pelotita rebota hacia arriba
      ballDirectionY = -1
  }
  // if (rect1.x < rect2.x + rect2.w &&
  //   rect1.x + rect1.w > rect2.x &&
  //   rect1.y < rect2.y + rect2.h &&
  //   rect1.h + rect1.y > rect2.y) {
  //   // collision detected!
  // }
}

let gameLoop = () => {
  // console.log("probando")

  // 1. limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 2. mover elementos o acciones
  moveBall()
  ballCollision()
  paddleCollision()

  // 3. dibujar elementos
  drawBall()
  paddleDraw()
  console.log("el juego esta andando")
  // 4. control y recursion
  if (isGameOn) {
    requestAnimationFrame(gameLoop)
  }
}

let paddleMove = (event) => {
  if (event.code === "ArrowLeft") {
    console.log("moviendo izquierda")
    // cambie la posicion del paddle a la izquierda
    // ...
    paddleX = paddleX - 20
  } else if (event.code === "ArrowRight") {
    console.log("moviendo derecha")
    // cambie la posicion del paddle a la derecha
    // ...
    paddleX = paddleX + 20
  }
}

window.addEventListener("keydown", paddleMove)


gameLoop()

// Bonus

// 1. limpiar colision de la pelotita con los bordes
// 2. Que la pelotita incremente su velocidad cuando golpee la paleta
// 3. Checkear que la paleta no pueda salir del canvas
// 4. que rebote por el lateral de la paleta

// super bonus
// 5. que salga un gameover cuando se pierda
// 6 cada segundo del juego sea un score que mostrar
