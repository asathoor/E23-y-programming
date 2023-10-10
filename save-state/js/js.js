/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

sessionStorage.setItem("burger", "Vegan Green Monster")
// sessionStorage.getItem("burger");

// get from the session storage
console.log( sessionStorage.getItem("burger") )
result.innerHTML = sessionStorage.getItem("burger")

/** Local storage = store in the browser */
localStorage.setItem("myName", "Per")

console.log( "From browser storage: " + localStorage.getItem("myName") )

welcome.innerHTML += localStorage.getItem("myName")