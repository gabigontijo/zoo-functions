const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

let ObjEmployeesCovarage = {};

const parametroName = employees.map((name) => name.firstName);
const parametroSobrenome = employees.map((sobrenome) => sobrenome.lastName);
const parametroID = employees.map((id) => id.id);
const parametroFilter = [...parametroName, ...parametroSobrenome, ...parametroID];

const validaNameAndId = (nameOrId) => {
  const getValue = Object.values(nameOrId)[0];
  if (parametroName.includes(getValue)) {
    return employees.find((employeeName) => employeeName.firstName === getValue);
  }
  if (parametroSobrenome.includes(getValue)) {
    return employees.find((employeeName) => employeeName.lastName === getValue);
  }
  if (parametroFilter.includes(getValue)) {
    return employees.find((employeeName) => employeeName.id === getValue);
  }
};

const creatObject = (parametro) => {
  ObjEmployeesCovarage.id = parametro.id;
  ObjEmployeesCovarage.fullName = `${parametro.firstName} ${parametro.lastName}`;
  ObjEmployeesCovarage.species = [];
  ObjEmployeesCovarage.locations = [];
  const animaisCoverage = parametro.responsibleFor;
  species.forEach((especie) => {
    animaisCoverage.forEach((animal) => {
      if (especie.id === animal) {
        ObjEmployeesCovarage.species.push(especie.name);
        ObjEmployeesCovarage.locations.push(especie.location);
      }
    });
  });
  return ObjEmployeesCovarage;
};

function getEmployeesCoverage(nameOrId) {
  if (nameOrId === undefined) {
    const arrayAllEmployeesCovarage = [];
    employees.forEach((employee) => {
      ObjEmployeesCovarage = {};
      arrayAllEmployeesCovarage.push(creatObject(employee));
    });
    return arrayAllEmployeesCovarage;
  }
  if (parametroFilter.includes(Object.values(nameOrId)[0])) {
    return creatObject(validaNameAndId(nameOrId));
  }

  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage({ name: 'Elser' }));
module.exports = getEmployeesCoverage;
