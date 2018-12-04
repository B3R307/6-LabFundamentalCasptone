/**
 * new User()

 crea una funcion constructora que cree nuevos usuarios
 esta debe aceptar 2 strings com argumentos, un nombre y un rol de usuario
 y crear una instancia de objeto que tiene  3 propiedades
nombre (string)
rol(string)
creado (numero con el valor de la fecha actual)


 * (1) Create a User constructor function that creates new users.
 *      It should accept 2 string arguments: a name and a user-role.
 *      and create an object instance that has 3 properties:
 *      - name (string)
 *      - role (string -- value should be 'visitor', 'member', 'editor', 'admin')
 *      - createdAt should be a number with the value of Date.now()
 *
 *crea un metodo llamado tienePermiso() en el prototipo que acepte un array de roles de usuario
 * (2) Create a method called `.hasPermissions()`
 *     on the prototype that accepts an array of roles.

 El metodo debe verificar si un usuario tiene permisos y devolver un valor verdadero*
 *     The method should check to see if a given user
 *     has permissions -- should return true.
 *
**/
// ++ YOUR CODE HERE

// declaramos la funcion constructora con sus argumentos
// Una función constructora es una función normal de JavaScript
// que se utiliza para definir una especie de plantilla para nuestros objetos personalizados

 var User = function(usrName, usrRol){
    // console.log(usrName);
    // console.log('=====>');
    // console.log(usrRol);
    this.name = usrName;
    this.role = usrRol;
    this.createdAt = Date.now();

    // en donde this se refiere al objeto global
      // La propiedad Object.prototype representa al objeto prototipo de Object.
      // se le anida o encadena el metodo creado por nosotros llamado hasPermissions que tiene
      // como argumento el array de roles a validar
 }

 User.prototype.hasPermissions = function(arrOfRoles){
      // console.log(arrOfRoles);

      // se itera sobre el array de roles para revisar cada uno

    for(var i = 0; i < arrOfRoles.length; i ++){
         var arrEl = arrOfRoles[i]
   // guardamos la iteracion en una variable para validar si cada elemento del array
   // es igual al rol especificado en el prototipo en cuyo caso arrojara un valor de true
   // y en caso contrario false

         console.log('====>',arrEl);
         if(arrEl === this.role){
            return true
         }
    }
            return false

};

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
console.group('ex-09');
  console.log('%cFunction: newUser', 'background-color: green; color: white')
console.groupEnd();


/* ----------------------- TEST-1  ----------------------- */
// User should be a function (specifically a constructor function)
/* ------------------------------------------------------ */

console.assert(typeof User === 'function')

/* ----------------------- TEST-2a  ----------------------- */
// Expected Outputs for User('jill88', 'visitor')
//   constructor function
/* ------------------------------------------------------ */
console.log("TEST-2a");

var simpleUser = new User('jill88', 'visitor')

console.assert(simpleUser.name === 'jill88')
console.assert(simpleUser.role === 'visitor')
console.assert(typeof simpleUser.createdAt === 'number' )
console.assert(simpleUser.createdAt <= Date.now() )

/* ----------------------- TEST-2b  ----------------------- */
// .hasPermissions method should return 'true' if
//    string value for `role` property
//    is found method's array input
/* ------------------------------------------------------ */
console.log("TEST-2b");

var contentCreatorList = ['editor', 'admin']
console.assert(simpleUser.hasPermissions(contentCreatorList) === false )



/* ----------------------- TEST-3a  ----------------------- */
// .hasPermissions method should return 'true' if
//    string value for `role` property
//    is found method's array input
/* ------------------------------------------------------ */
console.log("TEST-3a");

var adminUser = new User('jack76', 'admin')

console.assert(adminUser.name === 'jack76')
console.assert(adminUser.role === 'admin')
console.assert(typeof adminUser.createdAt === 'number' )
console.assert(simpleUser.createdAt <= Date.now() )


/* ----------------------- TEST-3b  ----------------------- */
// .hasPermissions method should return 'false' if
//    string value for `role` property
//    is not in the method's array input
/* ------------------------------------------------------ */
console.log("TEST-3b");

var contentCreatorList = ['editor', 'admin']
console.assert(adminUser.hasPermissions(contentCreatorList) === true )
