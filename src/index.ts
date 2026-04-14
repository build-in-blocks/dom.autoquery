import { breakpointsWatcher } from './watcher/breakpoints.watcher';
import { DOMautoqueryDevices } from './types/user.app.types';
import { ActiveDevice } from './types/modified.types';

export const DOMautoquery = {
  devices: async (_devices: DOMautoqueryDevices) => {
    //-----------------------
    // Use breakpoint watcher
    //-----------------------
    breakpointsWatcher(_devices, (activeDevice: ActiveDevice) => {
      //   console.clear();
      console.log('Active Device:', activeDevice);
    });

    const { dummyConsole } = await import(
      /* webpackChunkName: "dummy.console" */
      /* webpackExclude: /\.d\.ts$/ */
      './dummy/console'
    );
    dummyConsole();

    const { dummyConsole2 } = await import(
      /* webpackChunkName: "another.dummy" */
      /* webpackExclude: /\.d\.ts$/ */
      './dummy/another'
    );
    dummyConsole2();
  },
};

// export const DOMautoquery = {
//   devices: async (_devices: DOMautoqueryDevices) => {
//     //-----------------------
//     // Use breakpoint watcher
//     //-----------------------
//     breakpointsWatcher(_devices, (activeDevice: ActiveDevice) => {
//       //   console.clear();
//       console.log('Active Device:', activeDevice);
//     });

//     // const { dummyConsole } = await import(
//     //     /* webpackChunkName: "dummy-console" */
//     //     /* webpackMode: "lazy" */
//     //     './dom.autoquery/console.js'
//     // );
//     // dummyConsole();

//     //     const { dummyConsole2 } = await import(
//     //   /* webpackChunkName: "another.dummy" */
//     //     /* webpackMode: "lazy" */
//     //   './dom.autoquery/another.js'
//     // );
//     // dummyConsole2();

//     const { dummyConsole } = await import(
//       /* webpackChunkName: "dummy.console" */
//       /* webpackExclude: /\.d\.ts$/ */
//       './dummy/console'
//     );
//     dummyConsole();

//     const { dummyConsole2 } = await import(
//       /* webpackChunkName: "another.dummy" */
//       /* webpackExclude: /\.d\.ts$/ */
//       './dummy/another'
//     );
//     dummyConsole2();
//   },
// };
