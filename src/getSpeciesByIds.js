const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length >= 1) {
    return data.species.filter((index) =>
      ids.some((id) => index.id === id));
    // let resultado = [];
    // ids.forEach((id) => {
    //   let filtrado = data.species.filter((specie) => {
    //     return specie.id === id;
    //   })
    //   if (filtrado.length > 0){
    //     resultado.push(filtrado[0]);
    //   }
    // });
    // return resultado;
  }
}
// console.log(
//   getSpeciesByIds(
//     "e8481c1d-42ea-4610-8e11-1752cfc05a46",
//     "0938aa23-f153-4937-9f88-4858b24d6bce"
//   )
// );

module.exports = getSpeciesByIds;
