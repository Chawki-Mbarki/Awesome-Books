/* eslint-disable no-console */

import Node from "./node.mjs";

export default class LinkedList {
  constructor(head, tail, size) {
    this.head = head;
    this.tail = tail;
    this.size = size;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;

    localStorage.removeItem("books");
    localStorage.setItem("books", JSON.stringify(this));
  }

  remove(index) {
    localStorage.removeItem("books");
    let current = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 1; i <= index; i += 1) {
          previous = current;
          current = current.next;
        }
        if (index === this.size - 1) {
          this.tail = previous;
        }
        previous.next = current.next;
      }
      this.size -= 1;
      localStorage.setItem("books", JSON.stringify(this));
    }
    
  }

  // this is for testing
  display() {
    let current = this.head;
    let output = "";
    while (current) {
      output += `${current.value.title} | ${current.value.author}\n`;
      current = current.next;
    }
    console.log(output);
  }
}
