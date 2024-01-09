const word = prompt('inserisci una parola').toLowerCase().trim()

function reverseString(){

    const reversed = word.split('').reverse('').join('')

    let message;
    
    if (reversed === word){
        message = `La parola ${word} è palindroma`
    } else {
        message = `La parola ${word} non è palindroma`
    }
    console.log(message)
}

reverseString()

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