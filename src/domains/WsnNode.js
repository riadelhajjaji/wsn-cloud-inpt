import { transmitionEnergy, transmitionEnergy1 } from '../utilitis';

export default class WsnNode {
  constructor(id, energy, nodes, clusterHead, position, color) {
    this.id = id;
    this.energy = energy;
    this.clusterHead = clusterHead;
    this.nodes = nodes;
    this.position = position;
    this.color = color;
    this.type = 'n';
    this.G = 0;
    this.isClusterHead = false;
    this.energies = [this.energy];
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
  get getIsClusterHead() {
    return this.isClusterHead;
  }
  set setIsClusterHead(isClusterHead) {
    this.isClusterHead = isClusterHead;
  }

  get getEnergies() {
    return this.getEnergies;
  }
  set setEnergies(energies) {
    this.getEnergies = energies;
  }
  sendPackets(simulationParams, message) {
    // send message
    this.energy =
      this.energy - transmitionEnergy(simulationParams, message.length);
    this.energies = [...this.energies, this.energy];
  }
  receivePackets(simulationParams, message) {
    // receive
    this.energy =
      this.energy - transmitionEnergy(simulationParams, message.length);

    this.energies = [...this.energies, this.energy];
  }
  broadcast(simulationParams, message, node) {
    this.energy =
      this.energy - transmitionEnergy(simulationParams, message.length);
    this.energies = [...this.energies, this.energy];
  }
}
