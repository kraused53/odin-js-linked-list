const ll = require("../linked-list/linked-list");
// Make a rundom number of nodes
const numNodes = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const myLL = new ll();

// Fill myLL with numNodes integers [0, numNodes - 1]
for (let i = 0; i < numNodes; i++) {
  myLL.append(i);
}

test("Can find first element", () => {
  expect(myLL.at(0)).toBe(0);
});

test("Can find last element", () => {
  expect(myLL.at(numNodes - 1)).toBe(numNodes - 1);
});

test("Can find every element", () => {
  for (let i = 0; i < numNodes; i++) {
    expect(myLL.at(i)).toBe(i);
  }
});

test("Catch negative index", () => {
  expect(myLL.at(-1)).toBe(undefined);
});

test("Catch too-large index", () => {
  expect(myLL.at(numNodes + 10)).toBe(undefined);
});
