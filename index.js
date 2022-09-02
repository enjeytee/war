// CREDIT CARD GENERATOR

// for (i = 1; i < 100; i++) {
//     for(j = 1; j < 1000; j++) {
//         console.log('Mario Leyson')
//         console.log(`452432${String(i).padStart(2, 0)}03565406`)
//         console.log(`${String(j).padStart(3, 0)}`)
//         console.log(`06/24`)
//         console.log('')
//     }
// }

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
        "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    if (card1ValueIndex > card2ValueIndex) {
        pcScore++
        pcScoreText.textContent = `Computer score: ${pcScore}`
        result.textContent = "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        yourScore++
        yourScoreText.textContent = `Your score: ${yourScore}`
        result.textContent = "You win!"
    } else {
        result.textContent = "War!"
    }
}

let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const result = document.getElementById("result")
const remainingCards = document.getElementById("remaining-cards")
let pcScore = 0
let yourScore = 0
const pcScoreText = document.getElementById("pc-score")
const yourScoreText = document.getElementById("your-score")

const handleClick = 
    async function() {
        const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        const data = await response.json()
        remainingCards.innerHTML = `Remaining cards: ${data.remaining}`
        deckId = data.deck_id
        drawCardBtn.disabled = false
        newDeckBtn.disabled = true
}

/* OLD VERSION USING .THEN */

// const handleClick = () => {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(response => response.json())
//         .then(data => {
//             remainingCards.innerHTML = `Remaining cards: ${data.remaining}`
//             deckId = data.deck_id
//             drawCardBtn.disabled = false
//             newDeckBtn.disabled = true
//         }
//         )
// }

/* ----------------------- */

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener(
    "click",
    function() {
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
            .then(response => response.json())
            .then(data => {
                determineCardWinner(data.cards[0], data.cards[1])
                remainingCards.textContent = `Remaining cards: ${data.remaining}`
                cardsContainer.children[0].innerHTML = `
                    <img src=${data.cards[0].image} class="card" />`
                cardsContainer.children[1].innerHTML = `
                    <img src=${data.cards[1].image} class="card" />`               
                if (data.remaining === 0) {
                    if (pcScore > yourScore) {
                        result.textContent = "Game over, the computer wins!"
                    } else if (pcScore < yourScore) {
                        result.textContent = "Game over, you win!"
                    } else {
                        result.tabIndex = "Game over, it's a tie!"
                    }
                    drawCardBtn.disabled = true
                }
            })
    }
)

drawCardBtn.disabled = true


// console.log(test)


/* CONSOLE.LOG DATA FROM FETCH() */ 

// const handleClick = () => {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

// document.getElementById("new-deck").addEventListener("click", handleClick)

// // LONG VERSION OF ABOVE
// // const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
// // const temp = promise.then(function(response) {
// //     return response.json()
// // })

/* ---------------------------- */


/* FILTER THE ARRAY AN SHOW A CREATED ARRAY ON THE CONSOLE 
    WITH ONLY EMAIL ADD OF THE VOTERS WHO VOTED */

    // const voters = [
//     {name: "Joe", email: "joe@joe.com", voted: true},
//     {name: "Jane", email: "jane@jane.com", voted: true},
//     {name: "Bo", email: "bo@bo.com", voted: false},
//     {name: "Bane", email: "bane@bane.com", voted: false}
// ]
// console.log(voters.filter(voter => voter.voted).map(voter => voter.email))

// // LONG VERSION OF THE ABOVE SOLUTION
// // console.log(voters.filter(function(voter) {
// //     return voter.voted
// // }).map(function(voter) {
// //     return voter.email
// // })
// // )

/* -------------------------------------------------------------- */


/* SETTIMEOUT USAGE */

// function callback() {console.log("I finally ran!")}
// setTimeout(callback, 2000)

/* ---------------- */


/* CREATE AN ARRAY OF PERSONS WITH PETS FROM ARRAY */

// const people = [
//     {name: "Jack", hasPet: true, age: 12},
//     {name: "Jill", hasPet: false, age: 18},
//     {name: "Alice", hasPet: true, age: 22},
//     {name: "Bob", hasPet: false, age: 32},
// ]
// const gimmeThePets = person => person.hasPet

// // LONG VERSION OF ABOVE
// // 
// // function gimmeThePets(person) {
// //     return person.hasPet
// // }
// const peopleWithPets = people.filter(gimmeThePets) 
// console.log(peopleWithPets)

/* ---------------------------------------------- */


/* SHOW PERSONS OVER 18 FROM ABOVE ARRAY */

// const personOver18 = people.filter(function(person) {
//     return person.age >= 18
// })
// console.log(personOver18)

/* ------------------------------------- */


/* SHOW PEOPLE WITH PETS */

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]
// function filterArray(array, callback) 
// {
//     const resultingArray = []
//         for (let item of array) { 
//             const shouldBeIncluded = callback(item)
//             if (shouldBeIncluded) {
//                 resultingArray.push(item)
//             }       
//         }   
//         return resultingArray
// }
// const peopleWithPets = filterArray(people, function(person) {
//     return person.hasPet
// })

// // ANOTHER VERSION OF ABOVE FUNCTION
// // const peopleWithPets = filterArray(people, person => person.hasPet)

// console.log(peopleWithPets)

/* ------------------------ */