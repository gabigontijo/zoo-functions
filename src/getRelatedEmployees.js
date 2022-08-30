const data = require('../data/zoo_data');

function isManager(id) {
  let gerentes = {};
  data.employees.forEach((employee) => (employee.managers.forEach((managerId) =>
  gerentes[managerId] = managerId)));
  console.log(gerentes);
  if (gerentes[id] !== undefined) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const manager = data.employees.filter((indice) => indice.id === managerId)[0];
    // console.log(employee);
    const filterEmployee = Object.values(manager.managers);
    // console.log(filterEmployee);
    return data.employees.filter((ids) => filterEmployee.some((nameId) => ids.id === nameId))
      .map((employee) => (`${employee.firstName} ${employee.lastName}`));
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// data.species.filter((index) =>
//   ids.some((id) => index.id === id));
// seu código aqui}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = { isManager, getRelatedEmployees };
