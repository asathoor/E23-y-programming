console.log("Yeah, we're connected ...")

// Array - is a list
let remember = [
    "Andersen, H.C. \"Ugly Duckling\" (Copenhagen 1813)",
    "Anderson, Pamela: 'Memories from the beach' (2023)",
    "Xavier Kaboom: 'Murders and More' (1888)",
    "James Joyce: 'Ulysses'",
    "Jenifer Robins: 'Learning Web Design' (UK, 2021)"
];

// remember.pop() // remove the last list item
//remember.push("Where is the remote?") // add element to the array
remember.sort() // sort the list
console.log( remember )

console.log("The first member of our array is: \n" + remember[0])

// now we want to see the list in our code
// document.getElementById("result").innerHTML = remember[2]
result.innerHTML = remember[1]

/** LOOPS */
for (let i=0; i < remember.length; i++){
 //console.log( remember[i] )
 myList.innerHTML += "<li>" + remember[i] + "</li>"
}
// there are many loop variants ...

/** CONDITIONALS */




















