const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locations = species.map((location) => location.location).reduce((acc, curr) => {
  if (!acc.some((loc) => loc === curr)) {
    acc.push(curr);
  }
  return acc;
}, [])

const includesNamesOnly = () => {
  return locations.reduce((acc, curr) => {
    const animals = species.filter((animal) => animal.location === curr).
      flatMap((animal) => animal.name);
    animals.forEach((wichAnimal) => {
      if (acc[curr] === undefined) {
        acc[curr] = [];
      }
      obj = {};
      obj[wichAnimal] = species.find((name) => name.name === wichAnimal).residents.
        flatMap((name) => name.name);
      acc[curr].push(obj);
    })
    return acc;
  }, {})
 }

// const includesNamesAndSex = ((parametro) =>{});

// const sort = ((parametro) => {})

const parametroUndefinid = () => {
  const objparametroUndefinid = species.map((location) => location.location).reduce((acc, curr) => {
    acc[curr] = species.filter((animal) => animal.location === curr).map((animal) => animal.name);
    return acc;
  }, {});
  return objparametroUndefinid;
};

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return parametroUndefinid();
  }
  if (options.includeNames !== undefined) {
    return includesNamesOnly();
  }
}
console.log(getAnimalMap({ includeNames: true }))

module.exports = getAnimalMap;
