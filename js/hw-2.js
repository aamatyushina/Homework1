let result
let a
let b

// Задание 1 //

a = 10
alert(a)
a = 20
alert(a)

// Задание 2 //

const iPhoneEdition = 2007
alert(iPhoneEdition)

// Задание 3 //

const nameOfCreator = 'Brendan Eich'
alert(nameOfCreator)

// Задание 4 //

let number1 = 10
let number2 = 2
alert(number1 + number2) 
alert(number1 - number2)
alert(number1 * number2)
alert(number1 / number2)

// Задание 5 //

let number = 2
result = number ** 5
alert(result)

// Задание 6 //

a = 9
b = 2
result = a % b
alert(result)

// Задание 7 //

let num = 1
num += 5
num -= 3
num *= 7
num /= 3
num++
num--
alert(num)

// Задание 8 //

let age = prompt("Сколько вам лет?")
alert(age)

// Задание 9.0-9.4 //

const user = {
    name: "Anna",
    age: 20,
    isAdmin: true,
}

user["city of residence"] = "Omsk"
user.age = 25
delete user["city of residence"] 

let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info])

// Задание 10 //

let name = prompt("Как вас зовут?")
alert(`Привет, ${name}!`)
