// console.log("janko1");


// let myAge = 30;
// console.log(myAge);

// let jankomancerek = 5;

// console.log(jankomancerek);

// let myAge = 30;
// let multiplier = 7;

// let myDogAge = myAge * multiplier;

// let janko = 30;

// janko += 1;

// console.log(janko);



// let bonus = 50;
// console.log(bonus);

// let plus100 = 100;

// let plus100Score = bonus + plus100;
// console.log(plus100Score);

// let minus25 = 25;
// let minus75 = 75;

// console.log(minus25);

// let count = 0;

// function incrementPeople() {
//     count += 1;
//     let countEl = document.getElementById('count-el');
//     count.innerText = countEl;
//     console.log(count);
// }

// incrementPeople()


// let count = 0;
// let countEl = document.getElementById('count-el');


// function incrementPeople() {
//     countEl.textContent = count += 1;
//     console.log(count);
// }

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


// let names = "janko"

// let message = 'You have 3 new notifications'

// console.log(message + ", " + names);

// let messageToUser = message + "! " + names;
// console.log(messageToUser);

// let nick = "jankomancer";
// let greeting = "serwus"

// let full = greeting + ', ' + nick;
// console.log(full);

// let nameEl = document.getElementById('welcome-el');

// nameEl.textContent = "name: " + full;

// nameEl.textContent += "👌 😉"

// console.log(nameEl.textContent);
// console.log(nameEl);



let countStart = 0;
let countElement = document.getElementById('count-el');
let saveEl = document.getElementById('save-id');

function incrementPeople() {
    countStart +=1;
    countElement.textContent = countStart;
    console.log(countStart);
}

function decrementPeople() {
    countStart -=1;
    countElement.textContent = countStart;
    console.log(countStart);
}

function saveScore() {
    let savedElement = countStart + " 〰 "
    saveEl.textContent += savedElement;
    countElement.textContent = 0;
    countStart = 0;
}



let firstname = "Janko";
let lastname = "Programowanasdasko"
let fullname = firstname +" " + lastname;


function callName() {
    console.log(fullname + " jan");
}

callName()


let startPoints = 3;

function add3Points() {
    startPoints += 3;
}

function remove1Point() {
    startPoints -= 1
}