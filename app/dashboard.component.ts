import { Component }  from '@angular/core';
import { OnInit }     from '@angular/core';
import { Router } from '@angular/router';

import { EV } from './ev';
import { EVService } from './ev.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  evs: EV[] = [];
  constructor( private router: Router, private evService: EVService){  }
   ngOnInit(): void {
    this.evService.getEVs()
      .then(evs => this.evs = evs.slice(1, 5));
  }

  gotoDetail(ev: EV): void {
    let link = ['/detail', ev.id];
    this.router.navigate(link);
  }
}
  

