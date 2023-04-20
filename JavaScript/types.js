//**TYPECASTING? COERCION */ Explicit vs Implicit coercion

//const y = 45;

//const explicit = String(x);  //explicit coercion === "45" I want to get a string from the value x, so I would wrap it with capital String, and it pops put 45 with a string
//const implicit = x + "";     //implicit coercion === "45" I want to rely on the behavior of JavaScript in order to do this string, and so I want to add 45 to the empty string. Im expecting to get back something of type string.


/**COMPARING VALUES  */

//Double equals == VS Triple equals ===

//== Double equals coerce the types
//=== Triple equals require that the types match.


//typeof is an operator that tells is the type of a value

const x = 45;
console.log(typeof x);
//output: number


/**Coercion Continuation 
 * 
 * FALSY VALUES (There are 6)
 * Description. A falsy value is something which evaluates to FALSE, for instance when checking a variable. 
 * There are only six falsy values in JavaScript:
 *  undefined 
 * null 
 * false
 *  NaN ,
 *  0 ,
 *  "" (empty string), 
 * 
 * 
 * TRUTHY VALUES
 * In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. 
 * Some examples of truthy values are:
 * {}
 * []
 * Everything else... 
*/



/** OBJECTS, ARRAYS, FUNCTIONS */
/** Everything in JavaScript is an object EXPECT if it is a primitive value. */

/**PRIMITIVES VS OBJECTS */
/** Everything that is NOT a primitive type will be an object.
 * 
 * Primitives are immutable, which means that of you want to change them, you will have to replace them with a new value rather than modifying them. We call this "PASSING BY VALUE"
 * 
 * Objects are mutable, so you can modify them and can store a reference to this object thing and we can change that is held there without changing what is located in memory. We call this "PASSING BY REFERENCE"
 */

/**PROTOTYPE INHERITANCE */

/**Talk about how these objects inherit from each other and how they actually work under the hood */


