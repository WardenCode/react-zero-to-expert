const { getHeroeById } = require( './bases/08_import_export' );
const { heroes } = require( './data/heroes_back_def' );

// const promise = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     // resolve(heroe);
//     // reject();
//   }, 2000);
// });

// promise
//   .then((data) => console.log(data))
//   .catch(() => console.error(new Error('xd')));


// const getHeroeByIdAsync = (id) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const heroe = getHeroeById(2);
//       resolve(heroe);
//       // reject();
//     }, 2000);
//   });

//   return (promise);
// }

// const getHeroeByIdAsync = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const heroe = getHeroeById(2);
//       resolve(heroe);
//       // reject();
//     }, 2000);
//   });
// }

// const getHeroeByIdAsync = (id) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     // reject();
//   }, 2000);
// });

const getHeroeByIdAsync = ( id ) => new Promise( ( resolve, reject ) => setTimeout(() => {
  const heroe = getHeroeById(id);
  heroe ? resolve(heroe) : reject('Error');
}, 2000));

getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.error);
  // .catch(() => console.error(new Error()));
