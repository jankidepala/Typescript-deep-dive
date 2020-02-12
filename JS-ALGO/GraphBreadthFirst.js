
queueCreator = () => {
    const queue = []
    return {
      add(x) {
        queue.unshift(x)
      },
      remove() {
        if (queue.length === 0) {
          return undefined
        }
        return queue.pop()
      },
      next() {
        if (queue.length === 0) {
          return undefined
        }
        return queue[queue.length - 1]
      },
      get length() {
        return queue.length
      },
      empty() {
        return queue.length === 0
      }
    }
  }
  
  nodeCreator = (id) => {
    const neighbors = []
    return {
      id,
      neighbors,
      addNeighbors(node) {
        neighbors.push(node)
      }
    }
  }
  
  graphCreator = (uni = false) => {
    const nodes = []
    const edges = []
    return {
      uni,
      nodes,
      edges,
      addNode(id) {
        nodes.push(nodeCreator(id))  
      },
      searchNode(id) {
        return nodes.find(n => n.id === id)
      },
      addEdge(idOne, idTwo) {
        const a = this.searchNode(idOne)
        const b = this.searchNode(idTwo)
  
        a.addNeighbors(b)
        if (!uni) {
          b.addNeighbors(a)
        }
        edges.push(`${idOne}${idTwo}`)
      },
      display() {
        return nodes.map(({neighbors, id}) => {
          let output = `${id}`
          if (neighbors.length) {
            output += ` => ${neighbors.map(node => node.id).join(' ')}`
          }
          return output
        }).joing('\n')
      },
    }
  }


const graph = graphCreator(true)

graph.addNode('a')
graph.addNode('b', 'c')
graph.addNode('c')
graph.addNode('d')

graph.addEdge('a', 'e')
graph.addEdge('b', 'a')
graph.addEdge('b', 'c')
graph.addEdge('c', 'd')
console.log(graph)
