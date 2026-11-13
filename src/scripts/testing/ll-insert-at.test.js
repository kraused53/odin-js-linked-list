const ll = require("../linked-list/linked-list");

function makeTestList() {
  const testList = new ll();

  for (let i = 0; i < 10; i++) {
    testList.append(i);
  }

  return testList;
}

test("makeTestListWorks", () => {
  const myLL = makeTestList();
  expect(myLL.toString()).toBe(
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null",
  );
});

test("insertAt works for inner nodes", () => {
  const myLL = makeTestList();

  myLL.insertAt(4, 10, 11, 12);

  expect(myLL.toString()).toBe(
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 10 ) -> ( 11 ) -> ( 12 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null",
  );
});

test("insertAt works at head of list", () => {
  const myLL = makeTestList();

  myLL.insertAt(0, 10, 11, 12);

  expect(myLL.toString()).toBe(
    "( 10 ) -> ( 11 ) -> ( 12 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null",
  );
});

test("insertAt works at tail of list", () => {
  const myLL = makeTestList();

  myLL.insertAt(myLL.size(), 10, 11, 12);

  expect(myLL.toString()).toBe(
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> ( 10 ) -> ( 11 ) -> ( 12 ) -> null",
  );
});

test("throws a RangeError on negative index", () => {
  const myLL = makeTestList();

  expect(() => {
    myLL.insertAt(-1, 10, 11, 12);
  }).toThrow(RangeError);
});

test("removeAt throws a RangeError on too-large index", () => {
  const myLL = makeTestList();

  expect(() => {
    myLL.insertAt(myLL.size() + 10, 10, 11, 12);
  }).toThrow(RangeError);
});

test("insertAt changes size tracker", () => {
  const myLL = makeTestList();

  myLL.insertAt(0, 10, 11, 12);

  expect(myLL.size()).toBe(13);
});

test("insertAt does nothing with empty values", () => {
  const myLL = makeTestList();

  myLL.insertAt(0);

  expect(myLL.size()).toBe(10);
});

test("insertAt does nothing with null values", () => {
  const myLL = makeTestList();

  myLL.insertAt(null);

  expect(myLL.size()).toBe(10);
});
