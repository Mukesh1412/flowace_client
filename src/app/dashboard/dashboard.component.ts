import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss', './dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  orders: any = [];
  role: any;
  userId: string;
  interval: any;
  ordersCount: any=0;
  page:any=1;
  limit: any=10;

  constructor(private appService: AppService,private router:Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem('login')){
      this.router.navigate(['/login'])
    }
    this.role = sessionStorage.getItem('role');
    this.userId = sessionStorage.getItem('user_id');
    this.getAllOrdersCount();
    this.getAllOrders(this.page);
    this.interval = setInterval(() => {
      this.getAllOrdersCount();
      this.getAllOrders(this.page);
    }, 10000);

  }
  ngOnDestroy() {
    if (this.interval) {
        clearInterval(this.interval);
    }
   }
   getAllOrdersCount(){
    this.appService.getAllOrdersCount(this.role, this.userId).subscribe((data: any) => {
      if (data.success) {
        this.ordersCount = data.data[0].count;
        // console.log("orders count ", this.ordersCount);
      }
    })
   }
  getAllOrders(page) {
  let obj ={
    role:this.role,
    user_id:this.userId,
    page:page,
    limit:this.limit
  }
  this.appService.getAllOrders(obj).subscribe((data: any) => {
      if (data.success) {
        this.orders = data.data;
        // console.log("orders ", this.orders);
      }
    })
  }
  updateStatus(item: any, status) {
    let obj = {
      order_id: item.order_id,
      status,
      product_id:item.product_id
    }
    this.appService.updateOrderStatus(obj).subscribe((data: any) => {
      if (data.success) {
        console.log("status updated")                           
        this.getAllOrders(this.page);
      }
    })
  }
  pageChange(page:any){
    console.log("current page",page);
    this.page=page;
    this.getAllOrders(page);
  }
}
