const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((func) => func.id === id);
  // console.log(funcionario);
  const firstAnimal = funcionario.responsibleFor[0];
  // console.log(firstAnimal);
  const firstSpecie = species.find((specie) => specie.id === firstAnimal).residents;
  // console.log(firstSpecie);
  const olderAge = firstSpecie.reduce((acc, animal) => (
    (acc > animal.age) ? acc : animal.age), 0);
  const olderAnimal = firstSpecie.find((older) => older.age === olderAge);
  console.log(olderAnimal);
  return [olderAnimal.name, olderAnimal.sex, olderAnimal.age];
}

console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
module.exports = getOldestFromFirstSpecies;
