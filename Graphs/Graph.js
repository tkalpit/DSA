class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertax) {
    if (!this.adjacencyList[vertax]) {
      this.adjacencyList[vertax] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
    if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Hong Kong");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "Hong Kong");
graph.addEdge("Dallas", "Hong Kong");
graph.addEdge("Dallas", "Aspen");
// graph.removeEdge("Tokyo", "Dallas");
graph.removeVertex("Hong Kong");
console.log("graph: ", graph);