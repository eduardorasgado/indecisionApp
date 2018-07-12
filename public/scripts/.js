"use strict";

//REACT
//JSX - Javascript XML   -> se parece a html pero ~

/*
Mantener a babel en escucha:
babel src/App.js --out-file=public/scripts/App.js --presets=env,react --watch

live-server public

*/

//string
var activo = "Estudiante activo del tec";

//json
var state = {
	userName: "Eduardo",
	universidad: "ITISTMO",
	genero: "Masculino",
	ciudad: "Oaxaca, Mexico",
	edad: 24

	//variable
};var fecha = Date();

function getUniversity() {
	//Condicional, si se cumple se asigna lo que va despues de ?, si no, se asigna lo que va
	//despues de :
	return state.universidad != "" ? state.universidad : "Universidad Desconocida";
}

function cityIs() {
	//inline estilo
	return React.createElement(
		"h3",
		{ style: { color: "blue" } },
		state.ciudad
	);
}

function getCity() {
	//operador ternario
	return state.ciudad != "" ? cityIs() : React.createElement(
		"h3",
		null,
		"\"Ciudad Desconocida\""
	);
}

//-----------------------CONST Y LET


//-------------
//define una variable jsx que es un parrafo, pero no se exporta solo
var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Esto es codigo JSX y no html, esto va a cambiar en el background "
	),
	React.createElement(
		"p",
		null,
		"oye!"
	),
	React.createElement("input", { type: "submit", value: "Clickame" }),
	React.createElement(
		"ul",
		null,
		React.createElement(
			"li",
			null,
			"Pruebalo ya"
		),
		React.createElement(
			"li",
			null,
			"Infinidad de posibilidades"
		),
		React.createElement(
			"li",
			null,
			"Muchos colores!"
		)
	)
);

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Este template no se puede cargar al mismo tiempo que el template1"
	),
	React.createElement(
		"h3",
		null,
		state.userName
	),
	React.createElement(
		"h3",
		null,
		getUniversity()
	),
	React.createElement(
		"h3",
		null,
		state.genero
	),
	getCity(),
	state.edad && state.edad >= 18 && React.createElement(
		"h3",
		null,
		"Edad: ",
		state.edad
	),
	React.createElement(
		"p",
		null,
		"Hola! La fecha es: ",
		fecha
	)
);

//mandamos a buscar el div con el id = app
var appRoot = document.getElementById('app');

//objecto de ReactDOM que va a llevar nuestros parrafo al index.html
ReactDOM.render(templateTwo, appRoot);
