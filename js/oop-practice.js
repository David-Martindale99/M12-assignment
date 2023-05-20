// // STEP 1
// class Cat {
//     constructor() {

//     }
// }

// let Dog = class {
//     constructor() {
        
//     }
// }

// // STEP 2
// let cat1 = new Cat()
// let dog1 = new Dog()

// STEP 3
// class Animal {
//     constructor() {
//         console.log('A new anmial has been created!')
//     }
// }
// new Animal()

// STEP 4
// class Animal {
//     constructor(message) {
//         console.log(message)
//     }
// }
// let message = 'A new animal has been created!'
// new Animal(message)

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type   = type
//         this.breed  = breed
//         this.color  = color
//         this.height = height
//         this.length = length
//     }
// }
// let myCat = new Animal('cat', 'domestic shorthair', 'black', '12in', '22in')
// let myDog = new Animal('dog', 'A good boy', 'hazel')
// let myAnimal = new Animal()

// // STEP 6
// for (let property in myCat) {
//     console.log(`${property}: ${myCat[property]}`)
// }

// // STEP 7
// Animal.prototype.speak = function () {
//     if (this.type === 'cat') {
//         console.log(`The ${this.color} cat is meowing!`)
//     } else if (this.type === 'dog') {
//         console.log(`This ${this.color} dog is barking!`)
//     } else {
//         console.log('Not sure what this animal is, but what does the fox say?')
//     }
// }
// myCat.speak()
// myDog.speak()
// myAnimal.speak()

// STEP 8 
function AnimalTwo(type, breed, color, height, length) {
    let _type = type
    let _breed = breed 
    let _color = color
    let _height = height
    let _length = length

    let speak = function() {
        console.log(`The ${_type} has made a sound!`)
    }
    this.speak = function() {
        speak()
    }
}
const myAnimalTwo = new AnimalTwo('frog')
myAnimalTwo.speak()

// STEP 9
String.prototype.findWords = function(word) {
    if (typeof word !== 'string' || word === '') {
        console.log('Invalid word provided')
        return
    }

    let regex = new RegExp('\\b' + word + '\\b', 'gi')
    let matches = this.match(regex)

    if (matches) {
        alert(`The word '${word}' was found ${matches.length} times.`)
    } else {
        alert(`No words matching '${word}' were found.`)
    }
}

let str = 'This is a long string of words that I am typing about words and there are lots of words in this string so thank you for taking your time to read all of the words in this string of lots of words that i am typing because i need a string of words with lots of words.'

str.findWords('words')
