const ll = require("../linked-list/linked-list");

// Single element appends
test("LList append single item: size = 1", () => {
  const myLL = new ll();
  myLL.append(0);

  expect(myLL.size()).toBe(1);
});

test("LList append single 0: head() = 0", () => {
  const myLL = new ll();
  myLL.append(0);

  expect(myLL.head()).toBe(0);
});

test("LList append single 0: tail() = 0", () => {
  const myLL = new ll();
  myLL.append(0);

  expect(myLL.tail()).toBe(0);
});

test("LList append single 'test': head() = 'test'", () => {
  const myLL = new ll();
  myLL.append("test");

  expect(myLL.head()).toBe("test");
});

test("LList append single 0: toString()", () => {
  const myLL = new ll();
  myLL.append(0);

  expect(myLL.toString()).toBe("( 0 ) -> null");
});

// Multiple item appends
test("LList append 10 integers: size = 10", () => {
  const myLL = new ll();
  for (let i = 0; i < 10; i++) {
    myLL.append(i);
  }

  expect(myLL.size()).toBe(10);
});

test("LList append 10 integers: head() = 0", () => {
  const myLL = new ll();
  for (let i = 0; i < 10; i++) {
    myLL.append(i);
  }

  expect(myLL.head()).toBe(0);
});

test("LList append 10 integers: tail() = 9", () => {
  const myLL = new ll();
  for (let i = 0; i < 10; i++) {
    myLL.append(i);
  }

  expect(myLL.tail()).toBe(9);
});

test("LList append 10 integers: toString()", () => {
  const myLL = new ll();
  for (let i = 0; i < 10; i++) {
    myLL.append(i);
  }

  expect(myLL.toString()).toBe(
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null",
  );
});

test("LList append 10 mixed items: toString()", () => {
  const myLL = new ll();
  for (let i = 0; i < 5; i++) {
    myLL.append(i);
  }
  for (let i = 5; i < 10; i++) {
    myLL.append(`item ${i}`);
  }

  expect(myLL.toString()).toBe(
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( item 5 ) -> ( item 6 ) -> ( item 7 ) -> ( item 8 ) -> ( item 9 ) -> null",
  );
});
