const { cloneWith } = require("lodash");

setInterval(() => {
  console.log("hello world");
}, 2000);
console.log("I will run first");
// process stays alive unless
// Kill Process Controll + C
// unexpected error

// set interval also works in async, and task never gets kileed. It keeps on executing after that interval
