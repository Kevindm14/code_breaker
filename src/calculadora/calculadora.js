function stringCalculator(str) {
  if(str == ""){
    return 0;
  }

  if(str.length == 1){
    return parseInt(str);
  } else {

    if (str.includes('+')) {
      const arreglo = str.split("+")

      return arreglo.reduce((a, b) => sum(parseInt(a), parseInt(b)))
    }

    if (str.includes('-')) {
      const arreglo = str.split("-")

      return arreglo.reduce((a, b) => resta(parseInt(a), parseInt(b)))
    }
  }

}


// function giveMeOperator(operator) {
//   switch (operator) {
//     case "+": 
//      return sum
    
//      case 
//   }
// }

function sum(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

export default stringCalculator;