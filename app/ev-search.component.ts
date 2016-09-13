import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { EVSearchService } from './ev-search.service';
import { EV } from './ev';
@Component({
  selector: 'ev-search',
  templateUrl: 'app/ev-search.component.html',
  styleUrls:  ['app/ev-search.component.css'],
  providers: [EVSearchService]
})
export class EVSearchComponent implements OnInit {
  evs: Observable<EV[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private evSearchService: EVSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.evs = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.evSearchService.search(term)
        // or the observable of empty evs if no search term
        : Observable.of<EV[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<EV[]>([]);
      });
  }
  gotoDetail(ev: EV): void {
    let link = ['/detail', ev.id];
    this.router.navigate(link);
  }
}