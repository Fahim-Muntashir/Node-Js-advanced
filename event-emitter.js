const EventEmiter = require("events");
const myEmitter = new EventEmiter();
// listener

myEmitter.on("birthday", () => {
  console.log("hi");
});

myEmitter.on("birthday", (gift) => {
  console.log(`I will Send a ${gift} to Sumu,In Sha Allah`);
});

myEmitter.emit("birthday", "book");
