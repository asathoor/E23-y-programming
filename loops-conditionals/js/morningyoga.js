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

/** DATES AND JAVASCRIPT */

// the months in my language
let months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December"
]

// days of the week in your own language
let uge = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsday",
    "Torsdag",
    "Fredag",
    "Lørdag"
]

const myDate = new Date()
console.log(myDate)
result.innerHTML = "Year: "  + myDate.getFullYear() // year
result.innerHTML += " Month: " + months[ myDate.getMonth() ] // month
result.innerHTML += " Month: " + uge[ myDate.getDay() ] // week
// get the year

// What to celebrate if it's tuesday
if (myDate.getDay() == 2) {
    msg.innerHTML = "Tuesday is grey"
  } else {
    msg.innerHTML = "It's friday I'm in love"
  }



















