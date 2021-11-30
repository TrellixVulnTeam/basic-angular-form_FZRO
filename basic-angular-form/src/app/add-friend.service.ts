import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddFriendService {
  private http: HttpClient;
  private url = 'http://localhost:9000/allFriends';  //specify the correct path!

  get getUrl(){
    return this.url;
  }

  constructor(http: HttpClient) {
    this.http = http;
  }

  method: any; addFriend(friend: Friend):Observable<Friend> {
    return this.http.post<Friend>(this.url, friend) 
  }
}