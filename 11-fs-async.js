const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;

  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Hers is the result ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the next one!");
