"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var ev_search_service_1 = require('./ev-search.service');
var EVSearchComponent = (function () {
    function EVSearchComponent(evSearchService, router) {
        this.evSearchService = evSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    EVSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    EVSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evs = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.evSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    EVSearchComponent.prototype.gotoDetail = function (ev) {
        var link = ['/detail', ev.id];
        this.router.navigate(link);
    };
    EVSearchComponent = __decorate([
        core_1.Component({
            selector: 'ev-search',
            templateUrl: 'app/ev-search.component.html',
            styleUrls: ['app/ev-search.component.css'],
            providers: [ev_search_service_1.EVSearchService]
        }), 
        __metadata('design:paramtypes', [ev_search_service_1.EVSearchService, router_1.Router])
    ], EVSearchComponent);
    return EVSearchComponent;
}());
exports.EVSearchComponent = EVSearchComponent;
//# sourceMappingURL=ev-search.component.js.map