const ll = require("../linked-list/linked-list");

function makeTestList() {
  const testList = new ll();

  for (let i = 0; i < 10; i++) {
    testList.append(i);
  }

  return testList;
}

test("removeAt(1) removes head", () => {
  const myLL = makeTestList();

  myLL.removeAt(0);

  expect(myLL.toString()).toBe(
    "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null",
  );
});

test("removeAt(ll.size()-1) removes tail", () => {
  const myLL = makeTestList();

  myLL.removeAt(myLL.size() - 1);

  expect(myLL.toString()).toBe(
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> null",
  );
});

test("removeAt() removes from middle of list", () => {
  const myLL = makeTestList();

  myLL.removeAt(4);

  expect(myLL.toString()).toBe(
    "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null",
  );
});

test("removeAt throws a RangeError on negative index", () => {
  const myLL = makeTestList();

  expect(() => {
    myLL.removeAt(-1);
  }).toThrow(RangeError);
});

test("removeAt throws a RangeError on too-large index", () => {
  const myLL = makeTestList();

  expect(() => {
    myLL.removeAt(myLL.size() + 10);
  }).toThrow(RangeError);
});

test("removeAt adjusts size", () => {
  const myLL = makeTestList();

  myLL.removeAt(4);

  expect(myLL.size()).toBe(9);
});
