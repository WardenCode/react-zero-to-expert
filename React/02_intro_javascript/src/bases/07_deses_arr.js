// Array Desestructuring

const characters = [ 'Frisk', 'Chara', 'Sans' ];

const [ , , undertale ] = characters;

console.log( undertale );

const returnArray = () => [ 'ABC', 123 ];

const [ letters, numbers ] = returnArray();

console.log( numbers );
console.log( letters );

const _useState = ( value ) => [ value, () => { console.log( "Hola Mundo" ); } ];
const [ name, setNombre ] = _useState( 'Diego' );


console.log( name );
setNombre();
