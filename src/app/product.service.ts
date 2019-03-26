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

  // Get all the products from the database
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.ApiUrl + '/getProducts')
      .pipe(
        tap(_ => console.log("Done..")),
        catchError(this.handleError('getProducts', []))
      );
  }
  // To catch errors
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // Edit a product
  applyChanges(modifiedProduct: Product): Observable<Product> {
    return this.http.put<Product>(this.ApiUrl + '/editProduct', modifiedProduct )
      .pipe(
        tap(_ => console.log("cool")),
        catchError(this.handleError<Product>('editProduct'))
      );
  }
  // Create a new product
  createProduct(newProduct: Product): Observable<Product> {
    console.log("BE", newProduct);
    return this.http.post<Product>(this.ApiUrl + '/addProduct', newProduct )
    .pipe(
      tap(_ => console.log("cool")),
      catchError(this.handleError<Product>('addProduct'))
    );
  }
  // Delete a product
  deleteProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.ApiUrl + '/deleteProduct', product)
      .pipe(
        tap(_ => console.log("Done..")),
        catchError(this.handleError<Product>('deleteProduct'))
      );
  }
}
