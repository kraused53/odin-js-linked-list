const ll = require("../linked-list/linked-list");

test("Contains returns true when node exists", () => {
  const myLL = new ll();
  myLL.append(42);

  expect(myLL.contains(42)).toBe(true);
});

test("Contains returns false when node does not exists", () => {
  const myLL = new ll();
  myLL.append(42);

  expect(myLL.contains(43)).toBe(false);
});

test("Contains returns false for empty list", () => {
  const myLL = new ll();

  expect(myLL.contains(42)).toBe(false);
});

test("Contains finds every element in a list", () => {
  const myLL = new ll();

  // Make a rundom number of nodes
  const numNodes = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  // Fill myLL with numNodes integers [0, numNodes - 1]
  for (let i = 0; i < numNodes; i++) {
    myLL.append(i);
  }

  // Ensure that every item added to the list is able to be found
  for (let i = 0; i < numNodes; i++) {
    expect(myLL.contains(i)).toBe(true);
  }
});
