import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Http , HttpModule} from '@angular/http' 

import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private ApiUrl = 'endpoints';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( 
    private http: HttpClient,
    ) { }


  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.ApiUrl + '/getProducts')
      .pipe(
        tap(_ => console.log("Done..")),
        catchError(this.handleError('getProducts', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // Edit a product
  applyChanges(modifiedProduct: Product) {
    return this.http.put<Product>(this.ApiUrl + '/editProduct', modifiedProduct )
      .pipe(
        tap(_ => console.log("cool")),
        catchError(this.handleError('editProduct', []))
      );
  }

  createProduct(newProduct: Product) {
    console.log("BE",newProduct);
    return this.http.post<Product>(this.ApiUrl + '/addProduct', newProduct )
    .pipe(
      tap(_ => console.log("cool")),
      catchError(this.handleError('addProduct', []))
    );
  }

}
