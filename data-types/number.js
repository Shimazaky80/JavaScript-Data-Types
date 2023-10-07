// Number 
// The number data type represents both integer and floating 
// point numbers
let n = 123
console.log(n, typeof n)
n = 12.345
console.log(n, typeof n)

// There are many operations for numbers, e.g. 
// multiplication *, division /, addition +, subtraction -, 
// and so on.

// Besides regular numbers, there are so-called “special 
// numeric values” which also belong to this data type: 
// Infinity, -Infinity and NaN.
console.log(1 / 0) // Infinity

// NaN represents a computational error. It is a result of 
// an incorrect or an undefined mathematical operation, for 
// instance
console.log("not a number" / 2) // NaN, such division is erroneous
// NaN is sticky. Any further mathematical operation on NaN 
// returns NaN. Meaning, here’s a NaN somewhere in a 
// mathematical expression, it propagates to the whole 
// result (there’s only one exception to that: NaN ** 0 is 1).
console.log(NaN + 1) // NaN
console.log("not a number" / 2 - 1) // NaN

// In JavaScript, the “number” type cannot safely represent 
// integer values larger than (253-1) (that’s 9007199254740991)
// , or less than -(253-1) for negatives:
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 900719925474099