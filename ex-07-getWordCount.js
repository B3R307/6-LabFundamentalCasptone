/**
 * getWordCount()
 *
 * Write a function called getWordCount() that takes a string of text as input and returns
 * an object which stores the frequency of each word in the string.
 *
 * Note that your counts should NOT be case-sensitive.
 *
**/


// ++ YOUR CODE HERE

function getWordCount(someStr){
  // console.log('===>',someStr);
   var allTextInLower = someStr.toLowerCase()
     // console.log('====>',allTextInLower);
      // convertimos el argumento de tipo string a minusculas (toLowerCase) y con .split separamos el objeto palabra por palabra
       allTextInLower = allTextInLower.split(' ')
       // console.log('====>',allTextInLower);
       // console.log('===>', typeof allTextInLower);


       // declaramos nuestra variable de salida inicialmente como un objeto vacio
  var howManyTimes = {}

// iteramos sobre el objeto de strings para revisar cada elemento de string
 for(var i = 0; i < allTextInLower.length; i ++){
   // guardamos en una variable dicha iteracion
     var elemText = allTextInLower[i]
      // console.log('====>', typeof elemText);

      // Las expresiones regulares funcionan para strings y se escribe con un patron encerrado
      // entre diagonales / ab+c/

//    \ busca coincidencias
// Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. al unirlo con el metodo replace para strings
// reemplaza los caracteres que no son palabras

     var noChar = elemText.replace(/\W+/g, '')
     // console.log(noChar)

  // validamos si la variable noChar que contiene el string limpio de caracteres especiales se encuentra en el objeto de salida
  // El operador in devuelve true si la propiedad especificada está en el objeto especificado o su prototipo
  // y cada vez que esta propiedad se encuentre en el objeto se sumara 1 en caso contrario se arrojara 1 (dado que la propiedad solo esta 1 vez)
     if(noChar in howManyTimes){
         howManyTimes[noChar] ++
     } else{howManyTimes[noChar] = 1

     }
 }
          console.log(howManyTimes);
          console.log('===>', typeof howManyTimes);
          return howManyTimes
}










// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-07');
  console.log('%cFunction: getWordCount', 'background-color: green; color: white')
console.groupEnd();


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var sampleText = `I'm tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. The only thing I found in the fridge was a dead dove in a bag. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? Oh, I'm sorry, I forgot… your wife is dead! They once called me the worst audience participant Cirque du Soleil ever had.
I need a fake passport, preferably to France. I like the way they think. Oh, COME ON! YOU'RE the Chiclet! Not me. Caw ca caw, caw ca caw, caw ca caw! It's ok. You be with Yam. So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not tonight.
I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Obviously this blue part here is the land.
Let's see some bananas and nuts! This was a big get for God. They don't allow you to have bees in here. I want to cry so bad, but I don't think I can spare the moisture. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. It walked on my pillow! I'll buy you a hundred George Michaels that you can teach to drive! A group of British builders operating outside the O.C.`

var moreText = ``

var wordFrequencyObject = getWordCount(sampleText)

/* ----------------------- TEST-1  ----------------------- */
// Function returns an object
/* ------------------------------------------------------ */
console.log('TEST-1');
console.assert( typeof wordFrequencyObject === "object" )


/* ----------------------- TEST-2  ----------------------- */
// Function returns word counts on the returned object.
//    The word is the property, and the count is the value.
/* ------------------------------------------------------ */
console.log('TEST-2');

// Should return 3 for word 'be' ('be' is found 3 times in sentenceString)
console.assert( wordFrequencyObject.be === 3 )
console.assert( wordFrequencyObject.need === 3 )
console.assert( wordFrequencyObject.you === 9 )
console.assert( wordFrequencyObject.not === 4 )
console.assert( wordFrequencyObject.only === 2 )
console.assert( wordFrequencyObject.in === 4 )

/* ----------------------- TEST-3  ----------------------- */
// Tests function with other sentence string as input
/* ------------------------------------------------------ */
console.log('TEST-3');

var sentence2 = "You need not be worried, you are not in danger"
var otherWordFreqObj = getWordCount(sentence2)

console.assert( otherWordFreqObj.be === 1 )
console.assert( otherWordFreqObj.need === 1 )
console.assert( otherWordFreqObj.you === 2 )
console.assert( otherWordFreqObj.not === 2 )
console.assert( otherWordFreqObj.in === 1 )





/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');
