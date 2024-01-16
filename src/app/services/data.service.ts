import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  fakeCall() {
    throw new Error('Method not implemented.');
  }

  getUser(id: User){
    return this.httpClient.get('http://127.0.0.1:8000/api/profile/'+id);
  }

}
