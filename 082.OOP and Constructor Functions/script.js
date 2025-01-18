//now to solve making of getBirthYear method again and again in memory without constructor function.
//we make it in global also and all user use this function.

//this is a keyword that points to current object.
//in global it points to window object.
// function getBirthYear() {
//     // console.log(this);
//     return new Date().getFullYear() - this.age;
// }
//the above function behaves like a polymorphic function because in the above value of this changes according to the object.
//so problem solved but nobody solves like this because we pollute global scope.
//and it also break rule of Encapsulation and Abstraction.

function createUser(firstName, lastName, age) {
    const user = {
        firstName,
        lastName,
        age,
        getBirthYear: createUser.commonMethods.getBirthYear,
    };
    
    return user;
}
//now we can make commonMethods and put getBirthYear function in it. By this it does not pollute global scope.
createUser.hello = 'world'; //this key is added because function is also object.

createUser.commonMethods = {
    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
}
const user1 = createUser("Satyam", "Jha", 23);
console.log(user1.getBirthYear());
const user2 = createUser("Aman", "Jha", 24);
console.log(user2.getBirthYear());
console.log(user1.getBirthYear === user2.getBirthYear); //true
