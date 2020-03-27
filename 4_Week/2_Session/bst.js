class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

newNode = new Node(10)
// console.log(newNode.value)

class BST {
    constructor() {
        this.root = null;
    }
    add(value) {
        // if root is null
        if (this.root == null) {
            this.root = new Node(value);
            return this
        }
        var runner = this.root;
        // runner = this.root
        // as long as there is a runner
        while (runner) {
            // if value > runner.value
            if(value > runner.value) {
                if(runner.right) {
                    runner = runner.right;
                } else {
                    runner.right = new Node(value);
                    console.log("Added node "+ value)
                    return this
                }
            }
            if(value <= runner.value) {
                if(runner.left) {
                    runner = runner.left;
                } else {
                    runner.left = new Node(value);
                    console.log("Added node "+ value)
                    return this
                }
            }

        }
        return "Something went wrong!"
    }
    // return true if your BST contains value
    contains(value) {
        // if empty list
        if(this.root == null) {
            return false
        }
        // var runner = this.root
        var runner = this.root;
        // runner loop
        while(runner) {
            if(value > runner.value) {
                runner = runner.right;
            }
            else if(value < runner.value) {
                runner = runner.left;
            } else if(value == runner.value) {
                return true
            } else {
                return false
            }
        }
        return false
    }
}

newBST = new BST();
console.log(newBST);

newBST.add(10).add(9).add(11).add(8).add(12).add(22).add(33).add(7).add(4).add(16).add(8).add(103).add(90);



console.log(newBST)

console.log(newBST.contains('hi'))


