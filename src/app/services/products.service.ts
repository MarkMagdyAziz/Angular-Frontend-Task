import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, retry } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../interfaces/iproduct';
import { Icategory } from './../interfaces/icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpOption;
  constructor(private http: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': "sfkugkrbf"
      }),
    };
  }
  private handleErr(err: HttpErrorResponse) {
    if (err.status)
      console.log(
        `An Error occured ${err.error} msg: ${err.message} status: ${err.status}`
      );
    return throwError(() => new Error('Erorr occured please try again'));
  }

  getProducts(skip: number): Observable<any> {
    return this.http
      .get<Iproduct[]>(`${environment.APIURL}?limit=15&skip=${skip}`)
      .pipe(retry(2), catchError(this.handleErr));
  }
  getCategories(): Observable<any> {
    return this.http
      .get<Icategory[]>(`${environment.APIURL}/categories`)
      .pipe(retry(2), catchError(this.handleErr));
  }
  getFilteredProducts(filteredCatgeory: string): Observable<any> {
    return this.http
      .get<Iproduct[]>(`${environment.APIURL}/category/${filteredCatgeory}`)
      .pipe(retry(2), catchError(this.handleErr));
  }
  getProductDetails(id: number): Observable<any> {
    return this.http
      .get<Iproduct[]>(`${environment.APIURL}/${id}`)
      .pipe(retry(2), catchError(this.handleErr));
  }
  searchProduct(query: string): Observable<any> {
    return this.http
      .get<Iproduct[]>(`${environment.APIURL}/search?q=${query}&`)
      .pipe(retry(2), catchError(this.handleErr));
  }
}
