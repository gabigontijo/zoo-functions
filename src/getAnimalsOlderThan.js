const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filtro = data.species
    .filter((indice) => indice.name === animal)[0]
    .residents.map((indice) => indice.age);
  console.log(filtro);

  return filtro.every((indice) => indice >= age);
}

console.log(getAnimalsOlderThan('lions', 20));
module.exports = getAnimalsOlderThan;
