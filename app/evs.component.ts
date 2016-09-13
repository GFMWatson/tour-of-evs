import { Component }  from '@angular/core';
import { OnInit }     from '@angular/core';
import { Router }     from '@angular/router';

import { EV }         from './ev';
import { EVService }  from './ev.service';//is this necessary?






@Component({
    selector: 'my-evs',
    templateUrl: 'app/evs.component.html',
    styleUrls: ['app/evs.component.css']
})
export class EVsComponent implements OnInit{
    constructor(private evService: EVService, private router: Router){}

    selectedEV: EV;
    evs: EV[];

    onSelect(ev: EV): void{
        this.selectedEV = ev;
    }
    getEVs(): void {
      this.evService.getEVsSlowly().then(EVS => this.evs = EVS);
    }
    ngOnInit(): void {
      this.getEVs();
    }
    gotoDetail(): void {
   this.router.navigate(['/detail', this.selectedEV.id]);
    }
    add(make: string, model: string): void{
      make = make.trim();
      model = model.trim();
      if(!make || !model ){return;}
      this.evService.create(make, model)
      .then(ev=> {
          this.evs.push(ev);
          this.selectedEV = null;
      });
    }
    delete(ev: EV): void {
  this.evService
      .delete(ev.id)
      .then(() => {
        this.evs = this.evs.filter(h => h !== ev);
        if (this.selectedEV === ev) { this.selectedEV = null; }
      });
}
}