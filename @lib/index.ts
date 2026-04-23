import { breakpointsWatcher } from '@_watcher/breakpoints.watcher';
import { initBeforeWatch } from '@_watcher/init.before.watcher';
//-
import { deviceSizeAttributeTypes } from '@_helpers/var.derived';
//-
import { ActiveDevice } from '@_types/modified.types';
import { DOMautoqueryDevices } from '@_types/user.app.types';

export const DOMautoquery = {
  devices: (_devices: DOMautoqueryDevices) => {
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
        (async () => {
          const { performSiblingSwap } = await import(
            /* webpackChunkName: "autoq._rs" */
            /* webpackExclude: /\.d\.ts$/ */
            '@_queries/replacesibling.swap'
          );
          //-
          performSiblingSwap({ activeDevice, deviceSizeAttributeType });
        })();
      });
    });
  },
};
