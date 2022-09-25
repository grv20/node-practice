// started os process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited os process

// set timeout works async, eventhough we give time as 0, it wont execute immediately
