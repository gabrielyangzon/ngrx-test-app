import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  private _jsonURL = '../../assets/users.json';


  public getUsers() : Observable<any> {

    return this.http.get(this._jsonURL)
  }

  
  
}
