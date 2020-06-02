// console.log("hi");

//
// you have to type this on the console when testing it:
// npm start Berlin Germany
//
const weather = require("./lib/weather");
const args = process.argv.slice(2);
//
weather(args[0], args[1]);
