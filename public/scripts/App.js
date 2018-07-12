"use strict";

var square = function square(x) {
	return x * x;
};

var squareNumber = square(2);
document.write(squareNumber);

//--------------------------ES6
document.write("<p></p>");

var squareArrow = function squareArrow(x) {
	return x * x;
};

document.write(squareArrow(2));

//--------------------------
document.write("<p></p>");
//si la funcion solo regresa un valor entonces podemos hacerlo en una
//sola linea
var squareArrow2 = function squareArrow2(x) {
	return Array.from(Array(x).keys());
};

document.write(squareArrow2(50));
