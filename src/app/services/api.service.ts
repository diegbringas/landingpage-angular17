import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private _http = inject(HttpClient);
private urlBase: string = 'https://fakestoreapi.com/products';

getProducts():Observable<Products[]>{
      return this._http.get<Products[]>(this.urlBase);
  }

getProduct(id:number):Observable<Products>{
      return this._http.get<Products>(`${this.urlBase}/${id}`)
  }
}
