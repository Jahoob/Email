// document.getElementById("count-el").innerHTML = 5;

let count = 0;

console.log("count");

// const janko = (age, n) => {
//     return age+n;
// }

// console.log(janko(31,2));


// const person = {
//     name: "jan",
//     age: 30,
// }

// console.log(person);

// const nums = [1, 12, 44, 83];

// const sum = nums.reduce((acc, cur) => acc + cur);
// const over = nums.filter((num => num > 10));

// over

// let firstJan = 20
// let secondJan = 32

// let myAge = firstJan + secondJan;

// console.log(myAge);


// let myAge = 30;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let jan = 30;

// jan = 44;

// console.log(jan);

//  let bonusPoints = 50;

//  bonusPoints = bonusPoints + 50;
//  console.log(bonusPoints);

//  bonusPoints = bonusPoints - 75;
//  console.log(bonusPoints);

//  bonusPoints = bonusPoints + 45;

//  console.log(bonusPoints);

// function startRace() {
//     console.log("1");
//     console.log("2");
//     console.log("3");
//     console.log("4");
//     console.log("5");
// }

// startRace()
// startRace()

// function janko() {
//     console.log(42);
// }

// janko()

// let janko1 = 88;
// let janko2 = 112;
// let janko3 = 91;

// function countJanko1() {
//     let totalJanko = janko1 + janko2 + janko3;
//     console.log(totalJanko);
// }

// countJanko1()

// function countJanko2() {
//     console.log(janko1 + janko2 + janko3);
// }

// countJanko2()


// let countEl = document.getElementById("count-el");
// let saveEl = document.getElementById("save-id");

// let peopleEntering = 0;

// function incrementPeople() {
//     peopleEntering += 1;
//     countEl.innerText = peopleEntering;
// }
// incrementPeople();

// function decrementPeople() {
//     peopleEntering -= 1;
//     countEl.innerText = peopleEntering;
// }
// decrementPeople();

// function saveScore() {
//     let countAll = peopleEntering + " - ";
//     saveEl.textContent += countAll;
//     peopleEntering = 0;
//     countEl.textContent = peopleEntering;
// }
// saveScore();



// let firstName = "Jankomancer";
// let lastName = "Bartosiewicz";

// let fullName = firstName + " " + lastName;

// function callName() {
//     console.log("hi" + " " + fullName);
// }

// callName();

// let myPoints = 2;

// function add3Points() {
//     myPoints += 3
//     console.log(myPoints);
// }
// add3Points();

// function remove1Points() {
//     myPoints -= 1
//     console.log(myPoints);
// }
// remove1Points();

// function finalScore() {
//     add3Points();
//     add3Points();
//     add3Points();
//     remove1Points();
//     remove1Points();
//     console.log(myPoints);
// }

// finalScore()

// // let startingSalary = 1500;
// // let salaryButton = document.getElementById("salary");

// // function currentSalary() {
// //     mySalary = startingSalary += 500;
// //     salaryButton.innerHTML = mySalary;
// //     console.log(mySalary);
// // }

// // currentSalary();


// let notification = "You have 3 new notifications";
// let user = "janko";

// // let messageToUser = console.log(user + " " + notification);

// let messageToUser = notification + " " + user + "!";

// console.log(messageToUser);

// let textElement = document.getElementById("welcome-el");

// let myName = "42";
// let greeting = "Hi, my name is";

// let myGreeting = greeting + " " + myName + "!";

// console.log(myGreeting);

// textElement.innerText = myGreeting;

// let hand = "handy hand";

// textElement.innerText +=  hand;


// let errorText = document.getElementById("error");

// function clickButton() {
//     errorText.innerText = "sorry sukwo"
// }


// let firstNumber = 5;
// let secondNumber = 20;
// let sum = document.getElementById("sum");

// document.getElementById("num1").innerText = firstNumber;
// document.getElementById("num2").innerText = secondNumber;


// function substractNumbers() {
//     let addSum = firstNumber - secondNumber;
//     sum.innerText = addSum;
// }
// function substractNumbers() {
//     let addSum = firstNumber - secondNumber;
//     sum.innerText = addSum;
// }
// function divideNumbers() {
//     let addSum = firstNumber / secondNumber;
//     sum.innerText = addSum;
// }
// function multiplyNumbers() {
//     let addSum = firstNumber * secondNumber;
//     sum.innerText = addSum;
// }

// function addNumbers() {
//     let plus = document.getElementsByClassName("btn__add");
//     let minus = document.getElementsByClassName("btn__add");
//     let divide = document.getElementsByClassName("btn__add");
//     let multiply = document.getElementsByClassName("btn__add");
//     if (plus.onclick = function add() {
//         sum.innerText = firstNumber + secondNumber;
//         console.log(firstNumber);
//         add();
//     });
//     if (minus.onclick = function() {
//         sum.innerText = firstNumber - secondNumber;
//         console.log("janko");
//     });
//     if (divide.onclick = function() {
//         sum.innerText = firstNumber / secondNumber;
//         console.log("janko");
//     });
//     if (multiply.onclick = function() {
//         sum.innerText = firstNumber * secondNumber;
//         console.log("janko");
//     });
// }



