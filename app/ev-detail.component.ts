
import { Component, Input, OnInit }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

import { EV }                           from './ev';
import { EVService }                    from './ev.service';

@Component({
    selector: 'my-ev-detail',
    templateUrl: 'app/ev-detail.component.html',
    styleUrls: ['app/ev-detail.component.css']
})
export class EVDetailComponent implements OnInit{
    @Input()
    ev: EV;

    constructor(
        private evService: EVService,
        private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.evService.getEV(id)
            .then(ev => this.ev = ev);
        })
    }
    goBack(): void {
        window.history.back();
    }
    save(): void {
         this.evService.update(this.ev)
         .then(this.goBack);
    }
}
