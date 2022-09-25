//The event loop is what allows node js to perform non-blocking I/O operations
// -despite the fact that JS is single-threaded - by offloading operations
// to the system kernel whenever possible

const { readFile } = require("fs");
console.log("started a first task!");

// CHECK FILE PATH
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  console.log("completed first task!");
});
console.log("starting the next one!");

// readFile works in async, and doesnt try to read file outright, and push to work on it later
