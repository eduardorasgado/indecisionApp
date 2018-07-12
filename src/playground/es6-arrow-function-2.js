//arrow functions con 2 entradas

const add = function(a,b) {
	return a + b
}

document.write(add(4, 8))

document.write("<p></p>")
//----------------------------------------------------

const addArrow = (a,b) => a + b

document.write(addArrow(4, 9))

document.write("<p></p>")
//----------------------------------------------------

const user = {
	name: 'Lalo',
	cities: ['New York', 'CDMX', 'Paris', 'Juchitan', 'Copenhagen'],
	printPlacesLived: function(){
		this.cities.forEach(function(city){
			document.write("<p></p>")
			document.write(this.name + 'ha estado en ' + city)
		}.bind(this))
	},
	happy: true
}

user.printPlacesLived()
document.write("<p>----------------------</p>")

//----------------------------------------------------

const user2 = {
	name: 'Francisco',
	cities: ['New York', 'CDMX', 'Paris', 'Juchitan', 'Copenhagen'],
	printPlacesLived2(){
		this.cities.forEach((city) => {
			document.write("<p></p>")
			document.write(this.name + 'ha estado en ' + city)
		})
	},
	happy: true
}

user2.printPlacesLived2()

document.write("<p>----------------------</p>")

//----------------------------------------------------

const user3 = {
	name: 'Francisco',
	cities: ['New York', 'CDMX', 'Paris', 'Juchitan', 'Copenhagen'],
	printPlacesLived3(){
		const cityMessages = this.cities.map((city) => {
			return city
		})
		return cityMessages
	},
	happy: true
}

document.write(user3.printPlacesLived3())