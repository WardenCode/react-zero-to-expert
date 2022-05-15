// Template Strings

const name = "Diego";
const lastName = "Linares";

const fullName = `${ name } ${ lastName }`;
console.log( fullName );

function getSaludo( name ) {
	return `Hola ${ name }`;
}

console.log( `Este es un texto ${ getSaludo( "Diego" ) }` );
