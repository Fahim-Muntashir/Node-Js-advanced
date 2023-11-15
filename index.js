// local module
const { a, add } = require("./local-1");
const { a: a2, add: add2 } = require("./local-2");

console.log(add2(1, 3, 3));

// built in module

const path = require("path");
console.log(path.join("/E:/LearningNode/", "local-1.js"));
