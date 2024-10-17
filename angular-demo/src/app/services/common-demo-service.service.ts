import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, Observer, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDemoServiceService {
  // /posts?_start=10&_end=20
  constructor(private http: HttpClient) { }

  public baseUrl= 'https://jsonplaceholder.typicode.com/posts?_start=10&_end=15'; 

  getDogsDetails(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }


    // Simulate API calls with delays
    //TO understand rxjs map operators
    apiCall1(): Observable<string> {
      return of('API Call 1 Result').pipe(delay(2000));
    }
  
    apiCall2(): Observable<string> {
      return of('API Call 2 Result').pipe(delay(1000));
    }
  
    apiCall3(): Observable<string> {
      return of('API Call 3 Result').pipe(delay(1500));
    }
}
