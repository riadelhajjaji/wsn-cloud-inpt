//importation

function zeros(row, column) {
  var returned_list = [];
  let temp_list;
  for (let i = 0; i < row; i++) {
    temp_list = Array.apply(0, { length: column }).map((i) => 0);
    returned_list.push(temp_list);
  }
  return returned_list;
}

function get_min_and_id_of_ch(myModel, TotalCH, distance) {
  var min_dist_from_all_ch = [];
  var id_of_min_dist_ch = [];

  var total_nodes = myModel.n;
  const number_of_ch = TotalCH.length;

  for (let node = 0; node < total_nodes; node++) {
    let min_dist = Infinity;
    let ch_id = -1;
    for (let ch = 0; ch < number_of_ch; ch++) {
      if (distance[ch][node] <= min_dist) {
        min_dist = distance[ch][node];
        ch_id = ch;
      }
    }
    min_dist_from_all_ch.push(min_dist);
    id_of_min_dist_ch.push(ch_id);
  }
  return min_dist_from_all_ch, id_of_min_dist_ch;
}

// function start(Sensors, myModel, TotalCH) {
//   var total_nodes = myModel.n;
//   const number_of_ch = TotalCH.length;
//   // added
//  let distance;
//   // if there are CH
//   if (number_of_ch > 0) {
//     // creating a 2x2 array with each row storing the distance of all nodes for a CH
//     distance = zeros(number_of_ch, total_nodes);

//     // storing the distance of all nodes with every CH
//     for (let i = 0; i < total_nodes; i++) {
//       for (let j = 0; j < number_of_ch; j++) {
//         distance[j][i] = Math.sqrt(
//           Math.pow(Sensors[i].xd - Sensors[TotalCH[j]].xd, 2) +
//             Math.pow(Sensors[i].yd - Sensors[TotalCH[j]].yd, 2)
//         );
//       }
//     }

//     // what below does is:
//     // We have stored all CH as row and took distance between each CH and all nodes in its Columns
//     // this take minimum value of each column i.e min dist for each node and that dist is dist to CH
//     min_dist_from_all_ch,
//       (id_of_min_dist_ch = get_min_and_id_of_ch(myModel, TotalCH, distance));

//     // for every node, check from which
//     for (const [i, sensor] of Sensors.slice(0, -1).entries()) {
//       if (sensor.E > 0) {
//         // if node is in RR CH and is Nearer to CH rather than Sink
//         if (
//           min_dist_from_all_ch[i] <= myModel.RR &&
//           min_dist_from_all_ch[i] < sensor.dis2sink
//         ) {
//           sensor.MCH = TotalCH[id_of_min_dist_ch[i]];
//           sensor.dis2ch = min_dist_from_all_ch[i];
//         } else {
//           sensor.MCH = total_nodes;
//           sensor.dis2ch = sensor.dis2sink;
//         }
//       }
//     }
//   }
// }
