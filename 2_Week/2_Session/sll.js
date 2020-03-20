// data structures
// arrays, dictionaries, classes, lists

class Node {
    // asl
    // initialization!
    // same as def __init__(self) in python!
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}
class SLL {

    constructor() {
        this.head = null;
    }

    addToFront(value) {
        // make a node!
        // check
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    size() {
        var sum = 0;
        var current = this.head;
        while(current) {
            sum += 1;
            current = current.next;
        }
        return sum;
    }
    rSize(node=this.head) {
        if(node === null) {
            return 0;
        }
        return 1 + this.rSize(node.next);
    }
    addToBack(value) {
        var newNode = new Node(value);
        var current = this.head;
        // check is list is empty
        if(this.isEmpty()) {
            this.addToFront(value);
            return;
        }
        // move current to the last node
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    isEmpty() {
        return this.head === null;
    }
    // O(1) - array is O(N)
    removeFront() {
        if(this.head) {
            this.head = this.head.next;
        }
    }


    displayValues() {
        // display each value in the list (of nodes)
        var current = this.head;
        if(current === null) {
            console.log("[]")
            return;
        }
        var output = "[";

        // loop list;
        while(current) {
            output += current.value;
            if(current.next) {
                output += ", ";
            }
            current = current.next;
        }

        output += "]";
        console.log(output);
    }
}

var myList = new SLL();
myList.addToFront(15);
myList.addToFront(23);
myList.addToFront(25);
myList.rSize();