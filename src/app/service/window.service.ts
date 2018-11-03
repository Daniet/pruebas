import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  w = window

  obj(){
    return this.w
  }

  size(){
    return {
      height: this.w.innerHeight,
      width: this.w.innerWidth
    }
  }

}
