// Завдання №1

let a = +prompt ('Введіть меншу сторону прямокутнику')
let b = +prompt ('Введіть більшу сторону прямокутнику')

function area (a, b) {
    return a * b
};

alert (area (a, b))

// Завдання №3

let first = +prompt ('1')
let second = +prompt ('2')
let calc = first + second

function plus () {
    return calc += second
}

while (true) {
    alert (plus())
}

// Завдання №2

let number = +prompt ("Введіть число")

function sumofcalc (number, calcquadrat, calccube) {
    console.log (calccube(number) + calcquadrat(number))
}

function calcquadrat (number) {
    return number ** 2
};

function calccube (number) {
    return number ** 3
};

sumofcalc (number, calcquadrat, calccube)

// Завдання №4

function gender() {
    let sex = prompt('M/F')
    if (sex=='M') {
        alert ('Ваш пол мужской')
    }
    else if (sex == 'F') {
        alert ('Ваш пол женский')
    } 
    else if (sex = ' ') {
        alert ('Ваш пол не определен')
    }
}
gender ()