// import heroes, { owners } form './data/heroes_front_def'
const { heroes, owners } = require('./data/heroes_back_def');

console.log("hola, ", owners);

const getHeroeById2 = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById2(2));

const getHeroesByOwner2 = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner2('DC'));
