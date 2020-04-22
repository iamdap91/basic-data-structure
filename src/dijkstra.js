const nodeLimit = 5;

class Node {
    point;
    shortestPath;

    constructor(point) {
        this.point = point;
        this.shortestPath = {};
        for (let i = 0; i < nodeLimit; i++) {
            this.shortestPath[String.fromCharCode(65 + i)] = 'infinity';
        }
    }
}

class Edge {
    from;
    to;
    distance;

    constructor(from, to, distance) {
        this.from = from;
        this.to = to;
        this.distance = distance;
    }
}

class Graph {
    nodes;
    edges;

    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode = (point) => {
        const node = new Node(point);
        this.nodes.push(node);
        return node;
    }

    addEdge = (pointA, pointB, distance) => {
        // pointA/pointB 있는지 확인
        const aPoint = this.findNode(pointA);
        const bPoint = this.findNode(pointB);
        const eMessage = (typeof aPoint === 'string' || typeof bPoint === 'string') ? 'one of node is does not exist' : null;
        if (eMessage) return eMessage;

        let idx;
        const hasDuplication = this.edges.some((each, index) => {
            idx = index;
            if (each.from.point === pointA && each.to.point === pointB) return each;
        })

        const edge = new Edge(aPoint, bPoint, distance);
        hasDuplication ? (this.edges[idx] = edge) : this.edges.push(edge);
        return edge;
    }

    findNode = (searchChar) => {
        let idx;
        const nodeFound = this.nodes.some((each, index) => {
            idx = index;
            if (searchChar === each.point) return each;
        })
        return nodeFound ? this.nodes[idx] : 'no such node';
    }

    findEdge = (pointA, pointB) => {
        let idx;
        const foundEdge = this.edges.some((each, index) => {
            idx = index;
            if (each.from.point === pointA && each.to.point === pointB) return each;
        })
        return foundEdge ? this.edges[idx] : 'no such edge';
    }

}



{
    const graph = new Graph();
    for (let i = 0; i < nodeLimit; i++) {
        const tmp = String.fromCharCode(65 + i);
        graph.addNode(tmp);
    }

    {
        graph.addEdge('A', 'B', 5);
        graph.addEdge('B', 'C', 3);
        graph.addEdge('A', 'C', 7);
        graph.addEdge('A', 'D', 9);
        graph.addEdge('C', 'E', 4);
        graph.addEdge('D', 'E', 3);
    }

    // console.log(graph.nodes.length, graph.nodes);
    // console.log(graph.edges.length, graph.edges);

}