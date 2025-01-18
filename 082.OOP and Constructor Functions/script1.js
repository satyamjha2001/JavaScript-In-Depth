//factory functions
function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYear() {
      return new Date().getFullYear() - user.age;
    },
  };

  return user;
}
const user1 = createUser("Satyam", "Jha", 23);
console.log(user1.getBirthYear());
const user2 = createUser("Aman", "Jha", 24);
console.log(user2.getBirthYear());