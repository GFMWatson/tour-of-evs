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
var ev_service_1 = require('./ev.service'); //is this necessary?
var EVsComponent = (function () {
    function EVsComponent(evService, router) {
        this.evService = evService;
        this.router = router;
    }
    EVsComponent.prototype.onSelect = function (ev) {
        this.selectedEV = ev;
    };
    EVsComponent.prototype.getEVs = function () {
        var _this = this;
        this.evService.getEVsSlowly().then(function (EVS) { return _this.evs = EVS; });
    };
    EVsComponent.prototype.ngOnInit = function () {
        this.getEVs();
    };
    EVsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedEV.id]);
    };
    EVsComponent.prototype.add = function (make, model) {
        var _this = this;
        make = make.trim();
        model = model.trim();
        if (!make || !model) {
            return;
        }
        this.evService.create(make, model)
            .then(function (ev) {
            _this.evs.push(ev);
            _this.selectedEV = null;
        });
    };
    EVsComponent.prototype.delete = function (ev) {
        var _this = this;
        this.evService
            .delete(ev.id)
            .then(function () {
            _this.evs = _this.evs.filter(function (h) { return h !== ev; });
            if (_this.selectedEV === ev) {
                _this.selectedEV = null;
            }
        });
    };
    EVsComponent = __decorate([
        //is this necessary?
        core_1.Component({
            selector: 'my-evs',
            templateUrl: 'app/evs.component.html',
            styleUrls: ['app/evs.component.css']
        }), 
        __metadata('design:paramtypes', [ev_service_1.EVService, router_1.Router])
    ], EVsComponent);
    return EVsComponent;
}());
exports.EVsComponent = EVsComponent;
//# sourceMappingURL=evs.component.js.map