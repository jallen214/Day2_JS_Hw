// Exercise #1
function displayFavoriteFoodDishes(person) {
    for (let key in person) {
      if (Array.isArray(person[key])) {
        console.log(`${key}:`);
        for (let dish of person[key]) {
          console.log(`- ${dish}`);
        }
      } else if (typeof person[key] === "object") {
        console.log(`${key}:`);
        for (let subKey in person[key]) {
            console.log(`- ${person[key][subKey]}`);
        }
      } else {
        console.log(`${key}: ${person[key]}`);
      }
    }
}

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [
        {
            oberwise: "Chocolate",
            dunkin: "Vanilla",
            culvers: "All of them",
            mcDonalds: "Sham-rock-shake",
            cupids_candies: "Chocolate Malt",
        },
    ],
};

displayFavoriteFoodDishes(person3);

// Exercise 2
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: $this.age}`);
    };

    this.addAge = (years) => {
        this.age += years;
    };
}

// Create two instances of Person
const person1 = new Person("Alica", 25);
const person2 = new Person("Bob", 30);

// Print their info
person1.printInfo();
person2.printInfo();

// Increment person1's age by 3 years
person1.addAge(3);

// Print their updated info
person1.printInfo();
person2.printInfo();


// Exercise 3
function checkStringLength(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

checkStringLength("Hello World")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

checkStringLength("Hi")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });