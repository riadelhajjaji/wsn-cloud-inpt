const sendMesageEnergy = 100;

export default class WsnNode {
  // id:number;
  // energy:number;
  // position?:positionType;
  // clusterHead:null|number;
  // nodes:null|WsnNode[]
  // T?: number;
  constructor(id, energy, nodes, clusterHead, position, color) {
    this.id = id;
    this.energy = energy;
    this.clusterHead = clusterHead;
    this.nodes = nodes;
    this.position = position;
    this.color = color;
    // this.isClusterHead = isClusterHead;
  }
  set setId(id) {
    this.id = id;
  }

  get getId() {
    return this.id;
  }
  set setEnergy(energy) {
    this.energy = energy;
  }
  get getEnergy() {
    return this.energy;
  }
  set setColor(color) {
    this.energy = color;
  }
  get getColor() {
    return this.color;
  }
  set setPosition(position) {
    this.position = position;
  }
  get getPosition() {
    return this.position;
  }
  // get getIsClusterHead() {
  //   return this.isClusterHead;
  // }
  // set setIsClusterHead(isClusterHead) {
  //   this.isClusterHead = isClusterHead;
  // }
  sendPackets(message) {
    // send message
    this.energy = this.energy - sendMesageEnergy * 40 * Math.random();
  }
  receivePackets(message) {
    // receive
    this.energy = this.energy - sendMesageEnergy * 40 * Math.random();
  }
}

// void Broadcast():
// 	for loop (noude in noudes):
// 		//select clusters
// 		node.setCH
// 		noude.recieve(message)
