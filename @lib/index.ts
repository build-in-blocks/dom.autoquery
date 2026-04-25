import { breakpointsWatcher } from '@_watcher/breakpoints.watcher';
//-
import { initializeRefSwap } from '@_queries/replaceref.init';
import { performRefSwap } from '@_queries/logic.swap';
//-
import { deviceSizeAttributeTypes } from '@_helpers/var.derived';
//-
import { ActiveDevice } from '@_types/modified.types';
import { DOMautoqueryDevices } from '@_types/user.app.types';

export const DOMautoquery = {
  devices: (_devices: DOMautoqueryDevices) => {
    //--------------------------------------------------------
    // Use breakpoint watcher | Watch on page load & on resize
    //--------------------------------------------------------
    breakpointsWatcher(_devices, (activeDevice: ActiveDevice) => {
      document.addEventListener('DOMContentLoaded', () => {
        deviceSizeAttributeTypes.forEach((deviceSizeAttributeType) => {
          initializeRefSwap({ activeDevice, deviceSizeAttributeType });
        });
      });
      //-
      deviceSizeAttributeTypes.forEach((deviceSizeAttributeType) => {
        performRefSwap({ on: 'pageResize', activeDevice, deviceSizeAttributeType });
      });
    });
  },
};
