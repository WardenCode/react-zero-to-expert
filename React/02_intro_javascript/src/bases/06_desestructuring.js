// Desestructuring
// Asignacion Desestructurante

// Lo que usariamos normalmente sin desestructuración
// const person = {
// 	name: 'Tony',
// 	age: 45,
// 	key: 'Ironman',
// };

// console.log( person.name );
// console.log( person.age );
// console.log( person.key );

const person = {
	name: 'Tony',
	age: 45,
	key: 'Ironman',
};

// const { name, age, key } = person;
// If you already have a variable with the name of a element you can rename.
const { name: name2, age, key } = person;

console.log( name2 );
console.log( age );
console.log( key );

// const returnPerson = ( user ) => {
// 	const { name, age, key } = user;
// 	console.log( name, age, key );
// };

// OR
// Desestructuring the parameter
// You can use any order and if the obj haven't a property we can use a default parameter.
// const returnPerson = ( { name, age, lastName = 'Linares' } ) => {
// 	console.log( name, age, lastName );
// };

// If you have a parameter called of the same way of the key of the
// obj returned we can use only the name of de variable and the key will be this name
const _useContext = ( { name, age, lastName = 'Linares', key } ) => ( {
	keyName: key,
	age,
	latlng: {
		lat: 15.9821,
		lng: -20.8009,
	},
} );

const common = _useContext( person );

// If we need the properties of the other obj inside the obj we can desestructuring too, is like rename but with {}
// But this isn't common
// const { keyName, age: ageCommon, latlng: { lat, lng } } = common;
// Instead use
const { keyName, age: ageCommon, latlng } = common;
const { lat, lng } = latlng;

console.log( keyName, ageCommon );
console.log( lat, lng );
