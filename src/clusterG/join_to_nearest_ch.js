function zeros(row, column) {
  var returned_list = [];
  let temp_list;
  for (let i = 0; i < row; i++) {
    temp_list = Array.apply(0, { length: column }).map((i) => 0);
    returned_list.push(temp_list);
  }
  return returned_list;
}
const calcul_distance = (node1, node2) => {
  //console.log(node1.position, node2.position);
  return Math.sqrt(
    Math.pow(node1.position.x - node2.position.x, 2) +
      Math.pow(node1.position.y - node2.position.y, 2)
  );
};
export const calcul_distances = (nodes, clusterHeads) => {
  const distance = clusterHeads.map((ch) => {
    return nodes.map((node) => calcul_distance(node, ch));
  });

  return distance;
};

export function get_min_and_id_of_ch(nodes, TotalCH) {
  const distance = calcul_distances(nodes, TotalCH);

  var min_dist_from_all_ch = [];
  var id_of_min_dist_ch = [];

  var total_nodes = nodes.length;
  const number_of_ch = TotalCH.length;
  for (let node = 0; node < total_nodes; node++) {
    let min_dist = Infinity;
    let ch_id = -1;
    for (let ch = 0; ch < number_of_ch; ch++) {
      console.log(node, ch);
      if (distance[ch][node] <= min_dist) {
        min_dist = distance[ch][node];
        ch_id = ch;
      }
    }
    //min_dist_from_all_ch.push({"id":nodes[node].id,"min_dist":min_dist,"idc":TotalCH[ch_id].id});
    min_dist_from_all_ch.push({ from: nodes[node].id, to: TotalCH[ch_id].id });
    id_of_min_dist_ch.push(ch_id);
  }
  return min_dist_from_all_ch;
}

// export const get_min_and_id_of_ch = (nodes, TotalCH) => {
//   const distance = calcul_distances(nodes, TotalCH);
//   var min_dist_from_all_ch = [];
//   var id_of_min_dist_ch = [];

//   var total_nodes = nodes.length;
//   const number_of_ch = TotalCH.length;

//   for (let node = 0; node < total_nodes; node++) {
//     let min_dist = Infinity;
//     let ch_id = -1;
//     for (let ch = 0; ch < number_of_ch; ch++) {
//       if (distance[ch][node] <= min_dist) {
//         min_dist = distance[ch][node];
//         ch_id = ch;
//       }
//     }
//     min_dist_from_all_ch.push(min_dist);
//     id_of_min_dist_ch.push(ch_id);
//   }

//   return { dis: min_dist_from_all_ch, clusters: id_of_min_dist_ch };
// };
// const nodesee = {
//   id: 10,
//   energy: 9000,
//   clusterHead: null,
//   nodes: null,
//   position: {
//     x: 76,
//     y: 211,
//   },
//   color: '#11bb00',
//   type: 'n',
//   G: 0,
//   isClusterHead: false,
//   energies: [9000],
// // };
// const nodess = [
//   {
//     id: 1,
//     energy: 8239.329627534771,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 5,
//       y: 283,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8239.329627534771],
//   },
//   {
//     id: 2,
//     energy: 8756.618755865946,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 2,
//       y: 21,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8756.618755865946],
//   },
//   {
//     id: 3,
//     energy: 8718.50100676716,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 290,
//       y: 98,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8718.50100676716],
//   },
//   {
//     id: 4,
//     energy: 8319.198507773192,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 117,
//       y: 145,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8319.198507773192],
//   },
//   {
//     id: 5,
//     energy: 8872.215535987661,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 77,
//       y: 166,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8872.215535987661],
//   },
//   {
//     id: 6,
//     energy: 8146.008929062945,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 73,
//       y: 221,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8146.008929062945],
//   },
//   {
//     id: 7,
//     energy: 8694.743668637944,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 226,
//       y: 88,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8694.743668637944],
//   },
//   {
//     id: 8,
//     energy: 8329.390377229687,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 35,
//       y: 27,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8329.390377229687],
//   },
//   {
//     id: 9,
//     energy: 8592.27531500708,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 178,
//       y: 83,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8592.27531500708],
//   },
//   {
//     id: 10,
//     energy: 8535.918151487238,
//     clusterHead: null,
//     nodes: null,
//     position: {
//       x: 130,
//       y: 145,
//       color: '#11bb00',
//     },
//     type: 'n',
//     G: 0,
//     isClusterHead: false,
//     energies: [9000, 8535.918151487238],
//   },
// ];

// const dists = calcul_distances(nodess, [nodess[0], nodess[1], nodess[3]]);

// const { dis, clusters: ch } = get_min_and_id_of_ch(
//   nodess,
//   [nodess[0], nodess[1], nodess[3]],
//   dists
// );
// for (let i = 0; i < dis.length; i++) {
//   console.log(i, '-->', ch[i], '==', dis[i]);
// }
