const ll = require("../linked-list/linked-list");

test("New linked list.size: 0", () => {
  const myLL = new ll();
  expect(myLL.size()).toBe(0);
});

test("New linked list.currentHead: null", () => {
  const myLL = new ll();
  expect(myLL.currentHead).toBe(null);
});

test("New linked list.head(): undefined", () => {
  const myLL = new ll();
  expect(myLL.head()).toBe(undefined);
});

test("New linked list.tail: null", () => {
  const myLL = new ll();
  expect(myLL.currentTail).toBe(null);
});

test("New linked list.toString: 'null'", () => {
  const myLL = new ll();
  expect(myLL.toString()).toBe("null");
});