let cards = [0];
let sum = 0;
let hasBJ = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10
    } else if ( randomNumber === 1) {
        return 11
    } else {
        return randomNumber;
    }
}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let sum = firstCard + secondCard;
    let cards = [firstCard, secondCard];

    granko();
}

function granko() {
    cardsEl.textContent = "cards: ";
    sumEl.textContent ="sum:" + " " + sum;

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum < 21) {
        message = "do u want to draw a new card?";
    } else if (sum === 21) {
        message = "whohoo, u have bj";
        hasBJ = true;
    } else {
        message = "u're out of game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newGame() {
    if (isAlive === true && hasBJ === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        granko();
    } else {
        console.log("nie pograsz");
    }
}



let jankoOk = true;
let jankoNieOk = false;

if (jankoOk === true || jankoNieOk === false) {
    checkIfAllAllright();
} else {
    console.log("nah");
}

function checkIfAllAllright() {
    // console.log("not ok");
}

let jankoDescription = [
    "Jan",
    30,
    true
];
// console.log(jankoDescription);

let newMessage = "same here!"

jankoDescription.push(newMessage);
// console.log(jankoDescription);

for (let i = 0; i < jankoDescription.length; i++) {
    cardsEl.textContent += jankoDescription[i] + " ";
}



// let janko = {
//     name: "Jan",
//     age: 30,
//     country: "Poland"
// }

// function logData() {
//     console.log(janko.name + " is " + janko.age + " and lives in " + janko.country);
// }

// logData()


// let age = 6

// function liczonko() {
//     if (age < 6) {
//         return console.log("free");
//     } else if (6 <= age & age < 17) {
//         console.log("child discount");
//     } else if (17 <= age & age < 26) {
//         console.log("student discount");
//     } else if (26 <= age & age < 66) {
//         console.log("full price");
//     } else {
//         console.log("senior citizen discount");
//     }
// }

// liczonko()


// let largeCountries = ["China", "USA", "India", "Indonesia", "Pakistan"];

// for (i = 0; i < largeCountries.length; i++) {
//     console.log( "-" + largeCountries[i])
// }


// let largeCountries2 = ["Wiśnia", "hehelmans", "India", "Indonesia", "Lipnik"];
// largeCountries2.pop()
// largeCountries2.push("jankozord2")
// largeCountries2.shift()
// largeCountries2.unshift("paprykarz")

// console.log(largeCountries2);



// let dayOfMonth = 13;
// let weekday = "Friday";


// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("umieranko");
// }

// let hands = ["rock", "jan", "scissors"];

// console.log(hands[Math.floor(Math.random()*hands.length)]);

// function getHand() {
//     let random = Math.floor(Math.random() * hands.length);
//     return hands[random];
// }

// console.log(getHand());



let fruits = ["jabułko", "grószka", "grószka","jabułko", "grószka", "jabułko",  "grószka", "jabułko", "jabułko", ];
let appleShelf = document.getElementById("apple-shelf");
let pearShelf = document.getElementById("pear-shelf");

function sorting() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "jabułko") {
            appleShelf.textContent += "jabułko" + "🍏 ";
        } else if (fruits[i] === "grószka") {
            pearShelf.textContent += "grószka" + " 🍐";
        }
    }
}

sorting();


// console.log(Math.floor(2.323234))

// console.log(Math.floor(Math.random()*6))
// console.log(Math.floor(Math.random()*6)+1)

// function getRandomNumber() {
//     let randomNumber = Math.floor(Math.random()*6) + 1;
//     return randomNumber;
// }

// console.log(getRandomNumber());

// let age = 101;

// function granko() {
//     if (age <= 18) {
//         console.log("LESZCZ");
//     } else if (age === 100) {
//         console.log("zapraszanko");
//     } else {
//         console.log("stary śledziuh");
//     }
// }


// let player1 = 220;
// let player2 = 2211;

// function fastest() {
//     if (player1 > player2) {
//         return player1;
//     } else if (player1 < player2) {
//         return player2;
//     } else {
//         return player1;
//     }
// }

// function sum2() {
//     return player1 + player2;
// }

// console.log(sum2());




// const basePrice = 520;
// const discount = 120;
// let shippingCost = 12;
// let shippingTime = "5-12 days";

// shippingCost = 15;
// shippingTime = "7-14 days";

// let fullPrice = basePrice - discount + shippingCost

// console.log(fullPrice);

// console.log(shippingCost);






let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

inputBtn.addEventListener('click', function() {
    console.log("jankomancer");
})

