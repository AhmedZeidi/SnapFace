
export class FaceSnap{


  constructor(public id: number,
              public title: string,
              public imageUrl: string,
              public description: string,
              public createdDate: Date,
              public snaps: number,
              public lacation?: string ){

  }
}
