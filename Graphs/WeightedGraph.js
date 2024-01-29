class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertax) {
    if (!this.adjacencyList[vertax]) this.adjacencyList[vertax] = [];
  }

  addEdge(vertax1, vertax2, weight) {
    this.adjacencyList[vertax1].push({ node: vertax2, weight });
    this.adjacencyList[vertax2].push({ node: vertax1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {}; //shortest distance we are storing here
    const previous = {}; //coming from which node that node we are storing here
    let path = []; //to return the path from start to finish
    let smallest;

    //Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val; // A
      if (smallest === finish) {
        while(previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) { //A || 0 !== Infinity
        for (let neighbour in this.adjacencyList[smallest]) { // 0
          // find neighbouring node
          let nextNode = this.adjacencyList[smallest][neighbour]; // {node: 'B', weight: 4}
          //calculate distance to neighbouring node
          let candidate = distances[smallest] + nextNode.weight; // 0 + 4 = 4
          let nextNeighbour = nextNode.node; // B
          if (candidate < distances[nextNeighbour]) { // 4 < Infinity
            //updating new smallest distance to neighbour
            distances[nextNeighbour] = candidate; // B = 4
            //updating previous - How we got to neighbour
            previous[nextNeighbour] = smallest;   //B: A
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbour, candidate);  //B, 4
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
const weightedGraph = new WeightedGraph();
weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addVertex("D");
weightedGraph.addVertex("E");
weightedGraph.addVertex("F");

weightedGraph.addEdge("A", "B", 4);
weightedGraph.addEdge("A", "C", 2);
weightedGraph.addEdge("B", "E", 3);
weightedGraph.addEdge("C", "D", 2);
weightedGraph.addEdge("C", "F", 4);
weightedGraph.addEdge("D", "E", 3);
weightedGraph.addEdge("D", "F", 1);
weightedGraph.addEdge("E", "F", 1);
console.log("weightedGraph: ", weightedGraph);

console.log(weightedGraph.Dijkstra("A", "E"));
