import { breakpointsWatcher } from './watcher/breakpoints.watcher';
import { DOMautoqueryDevices } from './types/user.app.types';
import { ActiveDevice } from './types/modified.types';

export const DOMautoquery = {
  devices: (_devices: DOMautoqueryDevices) => {
    //-----------------------
    // Use breakpoint watcher
    //-----------------------
    breakpointsWatcher(_devices, (activeDevice: ActiveDevice) => {
      console.clear();
      console.log('Active Device:', activeDevice);
    });
  },
};
