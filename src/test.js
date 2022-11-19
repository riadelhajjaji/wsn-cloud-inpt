// // import { MAX_ENERGY } from './global';

// const energies = [
//   [1, 2, 3, 4],
//   [6, 4, 2, 6],
//   [5, 3, 7, 8],
// ];
// const wsnNodes = [
//   { id: 1, energy: 13 },
//   { id: 2, energy: 2 },
//   { id: 3, energy: 6 },
// ];
// // const wsn = new WsnNode(2, MAX_ENERGY, null, null, { x: 6, y: 23 });

// const tmpEnergies = wsnNodes.map((node) => {
//   return [...energies[node.id - 1], node.energy];
// });
// // console.log(wsn.energy);
// const energiess = [
//   wsnNodes.map((n) => {
//     return [33];
//   }),
// ];
// console.log('---', energies);

class dd {
  constructor(dd, bb) {
    this.bb = bb;
    this.dd = dd;
  }

  set setdd(d) {
    this.dd = d;
  }
}
const d = new dd(3, 4);
d.setdd = 5;
console.log(d);
