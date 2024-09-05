const username = prompt("Please Enter Your Name.") || "Satyam Jha";
const userAge = parseInt(prompt("Please Enter Your Age.")) || 22;
const userGender = prompt("Please Enter Your Gender.") || "Male";

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);
console.log(`Gender: ${userGender}`);

debugger;
if (userAge < 0) {
  console.log("Please enter a valid age.");
} else if (userAge >= 0 && userAge <= 4) {
  console.log(`${username} is a kid.`);
  if (userGender === "Male" || userGender === "male") {
    console.log("And he is playing.");
  }
  else if (userGender === "Female" || userGender === "female") {
    console.log("And she is playing.");
  }
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${username} is a school student.`);
  if (userGender === "Male" || userGender === "male") {
    console.log("And he is learning science and maths.");
  }
  else if (userGender === "Female" || userGender === "female") {
    console.log("And she is learning science and maths.");
  }
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${username} is a college student.`);
  if (userGender === "Male" || userGender === "male") {
    console.log("And he is learning computer science.");
  }
  else if (userGender === "Female" || userGender === "female") {
    console.log("And she is learning computer science.");
  }
} else if (userAge >= 25 && userAge <= 45) {
  console.log(`${username} is a working professional.`);
  if (userGender === "Male" || userGender === "male") {
    console.log("And he is a web developer.");
  }
  else if (userGender === "Female" || userGender === "female") {
    console.log("And she is a web developer.");
  }
} else if (userAge > 45 && userAge < 100) {
  console.log(`${username} is retired.`);
  if (userGender === "Male" || userGender === "male") {
    console.log("And he reads newspaper.");
  }
  else if (userGender === "Female" || userGender === "female") {
    console.log("And she reads newspaper.");
  }
} else {
  console.log(`${username} is immortal.`);
}

console.log("Program Ended!!");