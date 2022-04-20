console.log("Probando!");

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d")


ctx.fillStyle = "green";

// syntax
// ctx.fillRect(posicionX, posicionY, ancho, alto)

ctx.fillRect(50, 50, 100, 50)

ctx.fillStyle = "red"; // mismos valores que pondria en css;
ctx.fillRect(50, 150, 80, 80);

ctx.fillStyle = "blue";
ctx.fillRect(90, 190, 80, 80)


// borrar seccion del canvas
ctx.clearRect(100, 200, 100, 100)

// ejemplo de borrar todo el canvas
// ctx.clearRect(0, 0, canvas.width, canvas.height)


// METODOS DE TRAZADO

ctx.strokeStyle = "blue";
ctx.strokeRect(50, 300, 150, 150)

ctx.strokeStyle = "red";
// ctx.lineWidth = 20; // lineWidth tambien cambia trazado de
ctx.strokeRect(50, 300, 100, 100)


// trazado de lineas complejas
ctx.beginPath()

ctx.strokeStyle = "yellow"
ctx.moveTo(50, 500) // mover el cursor, sin dibujar a donde queremos iniciar el trazado
ctx.lineTo(120, 550) // trazar desde posicion anterior a posicion nueva
ctx.lineTo(180, 530)
ctx.lineTo(100, 600)
ctx.lineTo(60, 530)
// ctx.fill() // automaticamente rellena el trazado con el ultimo color fill selecionado

ctx.stroke()

ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = "purple"; // para cambiar el ancho de la linea
ctx.lineWidth = 12
ctx.moveTo(60, 530)
ctx.lineTo(20, 580)
ctx.stroke()
ctx.closePath()


// trazados con curvaturas

// syntax de arc
// ctx.arc(posicionX, posicionY, tamañoDeRadio, AnguloInicial, anguloFinal, antiClockwise)

ctx.beginPath() // iniciar trazado
// no hace falta el moveTo
ctx.strokeStyle = "magenta"
ctx.setLineDash([5, 15]); // para crear efecto de lineas punteadas
ctx.arc(400, 120, 80, 0, Math.PI * 1.5, false)

ctx.stroke() // hacer el trazado
ctx.closePath() // cerrar trazado


ctx.beginPath()

ctx.strokeStyle = "brown";
ctx.setLineDash([]);
ctx.arc(400, 120, 40, 0, Math.PI * 2)
ctx.fillStyle = "orange"
ctx.fill() // toma el ultimo color de relleno seleccionado

ctx.stroke()
ctx.closePath()


// Images

let img = new Image();
img.src = "https://tinyurl.com/ironhack-pokemons/22.svg"

img.addEventListener("load", () => {
  ctx.drawImage(img, 400, 400, 150, 100)
})


let img2 = new Image();
img2.src = "https://tinyurl.com/ironhack-pokemons/60.svg"

img2.addEventListener("load", () => {
  ctx.drawImage(img2, 400, 600, 140, 100)
})

