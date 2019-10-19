import{environment} from '../environments/environment';
export const appSetting={
 REGISTRATION:environment.apiUrl+'/users',
 GET_AUTH:environment.apiUrl+'/Authentication',
 GET_PRODUCT_LIST:environment.apiUrl+'/getAllProducts',
 PLACE_ORDER:environment.apiUrl+'/order',
 GET_ORDERS:environment.apiUrl+'/getAllOrders',
 GET_ORDERS_COUNT:environment.apiUrl+'/getAllOrdersCount',
 ORDER_STATUS_UPDATE:environment.apiUrl+'/updateOrderStatus'
}
