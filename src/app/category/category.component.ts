import { Component } from '@angular/core';
import { StoreService } from '../service/store.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories:any
  constructor(private service:StoreService){
    this.service.getCategories().subscribe(data=>{
      this.categories=data
    })
  }

  dispatchCategoryName(category:any){
   
    this.service.sendCategoryNameService(category)
    
  }

}
