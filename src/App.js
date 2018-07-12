
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
}

//variable
var fecha = Date()

function getUniversity() {
	//Condicional, si se cumple se asigna lo que va despues de ?, si no, se asigna lo que va
	//despues de :
	return state.universidad != "" ? state.universidad : "Universidad Desconocida"
}

function cityIs(){
	//inline estilo
	return <h3 style={{color:"blue"}}>{state.ciudad}</h3>
}

function getCity(){
	//operador ternario
	return state.ciudad != "" ? cityIs() : <h3>"Ciudad Desconocida"</h3>
}

//-----------------------

//-------------
//define una variable jsx que es un parrafo, pero no se exporta solo
const template = (
				<div>
					<h1>Esto es codigo JSX y no html, esto va a cambiar en el background </h1>
					<p>oye!</p>
					<input type="submit" value="Clickame"/>
					<ul>
						<li>Pruebalo ya</li>
						<li>Infinidad de posibilidades</li>
						<li>Muchos colores!</li>
					</ul>
				</div>
			);

const templateTwo = 
	(
		<div>
		{/*acakocnapskca*/}
		<h1>Este template no se puede cargar al mismo 
			tiempo que el template1</h1>
		<h3>{state.userName}</h3>
		<h3>{getUniversity()}</h3>
		<h3>{state.genero}</h3>
		{getCity()}
		{(state.edad && state.edad >= 18) && <h3>Edad: {state.edad}</h3>}
		<p>Hola! La fecha es: {fecha}</p>

		</div>
	);

//mandamos a buscar el div con el id = app
const appRoot = document.getElementById('app')

//objecto de ReactDOM que va a llevar nuestros parrafo al index.html
ReactDOM.render(templateTwo, appRoot)