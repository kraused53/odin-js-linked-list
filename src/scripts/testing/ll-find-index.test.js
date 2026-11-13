const ll = require("../linked-list/linked-list");
// Make a rundom number of nodes
const numNodes = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const myLL = new ll();

// Fill myLL with numNodes integers [0, numNodes - 1]
for (let i = 0; i < numNodes; i++) {
  myLL.append(i);
}

test("Finds index of first element", () => {
  expect(myLL.findIndex(0)).toBe(0);
});

test("Finds index of last element", () => {
  expect(myLL.findIndex(numNodes - 1)).toBe(numNodes - 1);
});

test("Finds every index", () => {
  for (let i = 0; i < numNodes; i++) {
    expect(myLL.findIndex(i)).toBe(i);
  }
});

test("Returns -1 for non-existant nodes", () => {
  expect(myLL.findIndex(numNodes + 10)).toBe(-1);
});

test("findIndex returns undefined for empty list", () => {
  const emptyList = new ll();
  expect(emptyList.findIndex(42)).toBe(undefined);
});

test("findIndex returns index of only first instance", () => {
  const doubleList = new ll();
  doubleList.append(42);
  doubleList.append(43);
  doubleList.append(43);
  doubleList.append(44);
  expect(doubleList.findIndex(43)).toBe(1);
});
