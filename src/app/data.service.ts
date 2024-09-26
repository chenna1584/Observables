
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = [
    { id: 1, name: 'First One' },
    { id: 2, name: 'Second One' },
    { id: 3, name: 'Third One' },
  ];

  constructor() {}

  getData(): Observable<any[]> {
    return of(this.data); 
  }
}

