const data = require('../data/zoo_data');

function isManager(id) {
  const gerentes = {};
  data.employees.forEach((employee) => {
    employee.managers.forEach((managerId) => {
      gerentes[managerId] = managerId;
    });
  });
  console.log(gerentes);
  if (gerentes[id] !== undefined) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const manager = data.employees.filter((employee) => employee.managers.some((someManager) =>
      someManager === managerId));
    console.log(manager);
    return manager.map((employee) => (`${employee.firstName} ${employee.lastName}`));
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
