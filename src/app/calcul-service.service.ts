import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {
  nb! :number;

  constructor() { }

  getNumberOf(list:any[], critiria:string, value:any){
    let n = 0;
    for (let t of list) {
if(t[critiria] == value) {
  n++;
}
    }
    return n;
  }


}
