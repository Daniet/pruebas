import { Component, OnInit } from '@angular/core';

import { HttpService } from '../service/http.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  search:string

  constructor(
    private httpService:HttpService
  ) { }

  bills:any

  ngOnInit() {
  }

  submit(){
    this.httpService.search_bill(this.search).subscribe(data=>{
      console.log(data)
    })
  }

}
