/**
 * Ex-03: getCapitalLetters()
 *
 * Write a function called getCapitalLetters()that returns
 * an array of all of the capital letters of a string
 *
 * Hint:
 *  for explorer mode you will need to get the character code
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
**/


// ++ YOUR CODE HERE
function getCapitalLetters(someStr){
    console.log(someStr);
    var newArr = []

// declaramos la funcion con su argumento, de la misma forma
// se delclara la variable de salida con el tipo de dato o resultado esperado


  for( var i = 0; i < someStr.length; i ++){
      var strEl = someStr[i]
// iteramos sobre el argumento para revisar cada uno de sus elementos
// guardamos el string iterado en una variable idicando que la iteracion comeinza desde
// el indice y va recorriendo cada elemento hasta llegar al ultimo y destenrese ahi
    if(strEl === strEl.toUpperCase() && strEl !== ' '){

    // hacemos la validacion con la variable que guarda el string iterado
    // comparandola consigo misma pero aplicando a este el metodo toUpperCase
    // que encuentra las mayusculas y desecha los espacios en el string, no los toma en encuentra
        newArr.push(strEl);
}

      // agregamos los nuevos elementos a la variale de resultado newArr que declaramos
      // como varbiable de salida

  }
        // hacemos console.log(); al resultado y retornamos la variable
        console.log(newArr);
        return newArr
}








// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
console.group('ex-02');
  console.log('%cFunction: getCapitalLetters', 'background-color: green; color: white')
console.groupEnd();


/* ----------------------- TEST-1  ----------------------- */
// Function output should be:  ['I', 'X', 'C', 'S', 'M', 'B', 'F', 'E']
/* ------------------------------------------------------ */
console.log('TEST-1');

var output_1 = getCapitalLetters('I called Xiu Chang and he sent the original Super Mario Bros through FedEx')

console.assert( output_1.length === 8 )
console.assert( output_1.indexOf('I') >= 0 )
console.assert( output_1.indexOf('S') >= 0 )
console.assert( output_1.indexOf('M') >= 0 )
console.assert( output_1.indexOf('B') >= 0 )
console.assert( output_1.indexOf('F') >= 0 )
console.assert( output_1.indexOf('E') >= 0 )



/* ----------------------- TEST-2  ----------------------- */
// Function output should be:  ['T', 'L', 'D', 'R', 'N', 'X']
/* ------------------------------------------------------ */
console.log('TEST-2');

var output_2 = getCapitalLetters('TLDR My mother gave Nancy nothing for Xmas')

console.assert( output_2.length === 7 )
console.assert( output_2.indexOf('T') >= 0 )
console.assert( output_2.indexOf('L') >= 0 )
console.assert( output_2.indexOf('D') >= 0 )
console.assert( output_2.indexOf('X') >= 0 )



/* ----------------------- TEST-3  ----------------------- */
// Explorer Mode: Write the function to make these tests pass
//--------------------------------------------------------
// var output_3 = getCapitalLetters('FYI; Thanksgiving is always on Thursay.')

// console.log('\n');
// console.log('TEST-3');
// console.assert( output_3.length === 5 )
// console.assert( output_3.indexOf('F') >= 0 )
// console.assert( output_3.indexOf('Y') >= 0 )
// console.assert( output_3.indexOf('I') >= 0 )

/* ----------------------- END  ----------------------- */
console.log('\n\n');
