const ll = require("../linked-list/linked-list");
const myLL = new ll();

export function initializeLinkedList() {
  validateLL();

  // Clear old list
  while (myLL.size() !== 0) {
    myLL.pop();
  }

  // Make new list
  for (let i = 1; i < 6; i++) {
    myLL.append(i);
  }
}

export function getLinkedListSize() {
  validateLL();
  return myLL.size();
}

export function getLinkedListString() {
  validateLL();
  return myLL.toString();
}

export function getLinkedListArray() {
  validateLL();
  return myLL.toArray();
}

export function appendToList(value) {
  validateLL();
  myLL.append(value);
}

export function prependToList(value) {
  validateLL();
  myLL.prepend(value);
}

export function findListItemIndex(value) {
  validateLL();
  return myLL.findIndex(value);
}

export function popFromList() {
  validateLL();
  return myLL.pop();
}

function validateLL() {
  if (myLL === null) {
    throw new Error(
      "findListItemIndex: There is an error with the linked list",
    );
  }
}
