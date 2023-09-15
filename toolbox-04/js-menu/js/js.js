/**
 * file: js/js.js
 */
console.log("Js loaded, ok!");

/* Note the classList.toggle() method */
burger.addEventListener('click', function () {
    console.log("Ouch I was clicked, I was.")
    //document.write("Ha! It's gone!")
    subMenu.classList.toggle("hide")
})
