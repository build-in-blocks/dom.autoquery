import { ActiveDevice } from '@_types/modified.types';
import { DOMautoqueryDevices } from '@_types/user.app.types';
import { breakpointsWatcher } from '@_watcher/breakpoints.watcher';

export const DOMautoquery = {
  devices: async (_devices: DOMautoqueryDevices) => {
    //-----------------------
    // Use breakpoint watcher
    //-----------------------
    breakpointsWatcher(_devices, (activeDevice: ActiveDevice) => {
      console.clear();
      console.log('Active Device:', activeDevice);
    });
  },
};
