//importation

function zeros(row, column) {
  var returned_list = [];
  let temp_list;
  for (let i = 0; i < row; i++) {
    temp_list = Array.apply(0, { length: column }).map((i) => 0);
    if (row === 1) {
      returned_list.concat(temp_list);
    } else {
      returned_list.push(temp_list);
    }
  }
}

export function select_ch(sensors, p, round_number) {
  var CH = [];
  // var n = my_model.n;
  sensors.forEach((sensor) => {
    // let sensor = sensors[s];
    // if (parseInt(sensor.enegy) > 0) {
    // && sensor.G <= 0
    // Election of Cluster Heads
    let temp_rand = Math.random();

    let value1 = round_number % Math.round(1 / p);
    // console.log(value1);
    let value = p / (1 - p * value1);
    // console.log(value);
    if (temp_rand <= value) {
      CH.push(sensor);
      sensor.type = 'c';
      sensor.G = Number(1 / p).toFixed(2) - 1;
    }
    // }
  });
  return CH;
}

const INITIAL_NODES = [
  {
    id: 1,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 233,
      y: 174,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 2,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 188,
      y: 11,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 3,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 29,
      y: 239,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 4,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 165,
      y: 5,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 5,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 23,
      y: 66,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 6,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 60,
      y: 24,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 7,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 125,
      y: 271,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 8,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 287,
      y: 114,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 9,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 292,
      y: 188,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
  {
    id: 10,
    energy: 9000,
    clusterHead: null,
    nodes: null,
    position: {
      x: 76,
      y: 211,
      color: '#11bb00',
    },
    type: 'n',
    G: 0,
    isClusterHead: false,
    energies: [9000],
  },
];
const nodess = [];
const node = INITIAL_NODES[0];
for (let i = 0; i < 200; i++) {
  node.id = i;
  nodess.push(node);
}

console.log(select_ch(nodess, 0.2, 4));
