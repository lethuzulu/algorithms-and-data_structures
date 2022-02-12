class LinkedList {
    constructor() {

        let length = 0;
        let head = null;

        this.append = function (element) {
            let node = new Node(element);
            let currentNode;

            if (head == null) {
                head = node;
            } else {
                currentNode = head;
                while (currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = node;
            }
            length++;

        };
        this.insert = function (position, element) {
            let currentNode = head;
            let previousNode;
            let index;

            let node = new Node(element);

            if (position >= 0 && position <= length) {

                if (position === 0) {
                    head = node;
                    node.next = currentNode;
                } else {
                    while (index < position) {
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                        index++;
                    }
                    previousNode.next = node;
                    node.next = currentNode;
                }
                length++;
                return true;
            } else {
                return false;
            }

        };

        this.removeAt = function (position) {

            let currentNode = head;
            let previousNode;
            let index = 0;

            if (position > -1 && position < length) {
                if (position === 0) {
                    head = currentNode.next;
                } else {
                    while (index < position) {
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                        index++;
                    }
                    previousNode.next = currentNode.next;
                }
                length--;
                return currentNode.element;
            } else {
                return null;
            }
        };

        this.remove = function (element) {
            let index = this.indexOf(element);
            return this.removeAt(index);
        };

        this.indexOf = function (element) {
            let currentNode = head;
            let index = 0;

            while (currentNode) {
                if (currentNode.element === element) {
                    return index;
                }
                index++;
                currentNode = currentNode.next;
            }
            return -1;
        };

        this.isEmpty = function () {
            return length === 0;
        };

        this.size = function () {
            return length;
        };

        this.toString = function () {
            let currentNode = head;
            let string = '';

            while (currentNode) {
                string = string + currentNode.element;
                currentNode = currentNode.next;
            }
            return string;
        };

        this.print = function () {
        };

        this.getHead = function () {
            return head;
        };

        class Node {
            constructor(element) {
                this.element = element;
                this.next = null;
            }
        }

    }
}
