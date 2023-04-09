/**
 * @param {number} V
 * @param {number[][][]} Adj
 * @param {number} S
 * @return {number[]}
 */

//Function to find the shortest distance of all the vertices
//from the source vertex S.
// 4 5
// 0 1 5
// 0 2 8
// 1 2 9
// 1 3 2
// 2 3 6
// V = 4, 
// Adj = [
//   [ [ 1, 5 ], [ 2, 8 ] ],
//   [ [ 0, 5 ], [ 2, 9 ], [ 3, 2 ] ],
//   [ [ 0, 8 ], [ 1, 9 ], [ 3, 6 ] ],
//   [ [ 1, 2 ], [ 2, 6 ] ]
// ]
function dijkstra(V, Adj, S) {
    //initialize the DISTANCE vector to ‘INT_MAX’
    let dist = new Array(V).fill(Number.MAX_VALUE)
    let st = new Array();

    // distance of the source node(here 0) to itself is 0
    dist[S] = 0;
    // [ distance, node]
    st.push([S, 0])

    while (st.length) {

        let top = st.pop(); // pop the element from the top of stack

        let topNode = top[0]; // 
        let nodeDist = top[1]; // 

        // [neighbour node, distance(from topNode) ]
        for (let [v, w] of Adj[topNode]) {

            // if the stored distance for node v 
            // is greater than nodeDist plus w
            //( distance between topNode and node v )
            if (nodeDist + w < dist[v]) {

                dist[v] = nodeDist + w;
                st.push([v, dist[v]])

            }

        }

    }
    return dist
}

