const ll = require("../linked-list/linked-list");

test("Pop returns the first node", () => {
  const myLL = new ll();
  myLL.append(42);

  expect(myLL.pop()).toBe(42);
});

test("Pop returns undefined for empty list", () => {
  const myLL = new ll();

  expect(myLL.pop()).toBe(undefined);
});

test("Pop removes a node from the list", () => {
  const myLL = new ll();
  myLL.append(42);
  myLL.pop();

  expect(myLL.size()).toBe(0);
});

test("Pop removes the first node from the list", () => {
  const myLL = new ll();
  myLL.append(42);
  myLL.append(43);
  myLL.pop();

  expect(myLL.head()).toBe(43);
});

test("Pop on a list with one element makes list contents null", () => {
  const myLL = new ll();
  myLL.append(42);
  myLL.pop();

  expect(myLL.head()).toBe(undefined);
});
