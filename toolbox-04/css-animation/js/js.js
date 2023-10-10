/**
 * file: js/js.js
 */

// test
console.log("OK from js/js.js")

// document.getElementById("red").
// myButton
document.getElementById("myButton").addEventListener("click", function(){
    // ... do something here ...
    console.log("I feel clicked!") // test
    //alert("Don't click me!") // test
    
    // Add animation
    document.getElementById("myButton").classList.toggle("anmimationHere");
    document.getElementById("myButton").style.backgroundColor = "#00ff00";

})


