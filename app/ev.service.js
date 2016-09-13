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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var EVService = (function () {
    function EVService(http) {
        this.http = http;
        this.evUrl = 'app/evs';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EVService.prototype.getEVs = function () {
        return this.http.get(this.evUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    EVService.prototype.getEVsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getEVs(); });
    };
    EVService.prototype.getEV = function (evid) {
        return this.getEVs()
            .then(function (evs) { return evs.find(function (ev) { return ev.id === evid; }); });
    };
    EVService.prototype.update = function (ev) {
        var url = this.evUrl + "/" + ev.id;
        return this.http
            .put(url, JSON.stringify(ev), { headers: this.headers })
            .toPromise()
            .then(function () { return ev; })
            .catch(this.handleError);
    };
    EVService.prototype.create = function (make, model) {
        return this.http
            .post(this.evUrl, JSON.stringify({ make: make, model: model }), { headers: this.headers })
            .toPromise()
            .then(function (resp) { return resp.json().data; })
            .catch(this.handleError);
    };
    EVService.prototype.delete = function (id) {
        var url = this.evUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    EVService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    EVService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EVService);
    return EVService;
}());
exports.EVService = EVService;
//# sourceMappingURL=ev.service.js.map