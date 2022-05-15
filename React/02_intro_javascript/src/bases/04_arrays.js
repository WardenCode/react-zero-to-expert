

// Arrays en JS
// const array = new Array( 100 );
const array = [ 1, 2, 3, 4 ];
// No utilizar el push en react en su lugar usaremos el operador spread.
// array.push( 1 );
// array.push( 2 );
// array.push( 3 );
// array.push( 4 );

let array2 = [ ...array, 5 ]; // lo que realmente hace el spread operator es extraer la informacion de lo que le pasemos

const array3 = array2.map( ( num ) => num * 2 );

console.log( array );
console.log( array2 );
console.log( array3 );