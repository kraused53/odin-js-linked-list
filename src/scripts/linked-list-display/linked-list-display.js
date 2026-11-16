import {
  getLinkedListArray,
  getLinkedListSize,
  getLinkedListString,
} from "../linked-list-system/manage-linked-list";

export function updateDisplay() {
  console.log(getLinkedListString());

  if (getLinkedListSize() === 0) {
    makeNullCard();
  } else {
    makeListDisplay();
  }
}

function makeNullCard() {
  // Fetch and clear display
  const listDisplay = document.getElementById("ll-items");
  listDisplay.replaceChildren();

  const nullCard = document.createElement("div");
  nullCard.id = "null-list";
  nullCard.classList.add("ll-card");

  const nullMsg = document.createElement("p");
  nullMsg.id = "null-msg";
  nullMsg.classList.add("ll-card-text");
  nullMsg.textContent = "List is empty!";

  nullCard.appendChild(nullMsg);
  listDisplay.appendChild(nullCard);
}

function makeListDisplay() {
  // Fetch and clear display
  const listDisplay = document.getElementById("ll-items");
  listDisplay.replaceChildren();

  const llArray = getLinkedListArray();

  llArray.forEach((item) => {
    listDisplay.appendChild(makeNodeCard(item));
  });
}

function makeNodeCard(value) {
  const nodeCard = document.createElement("div");
  nodeCard.id = crypto.randomUUID();
  nodeCard.classList.add("ll-card");

  const cardTitle = document.createElement("p");
  cardTitle.id = nodeCard.id + "-title";
  cardTitle.classList.add("ll-card-text");
  cardTitle.textContent = "Value";

  const cardValue = document.createElement("p");
  cardValue.id = nodeCard.id + "-value";
  cardValue.classList.add("ll-card-text");
  cardValue.textContent = value;

  nodeCard.appendChild(cardTitle);
  nodeCard.appendChild(cardValue);

  return nodeCard;
}
