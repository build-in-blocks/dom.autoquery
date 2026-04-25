import { breakpointsWatcher } from '@_watcher/breakpoints.watcher';
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
          (async () => {
            const { initializeRefSwap } = await import(
              /* webpackChunkName: "autoq.init._rr" */
              /* webpackExclude: /\.d\.ts$/ */
              '@_queries/replaceref.init'
            );
            //-
            initializeRefSwap({ _instructionAttribute: instructionAttribute.replaceRef, activeDevice, deviceSizeAttributeType });
          })();
          //-
          (async () => {
            const { initializeSiblingSwap } = await import(
              /* webpackChunkName: "autoq.init._rs" */
              /* webpackExclude: /\.d\.ts$/ */
              '@_queries/replacesibling.init'
            );
            //-
            initializeSiblingSwap({ _instructionAttribute: instructionAttribute.replaceSibling, activeDevice, deviceSizeAttributeType });
          })();
        });
      });
      //-
      deviceSizeAttributeTypes.forEach((deviceSizeAttributeType) => {
        (async () => {
          const { performRefSwap } = await import(
            /* webpackChunkName: "autoq.swap._rr" */
            /* webpackExclude: /\.d\.ts$/ */
            '@_queries/replaceref.swap'
          );
          //-
          performRefSwap({ on: 'pageResize', _instructionAttribute: instructionAttribute.replaceRef, activeDevice, deviceSizeAttributeType });
        })();
        //-
        (async () => {
          const { performSiblingSwap } = await import(
            /* webpackChunkName: "autoq.swap._rs" */
            /* webpackExclude: /\.d\.ts$/ */
            '@_queries/replacesibling.swap'
          );
          //-
          performSiblingSwap({ on: 'pageResize', _instructionAttribute: instructionAttribute.replaceSibling, activeDevice, deviceSizeAttributeType });
        })();
      });
    });
  },
};
