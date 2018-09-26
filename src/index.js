module.exports = function solveEquation(equation) {
  let pointer = equation.indexOf(' ');
  let a = + equation.substring(0, pointer).replace(/\s+/g, '');
  let b =  + equation.substring(pointer + 7, equation.indexOf(' ', pointer+9)).replace(/\s+/g,'');
  let c = + equation.substring(equation.lastIndexOf(' ') - 2).replace(/\s+/g, '');
  let D = b * b - 4 * a * c;
  let arrOfSolution = [];
  arrOfSolution.push(Math.round((- b + Math.sqrt(D)) / (2 * a)));
  arrOfSolution.push(Math.round((- b - Math.sqrt(D)) / (2 * a)));
  return arrOfSolution.sort((a, b) => a - b);
}
