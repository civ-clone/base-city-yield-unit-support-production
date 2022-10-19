"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UnitSupportProduction_unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSupportProduction = void 0;
const Production_1 = require("@civ-clone/base-terrain-yield-production/Production");
const NegativeYield_1 = require("@civ-clone/core-yield/NegativeYield");
class UnitSupportProduction extends Production_1.default {
    constructor(value = 0, unit = null) {
        super(value, unit ? unit.id() : 'none');
        _UnitSupportProduction_unit.set(this, void 0);
        __classPrivateFieldSet(this, _UnitSupportProduction_unit, unit, "f");
        this.addKey('unit');
    }
    unit() {
        return __classPrivateFieldGet(this, _UnitSupportProduction_unit, "f");
    }
}
exports.UnitSupportProduction = UnitSupportProduction;
_UnitSupportProduction_unit = new WeakMap();
(0, NegativeYield_1.makeNegative)(UnitSupportProduction);
exports.default = UnitSupportProduction;
//# sourceMappingURL=UnitSupportProduction.js.map