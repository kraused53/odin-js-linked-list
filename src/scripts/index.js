const cssContext = require.context("../css", true, /\.css$/);
cssContext.keys().forEach(cssContext);

const ll = require("./linked-list/linked-list");
const myLL = new ll();

console.log(`Empty LinkedList:\n\t${myLL.toString()}`);

for (let i = 0; i < 10; i++) {
  myLL.prepend(i);
  console.log(`Current LinkedList:\n\t${myLL.toString()}`);
}
