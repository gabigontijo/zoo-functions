const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.filter((indice) =>
    indice.firstName === employeeName || indice.lastName === employeeName)[0];
  // seu código aqui
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
