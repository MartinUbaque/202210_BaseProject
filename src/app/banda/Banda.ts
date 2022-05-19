export class Banda {
  id: number;
  name: string;
  numberOfMembers:number;

  description: string;
  popularSongs:string[];
  image:string;

  constructor(id: number,name: string,numberOfMembers:number, description: string, popularSongs:string[],
    image:string) {
    this.id=id;
    this.name = name;
    this.numberOfMembers = numberOfMembers;
    this.description = description;
    this.popularSongs = popularSongs;
    this.image = image;
  }
}


