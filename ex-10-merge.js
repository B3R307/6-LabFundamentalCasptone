/**
 *  merge()
 *
Escribe una funcion llamada merge que tome 2 objetos y devuelva un objeto nuevo
con las propiedades y valores combinados



 *  Write a function called `merge()` that takes two objects and
 *  returns a new object with their combined properties & values.
 *
   Si los dos objetos tienen la misma propiedad asegurese de que se retorne los valores
   de la propiedad del objeto en el segundo argumento

 *  If the two objects have the same property, make sure that you
 *  return the property-values from the object in the 2nd argument.
 *
**/
// ++ YOUR CODE HERE

// declaramos la funcion con sus 2 argumentos


function merge(obj1,  obj2){
   // console.log('===>', obj1);
   // console.log('===>', obj2);
   var newObj = {}

    newObj = Object.assign({}, obj1, obj2);
    console.log(newObj);
    return newObj

}

// El método Object.assign() se utiliza para copiar los valores de todas
 // la propiedades enumerables de uno o más objetos fuente a un objeto destino. Retorna el objeto destino.






// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-10');
  console.log('%cFunction: merge', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// merge(obj1, obj2)
//  should return:
//   {
//     accountActive: true,
//     age: 33,
//     balance: 38832,
//     id: 6288,
//     name: "Shaman Tilroy"
//    }
/* ------------------------------------------------------ */
console.log('TEST-1');

var obj1 = {name: "Shaman Tilroy", age: 33, id: 6288}
var obj2 = {id: 6288, balance: 38832, accountActive: true }

var merged = merge(obj1, obj2)

console.assert(merged.name === "Shaman Tilroy")
console.assert(merged.age === 33)
console.assert(merged.id === 6288)
console.assert(merged.balance === 38832)
console.assert(merged.accountActive === true)



/* ----------------------- TEST-2  ----------------------- */
// merge(obj3, obj4)
//  should return:
// {
//   album: "Wishy Washy",
//   ​artist: "The Riverboat",
//   quantity: 10,
//   released: 1980,
//   title: "How to Wear a Bowtie"
// }
/* ------------------------------------------------------ */
console.log('TEST-2');


var obj3 = {title: "How to Wear a Bowtie", artist: "Showtime", released: 1984 }
var obj4 = {artist: "The Riverboat", released: 1980, album: "Wishy Washy", quantity: 10 }

var merged2 = merge(obj3, obj4)
console.log(merged2);

console.assert( merged2.artist === "The Riverboat" )
console.assert( merged2.released === 1980 )
console.assert( merged2.title === "How to Wear a Bowtie")
console.assert( merged2.quantity === 10 )
