import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from '../models/basket';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  apiUrl = "https://localhost:44314/api/Baskets/";

  constructor(private httpClient:HttpClient) { }


addBasket(basket:Basket):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",basket);

}

getBasket():Observable<ListResponseModel<Basket>>{
  return this.httpClient.get<ListResponseModel<Basket>>(this.apiUrl+"getbasket");
}

}