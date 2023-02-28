import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const products = [
      { id: 12, title: 'Dr. Nice',price:100,description:"description",category:"category", image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", rating:"rating"},
      { id: 13, title: 'Dr. Two',price:110,description:"description2",category:"category", image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", rating:"rating"}
    ];
    return {products};
  }
}