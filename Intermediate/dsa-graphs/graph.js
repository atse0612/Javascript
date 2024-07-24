class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) { //adding the vertices
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) { //removing the two vertices
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);//removing the vertex
    for (let node of this.nodes){
      if(node.adjacent.has(vertex)){
        node.adjacent.delete(vertex);
      }
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    function transformative(vertex){
      if(!vertex){// base result
        return null;
      }
      //nodes to visit
      visited.add(vertex);
      result.push(node.value);

      //visiting the nodes
      vertex.adjacent.forEach(neighbor => {
        if(!visited.has(neighbor)){
          return transformative(neighbor);
        }
      });
    }
    transformative(start);
    return result;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    //Initial const variables to initiate
    const queue = [start];
    const visited = new Set();
    const result = [];
    let currentVertex;
    //visited node
    visited.add(start);
    
    //neighbors that are still to visit
    while(queue.length){
      currentVertex = queue.pop();
      result.push(currentVertex.value);
    //neighbors still to visit
      currentVertex.adjacent.forEach(neighbor => {
        if(!visited.has(neighbor)){
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  shortestPath(start, end){
    if(start === end){
      return [start.value];
    }
    const queue = [start];
    let visited = new Set();
    let priorVisit = {};
    let path = [];
    
    while (queue.length) {
      let currentVertex = queue.shift();

      if (currentVertex === end) {
        let stop = priorVisit[end.value];
        while (stop) {
          path.push(stop);
          stop = priorVisit[stop];
        }
        path.unshift(start.value);
        path.reverse();
        return path;
      }

      visited.add(currentVertex);
      for (let vertex of currentVertex.adjacent) {
        if (!visited.has(vertex)) {
          priorVisit[vertex.value] = currentVertex.value;
          queue.push(vertex);
        }
      }
    }
  }
}

module.exports = {Graph, Node}