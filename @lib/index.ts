import { breakpointsWatcher } from '@_watcher/breakpoints.watcher';
//-
import { initializeSiblingSwap, performSiblingSwap } from '@_queries/replacesibling';
//-
import { deviceSizeAttributeTypes } from '@_helpers/var.derived';
//-
import { ActiveDevice } from '@_types/modified.types';
import { DOMautoqueryDevices } from '@_types/user.app.types';

const initAllSiblingSwaps = () => {
  deviceSizeAttributeTypes.forEach((deviceSizeAttributeType) => {
    initializeSiblingSwap({ deviceSizeAttributeType });
  });
};

// ----------------------------------
// Initialize swaps when DOM is ready
// ----------------------------------
const initBeforeWatch = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      //-----------------------
      // Initialize all systems
      //-----------------------
      initAllSiblingSwaps();
    });
  } else {
    initAllSiblingSwaps();
  }
};

export const DOMautoquery = {
  devices: async (_devices: DOMautoqueryDevices) => {
    //---------------------------------
    // Intial element swap on page load
    //---------------------------------
    initBeforeWatch();
    //-----------------------
    // Use breakpoint watcher
    //-----------------------
    breakpointsWatcher(_devices, (activeDevice: ActiveDevice) => {
      console.clear();
      console.log('Active Device:', activeDevice);

      deviceSizeAttributeTypes.forEach((deviceSizeAttributeType) => {
        performSiblingSwap({ activeDevice, deviceSizeAttributeType });
      });
    });
  },
};
