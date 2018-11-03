import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  _url_server:string = 'https://coursetro.com/posts/code/110/Creating-and-Using-Angular-5-Services'

  constructor(
    private http:HttpClient
  ) { }

  search_bill(data:string){
    return this.http.get(this._url_server + '/' + data)
  }

  get_bill(id:number){
    console.log(id)
    return {
      company: 'adasdafasfafsqwfafaf',
      num_bill: 'fna 35353245325325',
      box: '23',
      products: [{
        name: 'fsafasfasf',
        unit: 4324324,
        cant: 534
      }],
      way_pay: 43243,
      pay: 423424,
      tax: 0.2
    }
  }
}
