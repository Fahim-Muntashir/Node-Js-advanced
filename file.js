const fs = require("fs");
const { text } = require("stream/consumers");

// reading a file text
const readText = fs.readFileSync("./texts/read.txt", "utf-8");

// writing a text

const writtenText = fs.writeFileSync(
  "./texts/write.txt",
  readText + "this is my written text"
);

console.log(writtenText);
