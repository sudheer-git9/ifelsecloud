import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://1.api.fy23ey04.careers.ifelsecloud.com/'

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
