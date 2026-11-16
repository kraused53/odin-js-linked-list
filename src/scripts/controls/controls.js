import { updateDisplay } from "../linked-list-display/linked-list-display";
import {
  appendToList,
  findListItemIndex,
  initializeLinkedList,
  popFromList,
  prependToList,
} from "../linked-list-system/manage-linked-list";
import { updateMessages } from "../messages/messages";

export function setupControls() {
  const appendForm = document.getElementById("append-form");
  const prependForm = document.getElementById("prepend-form");
  const findForm = document.getElementById("find-form");
  const popForm = document.getElementById("pop-form");
  const resetForm = document.getElementById("reset-form");

  appendForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = appendForm.querySelector('input[name="append-input"]').value;
    appendToList(Number(value));
    updateDisplay();
    updateMessages(`Appended the value: ${value}`);
  });

  prependForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = prependForm.querySelector(
      'input[name="prepend-input"]',
    ).value;
    prependToList(Number(value));
    updateDisplay();
    updateMessages(`Prepended the value: ${value}`);
  });

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

  resetForm.addEventListener("submit", (event) => {
    event.preventDefault();

    initializeLinkedList();
    updateDisplay();
    updateMessages("The list has been reset");
  });
}
