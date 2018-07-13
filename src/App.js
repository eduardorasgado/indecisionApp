
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
const multiJSON = {
	multiplo: 3,
	multiplicados:[1,2,3,4,5,6,7,8],
	timesFunction(){
		return this.multiplicados.map((number) => <li>{number * this.multiplo}</li>)
	}
}
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
		{/*Esto es un comentario*/}
		<h1>Este template no se puede cargar al mismo 
			tiempo que el template1</h1>
		<ul>
		<li>{state.userName}</li>
		<li>{getUniversity()}</li>
		<li>{state.genero}</li>
		{multiJSON.timesFunction()}
		<li>{(state.edad && state.edad >= 18) && <h3>Edad: {state.edad}</h3>}</li>
		</ul>
		
		{getCity()}
		
		<p>Hola! La fecha es: {fecha}</p>

		</div>
	);
let contador = 0

const addOne = () => {
	alert("mas uno")
}

const substractOne = () => {
	alert("menos uno")
}

const reset = () => {
	alert("reinicio")
}

const templateThree = (
		<div style={{background:"blue", margin:"200 0 0 200"}}>
			<h1 style={{color:"white", fontFamily:"'Playfair Display', serif", fontSize:"6em"}}>Contador: {contador}</h1>
			<button onClick={addOne}
					style={{height:60, width:120, fontFamily:"'Raleway', sans-serif", fontWeight:800, fontSize:"1.2em",
							background:"white", border:"solid white 2px", color: "blue"}}
							>Aumentar</button>

			<button onClick={substractOne}
					style={{height:60, width:120, fontFamily:"'Raleway', sans-serif", fontWeight:800, fontSize:"1.2em",
							background:"white", border:"solid white 2px", color: "blue", marginLeft:2}}
							>Disminuir</button>

			<button onClick={reset}
					style={{height:60, width:120, fontFamily:"'Raleway', sans-serif", fontWeight:800, fontSize:"1.2em",
							background:"white", border:"solid white 2px", color: "blue", marginLeft:2}}
							>Reiniciar</button>

		</div>
	)

//mandamos a buscar el div con el id = app
const appRoot = document.getElementById('app')

//objecto de ReactDOM que va a llevar nuestros parrafo al index.html
ReactDOM.render(templateThree, appRoot)