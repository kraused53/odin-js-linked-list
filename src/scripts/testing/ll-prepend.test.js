const ll = require("../linked-list/linked-list");

// Single element prepends
test("LList prepend single item: size = 1", () => {
  const myLL = new ll();
  myLL.prepend(0);

  expect(myLL.size()).toBe(1);
});

test("LList prepend single 0: head() = 0", () => {
  const myLL = new ll();
  myLL.prepend(0);

  expect(myLL.head()).toBe(0);
});

test("LList prepend single 0: tail() = 0", () => {
  const myLL = new ll();
  myLL.prepend(0);

  expect(myLL.tail()).toBe(0);
});

test("LList prepend single 'test': head() = 'test'", () => {
  const myLL = new ll();
  myLL.prepend("test");

  expect(myLL.head()).toBe("test");
});

test("LList prepend single 0: toString()", () => {
  const myLL = new ll();
  myLL.prepend(0);

  expect(myLL.toString()).toBe("( 0 ) -> null");
});

// Multiple item prepends
test("LList prepend 10 integers: size = 10", () => {
  const myLL = new ll();
  for (let i = 0; i < 10; i++) {
    myLL.prepend(i);
  }

  expect(myLL.size()).toBe(10);
});

test("LList prepend 10 integers: head() = 9", () => {
  const myLL = new ll();
  for (let i = 0; i < 10; i++) {
    myLL.prepend(i);
  }

  expect(myLL.head()).toBe(9);
});

test("LList prepend 10 integers: tail() = 0", () => {
  const myLL = new ll();
  for (let i = 0; i < 10; i++) {
    myLL.prepend(i);
  }

  expect(myLL.tail()).toBe(0);
});

test("LList prepend 10 integers: toString()", () => {
  const myLL = new ll();
  for (let i = 0; i < 10; i++) {
    myLL.prepend(i);
  }

  expect(myLL.toString()).toBe(
    "( 9 ) -> ( 8 ) -> ( 7 ) -> ( 6 ) -> ( 5 ) -> ( 4 ) -> ( 3 ) -> ( 2 ) -> ( 1 ) -> ( 0 ) -> null",
  );
});

test("LList prepend 10 mixed items: toString()", () => {
  const myLL = new ll();
  for (let i = 0; i < 5; i++) {
    myLL.prepend(i);
  }
  for (let i = 5; i < 10; i++) {
    myLL.prepend(`item ${i}`);
  }

  expect(myLL.toString()).toBe(
    "( item 9 ) -> ( item 8 ) -> ( item 7 ) -> ( item 6 ) -> ( item 5 ) -> ( 4 ) -> ( 3 ) -> ( 2 ) -> ( 1 ) -> ( 0 ) -> null",
  );
});
