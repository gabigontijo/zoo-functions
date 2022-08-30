const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const residentes = {};
    data.species.forEach((objectAnimal) => {
      residentes[objectAnimal.name] = objectAnimal.residents.length;
    });
    return residentes;
  }
  if (Object.keys(animal).length === 1) {
    const findAnimal = data.species.find((witchAnimal) => (
      witchAnimal.name === Object.values(animal)[0]
    ));
    console.log(findAnimal);
    return findAnimal.residents.length;
  }
  const findAnimalSexo = data.species.find((witchAnimal) => (
    witchAnimal.name === Object.values(animal)[0]
  ));
  return findAnimalSexo.residents.filter((sexo) => sexo.sex === Object.values(animal)[1]).length;
}
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
