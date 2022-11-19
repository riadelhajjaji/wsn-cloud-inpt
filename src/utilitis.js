import WsnNode from './domains/WsnNode';
import { MAX_ENERGY } from './global';

export const makeClusers = (nodes, clusterHeads) => {
  nodes = nodes.filter((e) => e !== clusterHeads[0] && e !== clusterHeads[1]);
  const nodes1 = nodes.slice(0, Math.floor(nodes.length / 2));
  const nodes2 = nodes.slice(Math.floor(nodes.length / 2), nodes.length);
  return [nodes1, nodes2];
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
export const makeEdges = (clusterHeads, clusters) => {
  let edges = [];
  for (let chi = 0; chi < clusterHeads.length; chi++) {
    for (let cli = 0; cli < clusters[chi].length; cli++) {
      edges = [...edges, { from: clusters[chi][cli], to: clusterHeads[chi] }];
    }
  }
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
export const INITIAL_NODES = [
  new WsnNode(1, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(2, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(3, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(4, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(5, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(6, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(7, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(8, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(9, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
  new WsnNode(10, MAX_ENERGY, null, null, {
    x: Math.floor(Math.random() * 300),
    y: Math.floor(Math.random() * 300),
    color: '#11bb00',
  }),
];

const Tstart = 0;
const Pstart = 0;
const PtxElec = 0;
const R = 0;
const transmitionEnergy1 = (n, Rcode, Pamp) => {
  const energy = Tstart * Pstart + (n / (R * Rcode)) * (PtxElec + Pamp);
};

const transmitionEnergy2 = (n, Rcode, Pamp) => {
  const energy = Tstart * Pstart + (n / (R * Rcode)) * (PtxElec + Pamp);
};
