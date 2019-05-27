//Graph is a non linear data structure
/** 
- set of vertices V and set of Edges Element.
2 catagories:
1. directed Graphs - instagram
2. Unidirected Graphs - no direction - facebook friends - 2 way relation

2 ways to represent a Graphs
1. Adjacent Matrix - 2d matrix
2. Adjacent List - list matrix[] - hash ytable key data structure
    - space, real life data has more node, useful for manby data
- node is important

weighted - values - km distance in maps between vertices, maps
unweighted - no values

circle - vertices
connection - edge

- matrices - graphs with lots of edges fare better as matrices and 
- List - graphs with fewer edges fare better as lists
BigO

add vertex - o(1)
*/


class Graph {
    constructor() {
        this.adjList = new Map;
    }
    addVertex(s) {
        this.adjList.set(s, [])
    }
    addEdge(v1, v2) {
        //
        this.adjList.set(v1, v2)
        this.adjList.set(v2, v1)
    }
    removeEdge(v1, v2) {
        console.log(this.adjList)

        var getEntriesArry = this.adjList.entries();
        if (getEntriesArry.next().value[0] == v1) {
            console.log("ASASASASA")
        }
        console.log("RET", getEntriesArry.next().value)
        //this.adjList.delete(v1, v2)
    }
}
var g = new Graph;
g.addVertex('Tokyo')
g.addVertex('Aspen')
g.addVertex('nairobi')
g.addEdge('Aspen', 'Tokyo')
//g.addEdge('Aspen' ,'Heisin')
g.removeEdge('Aspen', 'Heisin')

console.log(g);