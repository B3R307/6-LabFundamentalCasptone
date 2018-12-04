/**
 * pluck()
 *
 * Write a function pluck() that, given a list of objects, extracts a list of
 * the values associated with a given property name.
 *
 * e.g:
 * pluck(stooges, 'name') should yield the array, ['moe','larry','curly']
 *
**/
// ++ YOUR CODE HERE

// declaramos la funcion con la lista de objetos y la propiedad a evaluar como argumentos

function pluck(objList, property){
  // console.log(property);
  // console.log(objList);
  // declaramos la variable de salida que será el nuevo array
  var newArr = []

// iteramos sobre el objeto para acceder a sus elementos
  for(var i = 0; i < objList.length; i++){
     var objEl = objList[i]
      console.log(objEl);

// armamos el nuevo array con push, tomando los elementos dle objeto que coinciden con la proipiedad
     newArr.push(objEl[property])
  }
      console.log(newArr);
      return newArr
}







// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-05');
  console.log('%cFunction: pluck', 'background-color: green; color: white')
console.groupEnd();

var stooges = [
   {name: 'moe', age: 40, hairStyle: "bowl cut" },
   {name: 'larry', age: 50, hairStyle: "balding"},
   {name: 'curly', age: 53, hairStyle: "buzzed"},
   {name: 'shemp', age: 62, hairStyle: "parted"},
   {name: 'joe', age: 47, hairStyle: "bald"}
]

var productsList = [
  {name: 'shamwow', grade: 'a'},
  {name: 'oxyclean', grade: 'b'},
  {name: 'shlomi', grade: 'a'},
  {name: 'hearthstone', grade: 'c'},
]



/* ----------------------- TEST-1  ----------------------- */
// Expected Output w/ `stooges` array as 1st argument
//  and `name` as 2nd argument for `stooges` array
//  => ['moe', 'larry', 'curly', 'shemp', 'joe']
/* ------------------------------------------------------ */
console.log('TEST-1');
var outputArray_1 = pluck(stooges, 'name')
// => ['moe', 'larry', 'curly', 'shemp', 'joe']
console.assert( outputArray_1.indexOf('moe') >= 0 )
console.assert( outputArray_1.indexOf('larry') >= 0 )
console.assert( outputArray_1.indexOf('shemp') >= 0 )
console.assert( outputArray_1.indexOf('joe') >= 0 )


/* ----------------------- TEST-2  ----------------------- */
// Expected Output w/ `productsList` array as 1st argument
/// and `name` as 2nd argument :
//  => ['shamwow', 'oxyclean', 'shlomi', 'hearthstone']
/* ------------------------------------------------------ */

console.log('TEST-2');
var outputArray_2 = pluck(productsList, 'name')
console.assert( outputArray_2.indexOf('shamwow') >= 0 )
console.assert( outputArray_2.indexOf('shlomi') >= 0 )
console.assert( outputArray_2.indexOf('oxyclean') >= 0 )
console.assert( outputArray_2.indexOf('hearthstone') >= 0 )


/* ----------------------- TEST-3  ----------------------- */
// Expected Output w/  `stooges` array as 1st argument
//  and `hairStyle` as 2nd argument
//  => ['bowl cut', 'balding', 'buzzed', 'parted', 'joe']
/* ------------------------------------------------------ */
var outputArray_3 = pluck(stooges, 'hairStyle')
console.assert( outputArray_3.indexOf('bowl cut') >= 0 )
console.assert( outputArray_3.indexOf('balding') >= 0 )
console.assert( outputArray_3.indexOf('buzzed') >= 0 )
console.assert( outputArray_3.indexOf('parted') >= 0 )

/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
