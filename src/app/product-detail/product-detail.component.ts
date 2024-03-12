import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id:any
  item:any
  constructor(private route:ActivatedRoute,private service:StoreService){
    this.id=this.route.snapshot.params['id']//id from url we got it here or via link from home page
    // this.http.get(`https://fakestoreapi.com/products/${this.id}`).subscribe(data=>{
    //   this.item=data

    this.service.retrieveProductDetail(this.id).subscribe(data=>{
      this.item=data
    })
    


  }

}
