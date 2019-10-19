import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any=[];
  userId: any;

  constructor(private appService: AppService,private router:Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem('login')){
      this.router.navigate(['/login'])
    }
    this.userId = sessionStorage.getItem('user_id');
    this.getAllProducts();
  }
  getAllProducts() {
    this.appService.getAllProducts().subscribe((data:any) => {
      console.log("data", data);
      if(data.success){
      this.products = data.data;
      }
    })
  }
  buyNow(item:any){
    let obj={
      product_id:item.product_id,
      user_id:this.userId,
      status:0
    }
    this.appService.orderProduct(obj).subscribe((data:any)=>{
      if(data.success){
        console.log("inserted successfully");
        this.router.navigate(['/dashboard']);
      }
    })
  }
}
