// import { get_min_and_id_of_ch } from './clusterG/join_to_nearest_ch';
import { get_min_and_id_of_ch } from './clusterG/join_to_nearest_ch';
import WsnNode from './domains/WsnNode';
import { MAX_ENERGY } from './global';

export const makeClusers = (nodes, clusterHeads) => {
  return [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9],
  ];
};

export const makeEdges = (nodes, clusters) => {
  // const clusterHeads = clusterHeadss.map((ch) => ch.id);

  // let edges = [];
  // for (let chi = 0; chi < clusterHeads.length; chi++) {
  //   for (let cli = 0; cli < clusters[chi].length; cli++) {
  //     edges = [...edges, { from: clusters[chi][cli], to: clusterHeads[chi] }];
  //   }
  // }
  const edges = get_min_and_id_of_ch(nodes, clusters).filter(
    (edge) => edge.from !== edge.to
  );
  return edges;
};

export const randomColor = () => {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  return `#${red}${green}${blue}`;
};

export const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: '#000000',
  },
  nodes: {
    fixed: true,
  },
};
export const INITIAL_EDGES = [
  { from: 1, to: 1 },
  { from: 2, to: 2 },
  { from: 3, to: 1 },
  { from: 4, to: 2 },
  { from: 5, to: 1 },
  { from: 7, to: 2 },
  { from: 8, to: 1 },
  { from: 9, to: 2 },
  { from: 10, to: 1 },
];
export const addWsnNodes = (n) => {
  let node = new WsnNode(
    1,
    MAX_ENERGY,
    null,
    null,
    {
      x: Math.floor(Math.random() * 600),
      y: Math.floor(Math.random() * 600),
    },
    '#11bb00'
  );
  let sink = new WsnNode(
    0,
    MAX_ENERGY,
    null,
    null,
    {
      x: 0,
      y: 10,
    },
    '#00ff'
  );

  const nodes = [];
  // nodes.push(sink);
  for (let id = 1; id < n; id++) {
    nodes.push(
      new WsnNode(
        id,
        MAX_ENERGY,
        null,
        null,
        {
          x: Math.floor(Math.random() * 300),
          y: Math.floor(Math.random() * 300),
        },
        '#11bb00'
      )
    );
  }
  return nodes;
};

export const transmitionEnergy1 = (simulationParams, n) => {
  // n est le nombre des packets
  const { Tstart, Pstart, R, Rcode, Pamp, PtxElec } = simulationParams;
  const energy = Tstart * Pstart + (n / (R * Rcode)) * (PtxElec + Pamp);
  return energy;
};

export const transmitionEnergy2 = (simulationParams, Ton) => {
  // Ton est Ton= L/R (taille packet / débit)
  const { Nt, Pt, Pr, Tst, Pout, Nr, Ron, Rst } = simulationParams;
  const energy = Nt * (Pt * (Ton + Tst) + Pout * Ton) + Nr * (Pr * (Ron + Rst));
  return energy;
};

export const transmitionEnergy = (simulationParams, message) => {
  const { energyType } = simulationParams;
  if (energyType) {
    return transmitionEnergy1(simulationParams, message);
  } else {
    return transmitionEnergy2(simulationParams, message);
  }
};
