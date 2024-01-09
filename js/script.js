const userChoice = prompt('Scegli pari o dispari', 'pari')
const userNumberChoice = parseInt(prompt('inserisci un numero tra 1 e 5', 2))
console.log(userChoice, userNumberChoice)

function randomizerNumber(){
    return Math.floor(Math.random() * 5) + 1
}

const randomNumber = randomizerNumber()
console.log(randomNumber)

const resultNumber = userNumberChoice + randomNumber
console.log(resultNumber)

function isEven(resultNumber){
    if(resultNumber % 2 === 0){
        return true
    } else {
        return false
    } 
}

const numberEven = isEven(resultNumber)
console.log(numberEven)

let message

if (userChoice === 'pari' && numberEven || userChoice === 'dispari' && !numberEven){
    message = 'ha vinto l\'user'
} else {
    message = 'ha vinto il computer'
}

console.log(message)


//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// const word = prompt('inserisci una parola').toLowerCase().trim()

// function reverseString(){

//     const reversed = word.split('').reverse('').join('')

//     let message;
    
//     if (reversed === word){
//         message = `La parola ${word} è palindroma`
//     } else {
//         message = `La parola ${word} non è palindroma`
//     }
//     console.log(message)
// }

// reverseString()

/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// const word = prompt('inserisci una parola').toLowerCase().trim()

// function reverseString(){

//     return word.split('').reverse('').join('')
// }

// let message;

// if (reverseString() === word){
//     message = `La parola ${word} è palindroma`
// } else {
//     message = `La parola ${word} non è palindroma`
// }
// console.log(message)