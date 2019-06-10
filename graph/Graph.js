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
    removeEdge(vertex1, vertex2) {
        let x = new Map([...g.adjList].filter(e => {
            if (e[0] == vertex1 && e[1] == vertex2) {
                g.adjList.delete(e[0])
            }
        }))
        console.log('Deleted....', this.adjList);
    }
    //recursive
    depthFirst(vertex) {
        const visited = {};
        const result = []
        const adjList = [...this.adjList];
        (function dfs(vertex) {
            visited[vertex] = true;
            result.push(vertex);
            adjList.forEach(p => {
                console.log('p---', p)
                p.forEach(l => { if (!visited[l]) return dfs(l) }
                )
            })
        })(vertex)
        console.log("visited---- ", result)
        return result;
    }

    //iterative
    depthIterative(){
        const visited = {};
        const stack = []
        const adjList = [...this.adjList];
        this.adjList.forEach( ( val, key) =>{
            console.log("MAPP", key, val)
        })
    }
}
var g = new Graph;
g.addVertex('Tokyo')
g.addVertex('Aspen')
g.addVertex('nairobi')
g.addEdge('Aspen', 'Tokyo')
g.addEdge('Aspen', 'Mumbai')
g.addEdge('Aspen', 'Aus')

//g.addEdge('Aspen' ,'Heisin')
//g.removeEdge('Tokyo', 'Aspen')
g.depthIterative('Tokyo')
console.log(g);