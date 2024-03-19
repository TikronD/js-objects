
// const personDetail = { name: "Daniel", age: 30, style: "smart"};

// console.log(personDetail.age);



// const book = {
//     title: "Mistborn",
//     author: {
//         name: "Brandon Sanderson",
//         age: 40,
//         nationality: "American",
//     }
// }

// console.log(book.author.nationality);

// Methods can return values, just like functions. They're useful for adding behaviour to objects. For example, a person object might have a method called getAge that returns the person's age.

const person = {
    name: "Bob",
    age: 42,
    favouriteColour: "night black",
    getAge: function() {
        return this.age;
    },
};

const age = person.getAge();
console.log(age);

// Array item confiremed
const myArr = ["Tim", "Ben"];

for (let i = 0; i < myArr.length; i++) {
  if (myArr[i] === "Tim") {
    console.log(myArr[i] + " is in the Array");
  }
}
