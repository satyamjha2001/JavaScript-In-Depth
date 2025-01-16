//Encapsulation : It is a way to putting all the data and methods inside a single object.

//Abstraction: It is a way to not showing the implementation details or Complexity of an object from the outside world.

const user = {
    firstName : "Satyam",
    lastName : "Jha",
    age: 23,
    // getBirthYear: function () {
    //     return new Date().getFullYear() - user.age;
    // },
    //new method
    getBirthYear () {
        return new Date().getFullYear() - user.age;
    }
}


// function getBirthYear(age) {
//     return new Date().getFullYear() - age;
// }
// const ageYear = getBirthYear();

// const birthYear = user.getBirthYear();
// console.log(birthYear);

//now if we have another user like this one. then we have to write the same object again. So this is not a good way.

//so we can use factory functions.

function createUser(firstName, lastName, age) {
    const user = {
        // firstName : firstName,
        // lastName : lastName,
        // age: age
        //new feature: automatic key value created if both side name is same
        firstName,
        lastName,
        age,
        getBirthYear () {
            return new Date().getFullYear() - user.age;
        }
    };

    return user;
}

const user1 = createUser("Satyam", "Jha", 23);
console.log(user1.getBirthYear());
const user2 = createUser("Aman", "Jha", 24);
console.log(user2.getBirthYear());

//It works but only issue is that whenever we create a new user than getBirthYear method will be created again in memory.

// console.log(user1.getBirthYear === user2.getBirthYear); //false

//To solve above problem we use constructor function and put methods in prototype of createUser function.
//Like we have methods of array in prototype of array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// console.log(arr1.pop === arr2.pop); //true
