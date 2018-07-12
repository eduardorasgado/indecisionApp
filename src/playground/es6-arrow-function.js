const square = function(x){
	return x * x
}

var squareNumber = square(2)
document.write(squareNumber)

//--------------------------ES6
document.write("<p></p>")

const squareArrow = (x) => {
	return x * x
}

document.write(squareArrow(2))

//--------------------------
document.write("<p></p>")
//si la funcion solo regresa un valor entonces podemos hacerlo en una
//sola linea
const squareArrow2 = (x) => Array.from(Array(x).keys())

document.write(squareArrow2(50))