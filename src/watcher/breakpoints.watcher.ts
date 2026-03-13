import {
  DeviceSizeBreakpointModified,
  ActiveDevice,
} from '../types/modified.types';
import { DOMautoqueryDevices } from '../types/user.app.types';

export const breakpointsWatcher = (
  devices: DOMautoqueryDevices,
  callback: (activeDevice: ActiveDevice) => void,
) => {
  //--------------------------------------------------------------------------
  // Convert object to a sorted array to ensure we calculate ranges correctly
  //--------------------------------------------------------------------------
  const deviceSizes: DeviceSizeBreakpointModified = devices.sizes;
  const breakPointValues: ActiveDevice[] = Object.entries(deviceSizes)
    .map(([key, value]) => {
      value = { ...value, id: Number(key) };
      return value;
    })
    .sort((a, b) => a.value - b.value);
  //-----------------------------------

  breakPointValues.forEach((bp: ActiveDevice) => {
    const nextBp = breakPointValues[bp.id]; // "bp.id" instead of using "index + 1"

    //-------------------------------------------------------
    // Build the query:
    // If there is a next breakpoint, set a max-width limit.
    // If it's the last one, it's just min-width to infinity.
    //-------------------------------------------------------
    let mQueryRange = `(min-width: ${bp.startPoint}${devices.unit})`;
    if (nextBp) {
      mQueryRange += ` and (max-width: ${nextBp.startPoint - 1}${devices.unit})`;
    }

    bp = {
      ...bp,
      endPoint: nextBp ? nextBp.startPoint - 1 : null,
      unit: devices.unit,
      _mQueryRange: mQueryRange,
    };

    //-------------------------------------------------------
    const mQueryListener = window.matchMedia(mQueryRange);

    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        callback(bp);
      }
    };

    //----------------
    // Attach listener
    //----------------
    mQueryListener.addEventListener('change', handler);

    //------------------------
    // Immediate check on load
    //------------------------
    if (mQueryListener.matches) callback(bp);
  });
};
