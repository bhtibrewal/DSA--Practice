/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function(graph) {
  const colorArr=Array(graph.length).fill(-1);
  
  for(let i in graph){
      if(colorArr[i]===-1){
          colorArr[i] = 1;
          const queue = [i];
          while(queue.length){
              let node = queue.shift();
              console.log(node, colorArr[node]);
              
              for(let adjacent of graph[node]){ // couldn't break the loop with forEach
                  if(colorArr[adjacent]==-1){
                  colorArr[adjacent] = 1-colorArr[node];
                  queue.push(adjacent);
                  }
                  console.log("adj", adjacent, colorArr[adjacent] )
                  if(colorArr[node] === colorArr[adjacent]) return false;
              }
          }
      }
  }
  
  return true;
};