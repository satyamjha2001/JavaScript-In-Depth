const userAge = 22;

const isSchoolStudent = userAge >= 5 && userAge <= 18; // false
const isCollegeStudent = userAge >= 18 && userAge <= 24; // true

const isStudent = isSchoolStudent || isCollegeStudent; // true

const andResult = 0 && 2; // 0
const orResult = 0 || 2; // 2

const andResult2 = "" && "Hello"; // ""
const orResult2 = "" || "Hello"; // "Hello"

const andResult3 = "Hello" && null; // null
const orResult3 = "Hello" || null; // "Hello"

const andResult4 = "Hello" && -4 + 4; // 0
const orResult4 = undefined || 4 + 8 * 5; // 44

const andResult5 = "Hello" && console.log("hello1"); // undefined
const orResult5 = undefined || console.log("hello2"); // undefined

const not = !5; // false

const not2 = !!5; // true