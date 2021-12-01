import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DelFriendService {
  private url:string = "http://localhost:9000/delFriend";

 get getUrl(){
    return this.url;
  }

  constructor(private http: HttpClient) {}

  delFriend(email: any) {
      return this.http.post(this.url, email);
  }
}
