class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.currentHead = null;
    this.currentTail = null;
    this.currentSize = 0;
  }

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

  // Return a string representation of the current contents of the linked list
  toString() {
    let current = this.currentHead;
    const result = [];

    while (current) {
      result.push(`( ${current.value} )`);
      result.push("->");
      current = current.next;
    }

    result.push("null");

    return result.join(" ");
  }

  // Attempt to read the node at the given index. If the index is not found, return undefined
  at(index) {
    // Index must be in range [0, size - 1]. Also check for null head
    if (index < 0 || index >= this.currentSize || this.currentHead === null) {
      return undefined;
    }

    let move = this.currentHead;

    // Move to the given index. If a null node is found, return undefined
    for (let i = 0; i < index; i++) {
      move = move.next;

      if (move === null) {
        return undefined;
      }
    }

    return move.value;
  }

  // Advance currentHead by 1, remove the old currentHead node and return its value
  pop() {
    // Check for empty list or null head
    if (this.currentSize === 0 || this.currentHead === null) {
      return undefined;
    }

    // Fetch data to return
    const value = this.currentHead.value;

    // Fetch node to remove
    let toRemove = this.currentHead;

    // Advance head
    this.currentHead = this.currentHead.next;

    // Detatch old head from list path and make it null
    toRemove.next = null;
    toRemove = null;

    // A node was removed, adjust size
    this.currentSize -= 1;

    return value;
  }

  // Check each node for the given value. if found return true, otherwise false
  contains(value) {
    // Return false on empty or broken list
    if (this.currentSize === 0 || this.currentHead === null) {
      return false;
    }

    let move = this.currentHead;

    // Iterate over list until node is found or every node has been checked
    while (move !== null) {
      if (move.value === value) {
        // Node found, return true
        return true;
      }

      // Advance node
      move = move.next;
    }

    // Node not found, return false
    return false;
  }

  // Search the list for a node with a given value. If it is found return its index, otherwise return -1
  findIndex(value) {
    // Return undefined on empty list, or broken list
    if (this.currentSize === 0 || this.currentHead === null) {
      return undefined;
    }

    let move = this.currentHead;
    let index = 0;

    // Iterate over list until node is found or every node has been checked
    while (move !== null) {
      if (move.value === value) {
        // Node found, return the current index
        return index;
      }

      // Advance node
      move = move.next;
      index += 1;
    }

    // Node not found, return -1
    return -1;
  }

  // Inserts a set of values into the list at a given index
  insertAt(index, ...values) {
    // If given an empty ...values, do nothing
    if (values === null || values.length === 0) {
      return;
    }

    // If index is out of bounds, throw a range error
    if (index < 0 || index > this.currentSize) {
      throw new RangeError("Index is out of list bounds!");
    }

    // Make a list of the values to insert containing only the values to add
    const toInsert = new LinkedList();
    values.forEach((value) => {
      toInsert.append(value);
    });

    if (index === 0) {
      // Simple case: add new items at head
      // Link tail of toInsert to currentHead
      toInsert.currentTail.next = this.currentHead;

      // move currentHead to the head of toInsert
      this.currentHead = toInsert.currentHead;
    } else if (index === this.currentSize) {
      // Simple case: add new items at tail
      // Link currentTail to head of toInsert
      this.currentTail.next = toInsert.currentHead;

      // move currenttail to the tail of toInsert
      this.currentTail = toInsert.currentTail;
    } else {
      let move = this.currentHead;
      let currentIndex = 1;

      while (currentIndex != index) {
        // Check for broken list
        if (move === null) {
          throw new RangeError("Encountered early end of list");
        }
        // Advance move
        move = move.next;
        currentIndex += 1;
      }

      // Link toInsert tail to move.next
      toInsert.currentTail.next = move.next;

      // Link move.next to toInsert head
      move.next = toInsert.currentHead;
    }

    // Increase size to account for new entries
    this.currentSize += toInsert.size();
  }

  // Remove the node at the given index
  removeAt(index) {
    // If index is out of bounds, throw a range error
    if (index < 0 || index > this.currentSize) {
      throw new RangeError("Index is out of list bounds!");
    }

    if (index === 0) {
      // Simple case: remove head
      // fetch current head
      let toRemove = this.currentHead;

      // advance currentHead
      this.currentHead = this.currentHead.next;

      // Unlink toRemove from new head and null it
      toRemove.next = null;
      toRemove = null;
    } else {
      let move = this.currentHead;
      let currentIndex = 1;

      while (currentIndex != index) {
        // Check for broken list
        if (move === null) {
          throw new RangeError("Encountered early end of list");
        }
        // Advance move
        move = move.next;
        currentIndex += 1;
      }

      // Make sure that move is not sitting on top of the currentTail
      if (move.next === null) {
        throw new RangeError("Encountered early end of list");
      }

      // move.next now points to the node we want to remove

      // If it is pointing to the tail, simply move tail and delete old tail
      if (move.next.next === null) {
        let toRemove = move.next;
        this.currentTail = move;
        move.next = null;
        toRemove = null;
      } else {
        // Otherwise...

        // Fetch the node to remove
        let toRemove = move.next;

        // Move move.next to be the node after toRemove
        move.next = toRemove.next;

        // Unlink toRemove from list and null it
        toRemove.next = null;
        toRemove = null;
      }
    }

    // A node was removes, decrement the size
    this.currentSize -= 1;
  }

  // Return the current value at head
  head() {
    if (this.currentHead === null) {
      return undefined;
    }

    return this.currentHead.value;
  }

  // Return the current value at tail
  tail() {
    if (this.currentTail === null) {
      return undefined;
    }

    return this.currentTail.value;
  }

  // Return the current size of the linked list
  size() {
    return this.currentSize;
  }
}

module.exports = LinkedList;
