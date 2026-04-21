export const DOMautoquery = {
  quickTest: async () => {
    const { dummyConsole } = await import(
      /* webpackChunkName: "dummy-1.console" */
      /* webpackExclude: /\.d\.ts$/ */
      './dummy-1/console'
    );
    dummyConsole();

    const { dummyExample } = await import(
      /* webpackChunkName: "dummy-2.example" */
      /* webpackExclude: /\.d\.ts$/ */
      './dummy-2/example'
    );
    dummyExample();
  },
};
