const graph = {
    'A': { 'B': 4, 'C': 2 },
 
    'B': { 'A': 4, 'C': 5, 'D': 10 },
 
    'C': { 'A': 2, 'B': 5, 'D': 3 },
 
    'D': { 'B': 10, 'C': 3 }
 
 };
 

 function dijik (graph,s){
let result = {};
 let visited = new Set ();


 let nodes = Object.keys(graph);
//  console.log(nodes);

// for (let node=0; node < nodes.length;node++){
//     nodes[node] = Infinity;
//     console.log(nodes);
// }
for (let node of nodes) {
    result[node]=Infinity;
    
}
result[s]= 0;

 
while (nodes.length) {
    nodes.sort((a,b) => result[a] - result[b]);
   
    let closestnode = nodes.shift()
   if (result[closestnode] === Infinity) break;
    
   visited.add(closestnode);
//    console.log(graph[closestnode]);
   for (let neighbor in graph[closestnode]) {
        if (!visited.has(neighbor)){
            let newDistance = result[closestnode] + graph[closestnode][neighbor];
            if (newDistance<result[neighbor]){
                result[neighbor] = newDistance;
            }
        }
   }
   
}
return result
 }
 console.log(dijik(graph,"A"));