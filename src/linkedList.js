import createNode from "./node";

// Create Linked List function
const linkedList = (() => {
    function createLinkedList() {
        return {
            head: null,
            tail: null,
            append,
            prepend,
            getSize,
            getHead,
            getTail,
            at,
            contains,
            find,
            toString,
            insertAt,
            removeAt,
        };
    }

    // adds a new node containing value to the start of the list
    function prepend(value) {
        const newNode = createNode(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // adds a new node containing value to the end of the list
    function append(value) {
        const newNode = createNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    // returns the total number of nodes in the list
    function getSize() {
        let count = 0;
        let current = this.head;
        while (current) {
            current = current.nextNode;
            count++;
        }
        return count;
    }

    // returns the first node in the list
    function getHead() {
        const headNode = this.head;
        return headNode;
    }

    // returns the last node in the list
    function getTail() {
        const tailNode = this.tail;
        return tailNode;
    }

    function at(index) {
        let nodeIndex = 0;
        let current = this.head;
        while(current) {
            if(index === nodeIndex) {
                return current;
            }
            current = current.nextNode;
            nodeIndex++;
        }
        return null;
    }

    // removes the last element from the list
    function pop() {
        let current = this.head;
        let prev = null;

        if (!current) {
            return "Cannot delete. List is empty.";
        }

        while (current.nextNode) {
            prev = current;
            current = current.nextNode;
        }
    
        if (prev) {
            prev.nextNode = null;
            this.tail = prev;
        } else {
            this.head = null;
            this.tail = null;
        }
    
        return current.value;
    }

    // returns true if the passed in value is in the list and otherwise returns false.
    function contains(value) {
        let current = this.head;

        while(current){
            if(current.value === value){
                return true;
            } 

            current = current.nextNode;
        }

        return false;
    }

    // returns the index of the node containing value, or null if not found
    function find(value) {
        let index = 0;
        let current = this.head;

        while(current) {
            if (current.value === value) {
                return index;
            }

            current = current.nextNode;
            index++;
        }

        return null;
    }

    // represents LinkedList objects as strings, so user can print them out and preview them in the console.
    function toString(){
        let current = this.head;
        let nodeString = "";

        while(current){
            nodeString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        nodeString += "null";
        return nodeString;
    }

    // inserts a new node with the provided value at the given index.
    function insertAt(value, index){
        let current = this.head;
        let trackIndex = 0;
        let prev = null;
        const newNode = createNode(value);

        if (index === 0){
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }
        
        while(current){
            if (trackIndex === index){ 
                newNode.nextNode = current;
                prev.nextNode = newNode;
                return;               
            }

            prev = current;
            current = current.nextNode;
            trackIndex++;
        }

        if (trackIndex === index) {
            prev.nextNode = newNode;
        }
    }

    // Removes the node at the given index
    function removeAt(index) {
        if (index < 0 || index >= this.size()) {
            console.error("Invalid index for removeAt");
            return;
        }
    
        let current = this.head;
        let prev = null;
    
        if (index === 0) {
            this.head = current.nextNode;
        } else {
            let currentIndex = 0;
    
            while (currentIndex < index) {
                prev = current;
                current = current.nextNode;
                currentIndex++;
            }
    
            prev.nextNode = current.nextNode;
            if (index === this.size() - 1) {
                this.tail = prev;
            }
        }
    }
    

    return {
        createLinkedList,
        append,
        prepend,
        getSize,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString, 
        insertAt,
        removeAt,   
    };
})();

