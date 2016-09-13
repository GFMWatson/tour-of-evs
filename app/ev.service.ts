import { Injectable }       from '@angular/core';
import { Headers, Http, RequestOptions }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { EV }               from './ev';

@Injectable()
export class EVService {
    private evUrl = 'app/evs';
    private headers = new Headers({'Content-Type': 'application/json'});
    private id: number;

    constructor(private http: Http) {}

    getEVs(): Promise<EV[]> {
      return this.http.get(this.evUrl)
              .toPromise()
              .then(response => response.json().data as EV[])
              .catch(this.handleError);
    }

    getEVsSlowly(): Promise<EV[]> {
      return new Promise<EV[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getEVs());
    }

    getEV(evid: number): Promise<EV> {
      return this.getEVs()
      .then(evs => evs.find(ev => ev.id === evid));
    }

    update(ev: EV): Promise<EV> {
      const url = `${this.evUrl}/${ev.id}`;
      return this.http
      .put(url, JSON.stringify(ev), {headers: this.headers})
      .toPromise()
      .then(() => ev)
      .catch(this.handleError);
   }
    create(make: string, model: string): Promise<EV>{ 
      return this.http
      .post(this.evUrl, JSON.stringify({make: make, model: model}), {headers: this.headers})
      .toPromise()
      .then((resp) => resp.json().data)
      .catch(this.handleError);
      
    }
   delete(id: number): Promise<void> {
  let url = `${this.evUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
  

}