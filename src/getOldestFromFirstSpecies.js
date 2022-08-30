const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
 const funcionario = employees.find((func) => func.id === id);
 console.log(funcionario);
 const firstAnimal = funcionario.responsibleFor[0];
 console.log(firstAnimal);
 const firstSpecie = species.find((specie) => specie.id === firstAnimal).residents;
 console.log(firstSpecie);
 let old = {age: 0};
 firstSpecie.forEach((older) => {
 if (older.age > old.age) {
  old = older;
   }})
 return [old.name, old.sex, old.age];

}

console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
module.exports = getOldestFromFirstSpecies;
