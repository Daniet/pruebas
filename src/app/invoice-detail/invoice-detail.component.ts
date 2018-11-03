import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router'
import { HttpService } from '../service/http.service'

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.sass']
})
export class InvoiceDetailComponent implements OnInit {

  constructor(
    private httpService:HttpService,
    private route: ActivatedRoute
  ) { }

  company:string = null
  num_bill:string = null
  box:string = null

  way_pay:number = 43243
  pay:number = 423424
  tax:number = 0.2

  bill:any

  total:number = 0
  val_products:number = 0

  ngOnInit() {
    this.bill = this.httpService.get_bill(this.route.snapshot.params.id)
  }

  totalProduct(product){
    let value = 0
    for(let x in product){
      value += (product[x].unit * product[x].cant)
    }
    return value
  }

  cal_total(tax, val_product){
    return tax * val_product
  }

}
