import '/Dictionary & HashTable/Dictionary.js';
class Graph {
    constructor() {
        let vertices = [];
        let adjList = new Dictionary();

        this.addVertex = function (vertex) {
            vertices.push(vertex);
            adjList.set(vertex, []);
        }

        this.addEdge = function (v, w) {
            adjList.get(v).push(w);
            adjList.get(w).push(v);
        }

        this.toString = function () {
            let s = '';
            for (let i = 0; i < vertices.length; i++) {
                s += vertices[i] + ' -> ';
                let neighbors = adjList.get(vertices[i]);
                for (let j = 0; j < neighbors.length; j++) { 
                    s += neighbors[j] + ' ';
                }
                s += '\n';
            }
            return s;
        };
    }
}

let graph = new Graph();
graph.addVertex