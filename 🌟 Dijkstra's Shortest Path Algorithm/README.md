# [Dijkstra's Shortest Path](https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1)

You have been given an undirected graph of ‘V’ vertices (labeled 0,1,..., V-1) and ‘E’ edges. Each edge connecting two nodes (‘X’,’Y’) will have a weight denoting the distance between node ‘X’ and node ‘Y’.

Your task is to find the shortest path distance from the source node, which is the node labeled as 0, to all vertices given in the graph.

**Example:**

```
Input:
4 5
0 1 5
0 2 8
1 2 9
1 3 2
2 3 6
```

![image.png](https://files.codingninjas.in/untitled-diagram-17-6325.jpg)

```
Constraints:

1 <= T <= 50
1 <= V <= 1000
1 <= E <= 3000
0 <= X, Y < V
1 <= DISTANCE[X][Y] <= 10^5

Time limit: 1 sec
```