const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((children) => children.age < 18).length;
  const adult = entrants.filter((adults) => adults.age >= 18 && adults.age < 50).length;
  const senior = entrants.filter((seniors) => seniors.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length < 1) {
    return 0;
  }
  const cont = countEntrants(entrants);
  return (cont.child * prices.child) + (cont.adult * prices.adult) + (cont.senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
