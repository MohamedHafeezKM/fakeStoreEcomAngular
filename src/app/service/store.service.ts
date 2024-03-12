import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  categorySubjectObj=new Subject()
  constructor(private http:HttpClient){
    
  }
  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  retrieveProductDetail(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

  getCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  sendCategoryNameService(category:any){
    return this.categorySubjectObj.next(category)
  }

  getProductsByCategory(category:any){
    let url=`https://fakestoreapi.com/products/category/${category}`
    return this.http.get(url)
  }


}
