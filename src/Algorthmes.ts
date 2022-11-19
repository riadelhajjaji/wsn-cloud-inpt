
type positionType={x:number,y:number};
const sendMesageEnergy=1;


export default class WsnNode{
    id:number;
    energy:number;
    position?:positionType;
    clusterHead:null|number;
    nodes:null|WsnNode[]
    T?: number;
    constructor(id:number,energy:number,nodes:null|WsnNode[],clusterHead:null|number,position?:positionType){
        this.id=id;
        this.energy=energy;
        this.clusterHead=clusterHead;
        this.nodes=nodes;
        this.position=position;

    }
    set setId(id:number){
        this.id=id
    }
    get getId():number{
        return this.id;
    }
    set setEnergy(energy:number){
        this.energy=energy
    }
    get getEnergy():number{
        return this.energy;
    }

    public sendMessage(message:string){
            // send message
            this.energy=this.energy-sendMesageEnergy;

        }
    public receive(message:string){
        // receive
        this.energy=this.energy-sendMesageEnergy;

    }

}

// void Broadcast():
// 	for loop (noude in noudes):
// 		//select clusters
// 		node.setCH
// 		noude.recieve(message)


    

