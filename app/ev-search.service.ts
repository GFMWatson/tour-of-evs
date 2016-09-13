import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { EV }           from './ev';
@Injectable()
export class EVSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<EV[]> {
    return this.http
               .get(`app/evs/?model=${term}`)
               .map((r: Response) => r.json().data as EV[]);
  }
}