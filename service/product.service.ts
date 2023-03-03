import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../src/app/product';


@Injectable({ providedIn: 'root' })
export class ProductService {
/*
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
*/
  constructor(
    private http: HttpClient) { }

  public GetItems$(): Observable<Product[]>{
      return this.http.get<Product[]>('https://fakestoreapi.com/products');
    }

    public GetData(){
      return this.http.get('https://fakestoreapi.com/products');
    }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
      .pipe(
        tap(_ => this.log('fetched products')),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
  }
}