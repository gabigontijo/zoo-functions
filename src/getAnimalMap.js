const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// const includesNamesOnly = ((parametro) =>{} );

// const includesNamesAndSex = ((parametro) =>{});

// const sort = ((parametro) => {})

const parametroUndefinid = () => {
  return species.map((location) => location.location).reduce((acc, curr) => {
    acc[curr] = species.filter((animal) => animal.location === curr).map((animal) => animal.name);
    return acc}, {})

}

function getAnimalMap(options) {
  if (options === undefined) {
    return parametroUndefinid();
  }
  // seu código aqui
}

// console.log(species.map((location) => location.location).reduce((acc, curr) => {
// acc[curr] = species.filter((animal) => animal.location === curr).map((animal) => animal.name);
// return acc}, {}) )

console.log(getAnimalMap());
module.exports = getAnimalMap;
