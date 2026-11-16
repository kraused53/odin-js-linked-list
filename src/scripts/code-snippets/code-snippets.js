export const prependCode = `
class LinkedList {
  constructor() {
    this.currentHead = null;
    this.currentTail = null;
    this.currentSize = 0;
  }

  ...

  // Add a node before the current head
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.currentHead;
    this.currentHead = newNode;

    if (this.currentSize === 0) {
      this.currentTail = this.currentHead;
    }

    this.currentSize += 1;
  }

  ...

}
`;

export const appendCode = `
class LinkedList {
  constructor() {
    this.currentHead = null;
    this.currentTail = null;
    this.currentSize = 0;
  }

  ...

  // Add a new node after the current tail
  append(value) {
    let newNode = new Node(value);

    if (this.currentTail === null) {
      this.currentTail = newNode;
      this.currentHead = this.currentTail;
    } else {
      this.currentTail.next = newNode;
      this.currentTail = newNode;
    }

    this.currentSize += 1;
  }

  ...

}
`;
