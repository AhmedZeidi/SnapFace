import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{
  faceSnaps: FaceSnap[] = [
      {id: 1,
       title : 'ahmed',
       imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       description : "Mon ami depuis longtemps",
       createdDate : new Date(),
       snaps : 100},
       {  id: 2,
          title : 'Ahmed',
          imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          description : "Mon ami depuis longtemps",
          createdDate : new Date(),
          snaps : 0},
        { id: 3,
          title : 'Ahmed',
          imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          description : "Mon ami depuis longtemps",
          createdDate : new Date(),
          snaps : 0},
        { id: 4,
          title : 'Ahmed',
          imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          description : "Mon ami depuis longtemps",
          createdDate : new Date(),
          snaps : 0},
  ]

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap{
    let faceSnap = this.faceSnaps.find(faceSnap => faceSnapId === faceSnap.id)
    if (!faceSnap) {
      throw Error('FaceSnap not found!')
    } else {
      return faceSnap;
    }  
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    let faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

 
  
}

