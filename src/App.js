
//REACT
//JSX - Javascript XML   -> se parece a html pero ~

//define una variable jsx que es un parrafo, pero no se exporta solo
var template = <p>Esto es codigo JSX y no html, esto va a cambiar en el background </p>

//mandamos a buscar el div con el id = app
var appRoot = document.getElementById('app')

//objecto de ReactDOM que va a llevar nuestros parrafo al index.html
ReactDOM.render(template, appRoot)