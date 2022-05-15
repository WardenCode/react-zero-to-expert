// Functions

const greetings = function ( name ) {
	return ( `Hola, ${ name }` );
};
// greetings = 20; // this cause a fail and warning
console.log( greetings( 'Goku' ) );

// Be carefull with this instead, use arrow functions of anonymous function inside of a const
// function greetings ( name ) {
// 	return ( `Hola, ${ name }` );
// };

// greetings = 30;

// console.log( greetings );

const greetings2 = ( name ) => {
	return ( `Hola, ${ name }` );
};
const greetings3 = ( name ) => `Hola, ${ name }`;
const greetings4 = () => `Hola, Mundo`;

console.log( greetings2( 'Diego' ) );
console.log( greetings3( 'Austin' ) );
console.log( greetings4() );

const getUser = () =>
( {
	uid: 'AOF587',
	username: 'Kaybu',
} );

const user = getUser;
console.log( user );

// Test
// 1. Normal function to arrow function
// 2. Return an implicit obj
// 3. Tests.

// function getActiveUser ( nickName ) {
// 	return ( {
// 		uid: 'GIF319',
// 		userName: nickName,
// 	} );
// }

const getActiveUser = ( nickName ) => ( {
	uid: 'GIF319',
	username: nickName,
} );

const activeUser = getActiveUser('Warden');
console.log(activeUser);