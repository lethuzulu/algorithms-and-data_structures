class BinarySearchTree {
    constructor() {
        let root = null;

        class Node {
            constructor(key) {
                this.key = key;
                this.left = null;
                this.right = null;
            }
        }

        this.insert = function (key) {
            let newNode = new Node(key);

            let insertNode = function (node, newNode) {
                if (newNode.key < node.key) {
                    if (node.left === null) {
                        node.left = newNode;
                    } else {
                        insertNode(node.left, newNode);
                    }
                } else {
                    if (node.right === null) {
                        node.right = newNode;
                    } else {
                        insertNode(node.right, newNode);
                    }
                }
            };

            if (root === null) {
                root = newNode;
            } else {
                insertNode(root, newNode);
            }
        };

        this.search = function (key) { };
        this.remove = function (key) { };

        this.inOrderTraverse = function (callback) {
            let inOrderTraverseNode = function (node, callback) {
                if (node !== null) {
                    inOrderTraverseNode(node.left, callback);
                    callback(node.key);
                    inOrderTraverseNode(node.right, callback);
                }
            };

            inOrderTraverseNode(root, callback);
        };

        this.preOrderTraverse = function (callback) {
            let preOrderTraverseNode = function (node, callback) {
                if (node !== null) {
                    callback(node.key);
                    preOrderTraverseNode(node.left, callback);
                    preOrderTraverseNode(node.right, callback);
                }
            }
            preOrderTraverseNode(root, callback);
        }

        this.postOrderTraverse = function (callback) {

            let postOrderTraverseNode = function (node, callback) {

                if (node !== null) {
                    postOrderTraverseNode(node.left, callback);
                    postOrderTraverseNode(node.right, callback); postOrderTraverseNode(root, callback);
                }
            }
            postOrderTraverseNode(root, callback);
        }

        let tree2 = new BinarySearchTree();
        tree2.insert(11);
        tree2.insert(7);
        tree2.insert(15);
        tree2.insert(5);
        tree2.insert(9);
        tree2.insert(13);
        tree2.insert(20);
        tree2.insert(3);
        tree2.insert(6);
        tree2.insert(8);
        tree2.insert(10);
        tree2.insert(12);
        tree2.insert(14);
        tree2.insert(18);
        tree2.insert(25);

        let printNode = function (value) {
            console.log(value);
        };

        tree2.inOrderTraverse(printNode);
    }
}
