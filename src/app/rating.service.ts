import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from './rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private baseURL ="http://localhost:8080/getRatings"
  private baseURL1="http://localhost:8080/addRating"
  constructor(private httpClient : HttpClient) { }
  getRatingList(): Observable<Rating[]>{
    return this.httpClient.get<Rating[]>(this.baseURL);
  }

  createRating(rating :Rating):Observable<object>
  {
    return this.httpClient.post(this.baseURL1,rating);
  }
}
