const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locations = species.map((location) => location.location).reduce((acc, curr) => {
  if (!acc.some((loc) => loc === curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

const filterSex = (options, wichAnimal) => {
  let { residents } = species.find((name) => name.name === wichAnimal);
  if (options.sex !== undefined) {
    residents = residents.filter((res) => {
      if (options.sex === 'male') {
        return res.sex === 'male';
      }
      return res.sex === 'female';
    });
  }
  return residents;
};

const includesNamesOnly = (options) => locations.reduce((acc, curr) => {
  const animals = species.filter((animal) => animal.location === curr)
    .flatMap((animal) => animal.name);
  animals.forEach((wichAnimal) => {
    if (acc[curr] === undefined) {
      acc[curr] = [];
    }
    const obj = {};
    obj[wichAnimal] = filterSex(options, wichAnimal).flatMap((name) => name.name);
    acc[curr].push(obj);
  });
  return acc;
}, {});

const parametroUndefinid = () => {
  const objparametroUndefinid = species.map((location) => location.location).reduce((acc, curr) => {
    acc[curr] = species.filter((animal) => animal.location === curr).map((animal) => animal.name);
    return acc;
  }, {});
  return objparametroUndefinid;
};

const sortResult = (animalMap, options) => {
  if (options.sorted !== undefined && options.sorted) {
    const animalKeys = Object.keys(animalMap);
    animalKeys.forEach((location) => {
      animalMap[location].forEach((animal) => {
        const residents = animal[Object.keys(animal)[0]];
        residents.sort();
      });
    });
  }
  return animalMap;
};

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return parametroUndefinid();
  }
  if (options.includeNames !== undefined) {
    return sortResult(includesNamesOnly(options), options);
  }
}
console.log(JSON.stringify(getAnimalMap(
  {
    includeNames: true,
    sex: 'female',
    sorted: true,
  },
), null, 2));

module.exports = getAnimalMap;
