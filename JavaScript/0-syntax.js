//To run this file on terminal: node 0-syntax.js
const firstName = "Angelica";
const LastName = "Ibarra";

const val= 45

const arr = [
    'string',
    45,
    function() {
        console.log('hello Angelica!');
    },
]

//To access that array index value of 2 and parenthesis () to execute that function 
arr[2]()


//Do a for loop to console log everything in the array

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }



    //**DYNAMMIC TYPES**
    // Giving a variable, it has not type associated with it, it can change later to a Boolean or String.


    // **Primitive Types**
    // They have no methods and they're immutable. The types are the following:
    // *Undefined
    // *null
    // *boolean
    // *number
    // *string
    // *(symbol - new on ES6, not going to use for now)


    //**Objects**

    