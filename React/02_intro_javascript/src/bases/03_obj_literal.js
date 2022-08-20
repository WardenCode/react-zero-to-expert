const person = {
	name: "Diego",
	lastName: "Linares",
	age: 17,
	direction: {
		ciudad: "Lima",
		zip: 2564442,
		lat: 14.65225,
		lng: 34.95424,
	}
};

//console.log( {
//	person: person,
//} );

// And This is the same because, the object and the new object name is the same
// console.log( { person } );

const person2 = { ...person }; // Esto es un clon del primer objeto sin embargo no es una copia profunda, solo es una copia de primer nivel
person2.name = "Austin";

console.log( person );
console.log( person2 );
