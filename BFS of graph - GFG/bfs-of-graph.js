//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let V = parseInt(input_line[0]);
        let E = parseInt(input_line[1]);

        let adj = new Array(V);
        for (let i = 0; i < V; i++) {
            adj[i] = new Array();
        }
        for (let i = 0; i < E; i++) {
            input_line = readLine().split(' ');
            let x = input_line[0];
            let y = input_line[1];
            adj[x].push(y);
        }

        let obj = new Solution();
        let ans = obj.bfsOfGraph(V, adj);
        let s = "";
        for (let i = 0; i < ans.length; i++) {
            s += ans[i];
            s += " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj) {
        const bfs_transversal = [],
            visited = Array(V).fill(false);

        visited[0] = true;
        let queue = [0];

        while (queue.length) {
            let s = queue.shift();

            bfs_transversal.push(s);

            adj[s].forEach((adjacent) => {
                if (!visited[adjacent]) return;
                visited[adjacent] = true;
                queue.push(adjacent);
            });
        }
        return bfs_transversal;
    }
}
class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj,) {
        const bfs_transversal = [],
            visited = Array(V).fill(false);
        visited[0] = true;
        bfs_transversal.push(0);
        for (let i in adj)
            visited[i] && helper(adj, i, bfs_transversal, visited)
        return bfs_transversal;
    }
}
function helper(adj, node, bfs_transversal, visited) {

    adj[node].forEach((adjacent) => {

        if (visited[adjacent]) return;

        visited[adjacent] = true;
        bfs_transversal.push(adjacent);

    });
}