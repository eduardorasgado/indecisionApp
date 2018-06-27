
//REACT
//JSX - Javascript XML   -> se parece a html pero ~

//define una variable jsx que es un parrafo, pero no se exporta solo

//ESTO ES BABEL
var template = React.createElement(
  "p",
  null,
  "ESTO ES JSX Y NO ES HTML, VIENE DE App.js"
);

//mandamos a buscar el div con el id = app
var appRoot = document.getElementById('app')

//objecto de ReactDOM que va a llevar nuestros parrafo al index.html
ReactDOM.render(template, appRoot)