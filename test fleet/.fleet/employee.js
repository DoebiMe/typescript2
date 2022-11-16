"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(_id, _name) {
        this._id = _id;
        this._name = _name;
        //met de underscore zorg je ervoor dat je een getter of setter kan schrijven lowercase, zonder dat je de underscore in je gettter of setter name moet schrijven
        //de constructor maakt door die underscore en question mark een field aan, die je kan aanspreken in je class met of zonder de underscore.
        // op deze manier moet je ook id en name niet afzonderlijk definieren en toewijzen, het gebeurd automatisch zo als je de constructor zo schrijft
    }
    Employee.prototype.getTheid = function () {
        // je kan een getter zo schrijven (zonder "The")
        return this.id;
    };
    Object.defineProperty(Employee.prototype, "id", {
        get: function () {
            // je kan een getter zo schrijven in lower case, omdat je id in je constructor een underscore heeft
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.show = function () {
        console.log("Id = " + this._id + " with name " + this._name);
    };
    return Employee;
}());
exports.Employee = Employee;
