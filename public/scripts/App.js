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

//-----------------------
var multiJSON = {
	multiplo: 3,
	multiplicados: [1, 2, 3, 4, 5, 6, 7, 8],
	timesFunction: function timesFunction() {
		var _this = this;

		return this.multiplicados.map(function (number) {
			return React.createElement(
				"li",
				null,
				number * _this.multiplo
			);
		});
	}
};
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
		"ul",
		null,
		React.createElement(
			"li",
			null,
			state.userName
		),
		React.createElement(
			"li",
			null,
			getUniversity()
		),
		React.createElement(
			"li",
			null,
			state.genero
		),
		multiJSON.timesFunction(),
		React.createElement(
			"li",
			null,
			state.edad && state.edad >= 18 && React.createElement(
				"h3",
				null,
				"Edad: ",
				state.edad
			)
		)
	),
	getCity(),
	React.createElement(
		"p",
		null,
		"Hola! La fecha es: ",
		fecha
	)
);
var contador = 0;

var addOne = function addOne() {
	alert("mas uno");
};

var substractOne = function substractOne() {
	alert("menos uno");
};

var reset = function reset() {
	alert("reinicio");
};

var templateThree = React.createElement(
	"div",
	{ style: { background: "blue", margin: "200 0 0 200" } },
	React.createElement(
		"h1",
		{ style: { color: "white", fontFamily: "'Playfair Display', serif", fontSize: "6em" } },
		"Contador: ",
		contador
	),
	React.createElement(
		"button",
		{ onClick: addOne,
			style: { height: 60, width: 120, fontFamily: "'Raleway', sans-serif", fontWeight: 800, fontSize: "1.2em",
				background: "white", border: "solid white 2px", color: "blue" }
		},
		"Aumentar"
	),
	React.createElement(
		"button",
		{ onClick: substractOne,
			style: { height: 60, width: 120, fontFamily: "'Raleway', sans-serif", fontWeight: 800, fontSize: "1.2em",
				background: "white", border: "solid white 2px", color: "blue", marginLeft: 2 }
		},
		"Disminuir"
	),
	React.createElement(
		"button",
		{ onClick: reset,
			style: { height: 60, width: 120, fontFamily: "'Raleway', sans-serif", fontWeight: 800, fontSize: "1.2em",
				background: "white", border: "solid white 2px", color: "blue", marginLeft: 2 }
		},
		"Reiniciar"
	)
);

//mandamos a buscar el div con el id = app
var appRoot = document.getElementById('app');

//objecto de ReactDOM que va a llevar nuestros parrafo al index.html
ReactDOM.render(templateThree, appRoot);
