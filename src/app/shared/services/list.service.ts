import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  export type apiResponse =[
    results:{},
    info: {},
  ]


@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiUrl='https://rickandmortyapi.com/api/character'

  constructor(private httpClient:HttpClient) { }

  getList():Observable<any>{
    return this.httpClient.get<any>(this.apiUrl)
  }
}
