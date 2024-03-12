import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //constrcutor()
  //ngOnInit()
  //ngOnchanges()
  //ngOnDestroy()
  items:any
  // constructor(){
  //   fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(data=>{
  //   this.items=data
  //   })
  // }
//   constructor(private http:HttpClient){
//     this.http.get('https://fakestoreapi.com/products').subscribe(data=>{
//       this.items=data
//     })


//   }

     constructor(private service:StoreService){
      this.service.getAllProducts().subscribe(data=>{
        this.items=data
      })

      this.service.categorySubjectObj.subscribe(category=>{
        this.service.getProductsByCategory(category).subscribe(data=>{
          this.items=data
        })
        
      })
     }

}
