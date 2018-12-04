/**
*  encodeUrl()
*
*  Write a function to create valid url-encoded URL's from a normal string.
*
*  For example, the string 'you are cool!'
*  would be encoded in a URL as: 'you%20are%20cool%21'
*
*  the string '50% of $100'
*  would be encoded in a URL as: '50%25%20of%20%24100'
*
*  Here is an encoding chart for special characters.
*
*  space - %20
*  ! - %21
*  " - %22
*  $ - %24
*  % - %25
*  ' - %27
*
**/
// ++ YOUR CODE HERE

// declaramos la funcion con un string como argumento
function encodeUrl(someStr){
  // necesitamos separa el string para hacer la iteracion sobre cada simbolo
   var arrOfInput = someStr.split('')
// delcaramos nuestra primera variable de salida com un string vacio
   var newStr = ''

   // console.log(arrOfInput);

for(var i = 0; i < arrOfInput.length; i ++){
   // iteramos sobre el strins separado por letra

   configuramos los simbolos que van a ser reemplazados

       if(arrOfInput[i]  === ' '){
        arrOfInput[i]  = '%20'
        // console.log(arrOfInput);
      }
        if(arrOfInput[i] === '!'){
            arrOfInput[i]  = '%21'
        }
        if(arrOfInput[i] === '"'){
            arrOfInput[i]  = '%22'
        }
        if(arrOfInput[i] === '$'){
            arrOfInput[i]  = '%24'
        }
        if(arrOfInput[i] === '%'){
            arrOfInput[i]  = '%25'
        }
        if(arrOfInput[i] === "'"){
            arrOfInput[i]  = '%27'
        }
    }
        // console.log(arrOfInput.join(''));
        // console.log(arrOfInput);

        // finalmente unimos todo el string ya con los ismbolos reeplazados
        newStr = arrOfInput.join('')
        console.log(newStr);
        return newStr

}

// console.log('-------');

// function encodeUrl(someStr){
//     console.log(someStr);
//   var removeAndReplace = [
//     {key: ' ', removeAndReplace: '%20'},
//     {key: '!', removeAndReplace: '%21'},
//     {key: '""', removeAndReplace: '%22'},
//     {key: '$', removeAndReplace: '%24'},
//     {key: '%', removeAndReplace: '%25'},
//     {key: "'", removeAndReplace: '%27'}
//   ]
//     for(var i = 0; i < removeAndReplace.length; i ++){
//        var replace = removeAndReplace[i]
//       someStr = someStr.replace(replace.key, replace.removeAndReplace)
//     }
//         // console.log(someStr);
//         return someStr
// }
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-06');
console.log('%cFunction: encodeUrl', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs
/* ------------------------------------------------------ */
console.log('TEST-1');
var encodedURL1 = encodeUrl('this is great')
var encodedURL2 = encodeUrl('she said "there is no need for violence!"')
var encodedURL3 = encodeUrl("i'm all about the $")
var encodedURL4 = encodeUrl("20% of $100")

console.assert(encodedURL1 === 'this%20is%20great')
console.assert(encodedURL2 === 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22')
console.assert(encodedURL3 === "i%27m%20all%20about%20the%20%24")
console.assert(encodedURL4 === "20%25%20of%20%24100")

/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
