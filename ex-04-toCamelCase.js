
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */
 // ++ YOUR CODE HERE

function toCamelCase(someStr){
  console.log(someStr);
  // argumento sin cambios
  // console.log('--------------');
  // console.log(typeof someStr);
  // console.log('--------------');
  // tipo de dato
      var arrOfStr = someStr.toLowerCase().split(' ')
      // console.log(arrOfStr);
      // argumento modificado a minusculas y separado con split
      // console.log('--------------');
      var finalStr = arrOfStr[0]
      // console.log(finalStr);
      // elemento en posicion 0 del str
      // console.log('--------------');
      for(var i = 1; i < arrOfStr.length; i ++){
           var arrEl = arrOfStr[i]
            console.log(arrEl);
            
            // console.log('--------------');
              arrEl = arrEl[0].toUpperCase() + arrEl.substring(1)
              // console.log(arrEl);

              finalStr = finalStr + arrEl
      }

      // console.log(finalStr);
      return finalStr
}







// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
  console.log('%cFunction: toCamelCase', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs:
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert( toCamelCase("fetch records") === 'fetchRecords' )
console.assert( toCamelCase("create table row") === 'createTableRow' )
console.assert( toCamelCase("convert to HTML") === 'convertToHtml' )
console.assert( toCamelCase("get user account ID") === 'getUserAccountId' )


/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
