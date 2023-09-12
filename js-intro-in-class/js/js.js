/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log("Space the final frontier ...");

/* I am a comment
and I can fill out more than one line
*/

// I am a one liner comment

/* Variables and how to create them */
let myCow = "Alaska";
var anotherCow = "Red";
let myBook = "It was a dark and stormy night, and Joe's gun ...\n";
const grandMa = "Bertie";

console.log(
    myBook 
    + " " 
    + grandMa 
    + " " 
    + myCow
    );

/* numbers */
let lycky = 7;
let disaster = 15;
const noChange = 333;
lycky = 2345;

console.log( lycky / disaster );

/* booleans: true or false */
const santaExists = true;
console.log(santaExists);

/** compare */
console.log( lycky >= disaster );

/** write to some html id */
hi.innerHTML = "<p>" + myBook + "</p>";

/** several lines in a variable */
let pizza = `
    <article>
    <h2> Gorgonzola Gargantua </h2>
    <img src="images/pizza.png" alt="Gorgonzola Pizza">
    <p> This wonderfull ... </p>
    </article>
`;

// inject this into #hi
hi.innerHTML += pizza;

/** Function: a series of instructions */
let boom = function(){
    alert("We use cookies, and we track all you do! Consent?");
    console.log("Cokie info fired of!");
    return true;
}