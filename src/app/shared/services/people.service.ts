import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any>{
      let peopleArray = [
        {
          firstName:'Samara',
          lastName: 'Flor',
          age:33
        },
        {
          firstName:'Maria',
          lastName: 'Silva',
          age:72
        },
        {
          firstName:'Paulo',
          lastName: 'Pereira',
          age:36
        },
        {
          firstName:'Xuxa',
          lastName: 'Meneguel',
          age:46
        }
      ]
      return of(peopleArray)
  }
}
