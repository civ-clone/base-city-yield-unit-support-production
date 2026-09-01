"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSupportProduction = void 0;
const Production_1 = require("@civ-clone/base-terrain-yield-production/Production");
const NegativeYield_1 = require("@civ-clone/core-yield/NegativeYield");
class UnitSupportProduction extends Production_1.default {
    constructor(value = 0, unit = null) {
        super(value, unit ? unit.id() : 'none');
        this._unit = unit;
        this.addKey('unit');
    }
    unit() {
        return this._unit;
    }
}
exports.UnitSupportProduction = UnitSupportProduction;
(0, NegativeYield_1.makeNegative)(UnitSupportProduction);
exports.default = UnitSupportProduction;
//# sourceMappingURL=UnitSupportProduction.js.map