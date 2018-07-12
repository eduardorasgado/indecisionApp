"use strict";

document.write("hello");

document.write("<p></p>");

var nameVar = "Eduardo";
nameVar = "Rasgado";
document.write(nameVar);

document.write("<p></p>");

//no podemos repetir la constante pero si renombrarla
var nameLet = "Lalo";
nameLet = ":P";
document.write(nameLet);

document.write("<p></p>");

//no podemos ni renombrarla ni repetirla
var nameConst = "Frank";
document.write(nameConst);

document.write("<p></p>");

//desde una funcion VAR------------------------------------------------
function getPetName() {
	var petName = "Braulio";
	return petName;
}
var petName = getPetName();
document.write(petName);

document.write("<p></p>");

//desde una funcion CONST
function getPetName2() {
	var petName = "Fide";
	return petName;
}
var petName2 = getPetName2();
document.write(petName2);

//----------------------------------------------------------------

var fullName = "Eduardo Rasgado Ruiz";

if (fullName) {
	var firstName = fullName.split(' ');
	for (var i = 0; i < firstName.length; i++) {
		document.write("<p>-----------</p>");
		document.write(firstName[i]);
	}
}

//-------------------------------------------------------------------
document.write("<p></p>");

var email = "eduardo.rasgado@gmail.edu.mx";

function emailVerification(email) {
	var emailArroba = email.split("@");
	try {
		var emailPunto = emailArroba[1].split(".");
	} catch (Exception) {
		return false;
	}
	console.log(emailPunto);

	var existeDominio = false;
	var existeExtension = false;

	if (emailPunto[0] == "hotmail" || emailPunto[0] == "gmail" || emailPunto[0] == "yahoo" || emailPunto[0] == "outlook") {
		existeDominio = true;
	}

	var extension = emailPunto.pop();
	if (extension == "com" || extension == "edu" || extension == "mx" || extension == "es") {
		existeExtension = true;
	}

	return existeDominio && existeExtension && true;
}

var emailVerdadero = emailVerification(email);

if (emailVerdadero == true) {
	document.write("Si, es un correo válido");
} else {
	document.write("NO es un correo valido");
}
