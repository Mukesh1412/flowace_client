import { Injectable } from '@angular/core';
import { appSetting } from './app.settings';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  Registration(obj: any) {
    return this.http.post(appSetting.REGISTRATION, obj);
  };
  
  getUserAuthentication(user_details:any){
    return this.http.post(appSetting.GET_AUTH,user_details);
  }
  getAllProducts(){
    return this.http.get(appSetting.GET_PRODUCT_LIST);
  }
  orderProduct(obj:any){
    return this.http.post(appSetting.PLACE_ORDER,obj);
  }
  getAllOrders(obj:any){
    return this.http.post(appSetting.GET_ORDERS,obj);
  }
  getAllOrdersCount(role,user_id){
    return this.http.get(appSetting.GET_ORDERS_COUNT+`/${role}/${user_id}`);
  }
  updateOrderStatus(obj:any){
    return this.http.post(appSetting.ORDER_STATUS_UPDATE,obj)
  }
}
