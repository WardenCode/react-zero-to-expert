// import heroes from './data/heroes_front'; // Browser

const { heroes } = require('../data/heroes_back_def');

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log( getHeroeById(-20) );

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('DC') )

module.exports = {
  getHeroeById,
  getHeroesByOwner,
}
