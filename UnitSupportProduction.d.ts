import Production from '@civ-clone/base-terrain-yield-production/Production';
import Unit from '@civ-clone/core-unit/Unit';
import Yield from '@civ-clone/core-yield/Yield';
export declare class UnitSupportProduction extends Production {
  #private;
  constructor(value?: Yield | number, unit?: Unit | null);
  unit(): Unit | null;
}
export default UnitSupportProduction;
