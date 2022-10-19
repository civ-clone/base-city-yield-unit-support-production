import Production from '@civ-clone/base-terrain-yield-production/Production';
import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';
import { makeNegative } from '@civ-clone/core-yield/NegativeYield';

export class UnitSupportProduction extends Production {
  #unit: Unit | null;

  constructor(value: Yield | number = 0, unit: Unit | null = null) {
    super(value, unit ? unit.id() : 'none');

    this.#unit = unit;

    this.addKey('unit');
  }

  unit(): Unit | null {
    return this.#unit;
  }
}

makeNegative(UnitSupportProduction);

export default UnitSupportProduction;
