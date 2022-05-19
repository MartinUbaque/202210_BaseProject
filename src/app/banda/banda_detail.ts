
import { Banda } from "./Banda";
export class Banda_detail  extends Banda{

  constructor(id:number,
     name:string,
     numberOfMembers:number,
     description:string,
     popularSongs:string[],
     image:string){

      super(id,name,numberOfMembers,description,popularSongs,image);
     }
}
