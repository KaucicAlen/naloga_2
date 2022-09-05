// Write code below
const sentence = "today is a beautiful DAY here in trondheim. bye!";

const expected = "Today Is A Beautiful Day Here In Trondheim. Bye!";

let words = sentence.split(" ");

let newUpperCaseSentance = "";

words.forEach((word) => {
  let uppercaseWord = word.charAt(0).toUpperCase() + word.slice(1);
  newUpperCaseSentance += uppercaseWord + " ";
});

console.log(newUpperCaseSentance);
