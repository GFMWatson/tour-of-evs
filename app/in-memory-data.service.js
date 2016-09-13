"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var evs = [
            { id: 1, make: 'Ford', model: 'Focus Electric' },
            { id: 2, make: 'Nissan', model: 'Leaf' },
            { id: 3, make: 'BMW', model: 'I3' },
            { id: 4, make: 'Tesla', model: 'Model X' },
            { id: 5, make: 'Tesla', model: 'Model S' },
            { id: 6, make: 'Tesla', model: 'Model 3' },
            { id: 7, make: 'Chevy', model: 'Spark' },
            { id: 8, make: 'Fiat', model: '500e' },
            { id: 9, make: 'Kia', model: 'Soul EV' },
            { id: 10, make: 'Volkswagen', model: 'E-Golf' },
            { id: 11, make: 'Mitsubishi', model: 'i-MiEV' },
            { id: 12, make: 'Mercedes', model: 'B-Class Electric' },
            { id: 13, make: 'WatsonWheels', model: 'electric Truck' }
        ];
        return { evs: evs };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map