import { breakpointsWatcher } from '@_watcher/breakpoints.watcher';
//-
import { initializeRefSwap } from '@_queries/replaceref.init';
import { initializeSiblingSwap } from '@_queries/replacesibling.init';
import { performRefSwap } from '@_queries/replaceref.swap';
import { performSiblingSwap } from '@_queries/replacesibling.swap';
//-
import { instructionAttribute } from '@_helpers/var.root';
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
          initializeRefSwap({ _instructionAttribute: instructionAttribute.replaceRef, activeDevice, deviceSizeAttributeType });
          initializeSiblingSwap({ _instructionAttribute: instructionAttribute.replaceSibling, activeDevice, deviceSizeAttributeType });
        });
      });
      //-
      deviceSizeAttributeTypes.forEach((deviceSizeAttributeType) => {
        performRefSwap({ on: 'pageResize', _instructionAttribute: instructionAttribute.replaceRef, activeDevice, deviceSizeAttributeType });
        performSiblingSwap({ on: 'pageResize', _instructionAttribute: instructionAttribute.replaceSibling, activeDevice, deviceSizeAttributeType });
      });
    });
  },
};
