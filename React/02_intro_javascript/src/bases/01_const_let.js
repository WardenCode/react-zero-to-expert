// Variables y Constantes
const name = "Diego";
const lastName = "Linares";

let diceValue = 5;
diceValue = 4;

console.log( name, lastName, diceValue );

if ( true ) {
	const name = "Peter";
	let diceValue = 6;

	console.log( "Block/local Scope Name:", name );
	console.log( "Block/local Scope Dice:", diceValue );
}

console.log( "Global Scope:", diceValue );