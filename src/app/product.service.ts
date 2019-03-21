import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private heroesUrl = 'endpoints';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( 
    private http: HttpClient,
    ) { }
}
