// Graph- edge and Node or vertices
// Directed and undirected
// 3 ways to represent Graph
// 1. Adj List
// var undirectedG ={
//     Node1: ["Node2", "Node3"],
//     Node2: ["Node1"],
// }

// var undirectedGArr ={
//    [1, 2],
//    [0]
// }

// var adjMtrix :
// 0 means relationship
// 1 means no relationship

// var adjMatrix =[
//     [0, 1, 1],
//     [0, 0, 0]
// ]
// rows - Node
// colums - nodes

// Inciidence matrix 
// 2 dimenson Array
// rows - Nodes
// colums - edges

// Weights:



class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.numberOfEdge = 0;
    }

    addVertex(ver) {
        this.vertices.push(ver);
        this.edges[ver] = []
    }

    removeVertice(v) {
        //
        var index = this.vertices.indexOf(v);
        this.vertices.splice(index, 1)
    }

    removeEdge(ver1, ver2) {
        var i1 = this.edges[ver1] ? this.edges[ver1].indexOf(ver1) : -1;
        var i2 = this.edges[ver2] ? this.edges[ver2].indexOf(ver1) : -1;
        if (~i1) {
            this.edges[ver1].splice(i1, 1)
        }

        if (~i2) {
            this.edges[ver2].splice(i2, 1)
            this.numberOfEdge--
        }
    }
    addEdge(vert1, vert2) {
        this.edges[vert1].push(vert2);
        this.edges[vert2].push(vert1);
        this.numberOfEdge++;
    }

    size = () => {
        return this.vertices.length
    }

    traverseDFS(vertex, fn) {
        var visited = [];
        this._traverseDFS(vertex, visited, fn);

    }

    _traverseDFS(vertex, visited, fn) {
        visited[vertex] = true;
        if (this.edges[vertex] !== undefined) {
            fn(vertex);
        }
        this.edges[vertex].forEach((e, i) => {
            if (!visited[this.edges[vertex][i]]) {
                this._traverseDFS(this.edges[vertex][i], visited, fn);
            }
        });
    }

    traverseBFS(vertex, fn) {
        if(!~this.vertices.indexOf(vertex)) {
          return console.log('Vertex not found');
        }
        var queue = [];
        queue.push(vertex);
        var visited = [];
        visited[vertex] = true;
      
        while(queue.length) {
          vertex = queue.shift();
          fn(vertex);
          for(var i = 0; i < this.edges[vertex].length; i++) {
            if(!visited[this.edges[vertex][i]]) {
              visited[this.edges[vertex][i]] = true;
              queue.push(this.edges[vertex][i]);
            }
          }
        }
      };
}


var g = new Graph;
g.addVertex('rat')
g.addVertex('cat')
g.addVertex('dog')
g.addVertex('duck')

g.addEdge('rat', 'cat')
g.addEdge('rat', 'dog')
g.addEdge('rat', 'duck')
//g.traverseDFS('rat', false)
//g.traverseDFS('rat', function (vertex) { console.log("Traversing", vertex); }); // => 1 2 3 4 5 6
g.traverseBFS('rat', function (vertex) { console.log("Traversing", vertex); }); // => 1 2 3 4 5 6

console.log(g)
console.log("KKK", this.edges)