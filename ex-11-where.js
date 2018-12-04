 /**
  *  where()
  *
  * Write a function where() that takes two inputs, a list of objects and
  * a properties object. It should return a new list containing only those
  * objects that meet the key-value conditions in the properties object.
  *
  *
   escribe la funcion where que toma dos entradas, una lista de objetos y las propiedades
   del objeto. Este debe devolver una lista nueva que contiene solo aquellos objetos que
   cumplen la condicion de la kay-value en las propiedades del objeto


 **/
 // ++ YOUR CODE HERE

function where(listObj,propObj ){
// console.log('===>', listObj);
// console.log('===>', propObj);

// declaramos la variable de salida como un array de objetos
   var newList = [];

  // iteramos sobre el argumento lista de objetos y guardamos la iteracion
  // en una variable

    for(var i = 0; i < listObj.length; i ++){
          var objEl = listObj[i]



        for(var properties in propObj){
           if(propObj[properties] === objEl[properties]){
             // console.log(true);
             newList.push(objEl)
           }
        }
    }
              // console.log(typeof newList);
              return newList

}








// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-11');
 console.log('%cFunction: where', 'background-color: green; color: white')
console.groupEnd();

var plays = [
  { title: "Cymbeline", author: "Shakespeare", year: 1623 },
  { title: "The Tempest", author: "Shakespeare", year: 1623 },
  { title: "Hamlet", author: "Shakespeare", year: 1603 },
  { title: "The Maid in the Mill", author: "Fletcher", year: 1623 },
  { title: "A Streetcar Named Desire", author: "Williams", year: 1947 },
  { title: "King Lear", author: "Shakespeare", year: 1608 },
  { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
  { title: "Macbeth", author: "Shakespeare", year: 1623 },
  { title: "Glass Menagerie", author: "Williams", year: 1944 },
  { title: "The Misunderstanding", author: "Camus", year: 1944 },
  { title: "The Just Assassins", author: "Camus", year: 1949 },
  { title: "Pericles", author: "Shakespeare", year: 1609 },
  { title: "Caligula", author: "Camus", year: 1944 },
  { title: "Taming of the Shrew", author: "Shakespeare", year: 1623 },
  { title: "Death of a Salesman", author: "Miller", year: 1949 },
]

/* ----------------------- TEST-1a  ----------------------- */
//  function should return array and each element in array
//   should be an object
/* ------------------------------------------------------ */
console.log('TEST-1a');
var sh8sprQuery = where(plays, {author: "Shakespeare"})
console.assert( sh8sprQuery instanceof Array )
console.assert( typeof sh8sprQuery[0] === 'object' )

/* ----------------------- TEST-1b  ----------------------- */
//  9 objects in list match criteria properties:
//    - author: 'Shakespeare'
/* ------------------------------------------------------ */
console.log('TEST-1b');

console.assert( sh8sprQuery.length === 8 )



/* ----------------------- TEST-2  ----------------------- */
//  3 objects in list  match criteria properties:
//    - year: 1944
/* ------------------------------------------------------ */
console.log('TEST-2');

var midCentPlays1944 = where(plays, {year: 1944})
console.assert( midCentPlays1944.length === 3 )


/* ----------------------- TEST-3  ----------------------- */
//  0 objects in list  match criteria properties:
//    - year: 1611
/* ------------------------------------------------------ */
console.log('TEST-3');

var year1611Query = where(plays, {year: 1611})
console.assert( year1611Query.length === 0 )

/* ----------------------- TEST-4  ----------------------- */
//  0 objects in list  match criteria properties:
//    - year: 1623
//    - author: 'Shakespeare'
/* ------------------------------------------------------ */
console.log('TEST-4');

var shakespeare1623List = where(plays, {author: "Shakespeare", year: 1623})
console.assert( shakespeare1623List.length === 4 )


/* ----------------------- TEST-5  ----------------------- */
//  2 objects in list match criteria properties:
//    - year: 1623
//    - author: 'Camus'
/* ------------------------------------------------------ */
console.log('TEST-5');

var camus1944List = where(plays, {author: "Camus", year: 1944})
console.assert( camus1944List.length === 2 )
