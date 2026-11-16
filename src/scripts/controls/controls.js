import { updateDisplay } from "../linked-list-display/linked-list-display";
import {
  appendToList,
  findListItemIndex,
  initializeLinkedList,
  popFromList,
  prependToList,
  listContains,
  listAt,
  listRemoveAt,
  listHead,
  listTail,
  getLinkedListSize,
  listInsertAt,
} from "../linked-list-system/manage-linked-list";
import { updateMessages } from "../messages/messages";

/*
[X] append
[X] prepend
[X] toString
[X] toArray
[X] at
[X] pop
[X] contains
[X] findIndex
[X] reset
[ ] insertAt
[X] removeAt
[X] head
[X] tail
[X] size
*/

export function setupControls() {
  const resetForm = document.getElementById("reset-form");
  resetForm.addEventListener("submit", (event) => {
    event.preventDefault();

    initializeLinkedList();
    updateDisplay();
    updateMessages("The list has been reset");
  });

  const appendForm = document.getElementById("append-form");
  appendForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = appendForm.querySelector('input[name="append-input"]').value;
    appendToList(Number(value));
    updateDisplay();
    updateMessages(`Appended the value: ${value}`);
  });

  const prependForm = document.getElementById("prepend-form");
  prependForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = prependForm.querySelector(
      'input[name="prepend-input"]',
    ).value;
    prependToList(Number(value));
    updateDisplay();
    updateMessages(`Prepended the value: ${value}`);
  });

  const findForm = document.getElementById("find-form");
  findForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = findForm.querySelector('input[name="find-input"]').value;
    const index = findListItemIndex(Number(value));

    if (index === undefined || index === -1) {
      updateMessages(`Could not find ${value} in the list`);
    } else {
      updateMessages(`The first instance of ${value} is at index ${index}`);
    }
  });

  const popForm = document.getElementById("pop-form");
  popForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = popFromList();
    updateDisplay();

    if (value === undefined) {
      updateMessages("The list is empty");
    } else {
      updateMessages(`Popped value: ${value}`);
    }
  });

  const headForm = document.getElementById("head-form");
  headForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = listHead();

    if (value === undefined) {
      updateMessages("The list is empty");
    } else {
      updateMessages(`Head value: ${value}`);
    }
  });

  const tailForm = document.getElementById("tail-form");
  tailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = listTail();

    if (value === undefined) {
      updateMessages("The list is empty");
    } else {
      updateMessages(`Tail value: ${value}`);
    }
  });

  const sizeForm = document.getElementById("size-form");
  sizeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = getLinkedListSize();

    updateMessages(`Current list size: ${value}`);
  });

  const atForm = document.getElementById("at-form");
  atForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const index = atForm.querySelector('input[name="at-input"]').value;
    const value = listAt(Number(index));

    if (value === undefined) {
      updateMessages(`Could not find anything at index ${index}`);
    } else {
      updateMessages(`Found the value ${value} at index ${index}`);
    }
  });

  const containsForm = document.getElementById("contains-form");
  containsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = containsForm.querySelector(
      'input[name="contains-input"]',
    ).value;
    const contains = listContains(Number(value));

    if (contains === true) {
      updateMessages(`The value ${value} was found`);
    } else {
      updateMessages(`The value ${value} was not found`);
    }
  });

  const removeForm = document.getElementById("remove-form");
  removeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const index = removeForm.querySelector('input[name="remove-input"]').value;

    try {
      listRemoveAt(Number(index));
      updateMessages(`Removed node at index ${index}`);
      updateDisplay();
    } catch (error) {
      updateMessages(`Did not find a node at index ${index}`);
      console.log(error.message);
    }
  });

  const insertForm = document.getElementById("insert-form");
  insertForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const index = insertForm.querySelector(
      'input[name="insert-index-input"]',
    ).value;

    let values;
    try {
      values = insertForm
        .querySelector('input[name="insert-input"]')
        .value.split(",");

      for (let i = 0; i < values.length; i++) {
        values[i] = Number(values[i]);
      }

      console.log(values);
    } catch (error) {
      updateMessages("There was an error parsing the given values");
      console.log(error.message);
      return;
    }

    listInsertAt(Number(index), values);

    updateDisplay();
    updateMessages(`Inserted [${values}] at index ${index}`);
  });
}
