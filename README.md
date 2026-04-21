# @build-in-blocks/dom.autoquery

> [!NOTE]  
> Not yet on NPM. To be released in the current sprint's release window i.e. **April 13 - April 26, 2026**. The code and documentation should have been merged by then for you to access.
>
> You can follow the progress through the ongoing pull request, or via the release & sprint planning tab of this GitHub project board: https://github.com/orgs/build-in-blocks/projects/2/views/6

#

![Latest Version](https://img.shields.io/npm/v/@build-in-blocks/dom.autoquery.svg?label=latest&color=brightgreen&style=flat-square) ![NPM Downloads](https://img.shields.io/npm/d18m/%40build-in-blocks%2Fdom.autoquery?color=blue&label=downloads%20(last%2018%20months)) ![build passing](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square&label=Blocks%20CI)

[![License: AGPL v3.0](https://img.shields.io/badge/license-AGPL%20v3.0-blue.svg?style=flat-square)](https://www.gnu.org/licenses/agpl-3.0) [![All Contributors](https://img.shields.io/github/all-contributors/build-in-blocks/dom.autoquery?color=ee8449&style=flat-square)](#contributors) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/build-in-blocks/dom.autoquery/blob/develop/docs.contributors/README.md)

#

**Built with:** Node.js v24.0.2

#

**Supported Node.js versions:** Node.js v20.x, v22.x, v24.x and v25.x - Monitored by central Blocks CI from [@build-in-blocks/dev.setup](https://www.npmjs.com/package/@build-in-blocks/dev.setup)

#

**Overview:** TODO - Add overview.

#

**Description:** TODO - Add description.

#

**User guide:** See [docs.users README.md](https://github.com/build-in-blocks/dom.autoquery/blob/develop/docs.users/README.md)

#

**Contributor guide:** See [docs.contributors README.md](https://github.com/build-in-blocks/dom.autoquery/blob/develop/docs.contributors/README.md)

#

**Run into any issues?** Report them via our [product issue reports repo](https://github.com/build-in-blocks/product-issue-reports/issues)

#

### Quick installation & usage guide

#### 1. Main package installation

- Install and setup [@build-in-blocks/dev.build](https://www.npmjs.com/package/@build-in-blocks/dev.build) and [@build-in-blocks/dev.setup](https://www.npmjs.com/package/@build-in-blocks/dev.setup) in your typescript web app project.

- Install our dom autoquery package as a `devDependency` in your typescript web app project:

  ````
  npm install -D @build-in-blocks/dom.autoquery --save-exact
  ````

#### 2. Do I need to install `typescript`?

Since you are to use both this library and [@build-in-blocks/dev.build](https://www.npmjs.com/package/@build-in-blocks/dev.build) together in your project, you don't need to install `typescript` in your project (the **@build-in-blocks/dev.build** library already does that internally, relative to your project).

See `typescript` table in the general guide for more information: [Typescript compatibility and usage](https://github.com/build-in-blocks/.github/wiki/Repo-User-Guide-Extension#table-typescript-compatibility-and-usage).

#### 3. TODO: Add DOM.autoquery usage

TODO: Add usage example

<!-- 

#### 3. Initialize `dom.autoquery` devices

In your `index.ts` file (or whatever your app's entry point `.ts` file is named), import the `DOMautoquery` object, call and use the `.devices` method to specify the range of device sizes that you want your app to cater for.

For example:

````
import { DOMautoquery } from '@build-in-blocks/dom.autoquery';

DOMautoquery.devices({
    unit: 'px',
    sizes: {
        1: { name: 'mobile', startPoint: 0},
        2: { name: 'tablet', startPoint: 768 },
        3: { name: 'desktop', startPoint: 1024 },
        4: { name: 'wide', startPoint: 1280 },
        5: { name: 'ultraWide', startPoint: 1600 },
    }
});
````

#### 4. Use the "HTML attribute command" that you need

For example, copy this code and add it in your `index.html`. Then resize your web browser to see the html element swap take place.

````
<header>
  <nav _refelem="navElem">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <button _replacesibling="navElem" _uptosize="2">&#9776</button>
</header>
````

> [!NOTE]  
> Visit the user guide link (towards the top  👆🏽 of this README) to see the full list of HTML attribute commands available, and why we recommend using this library together with the **@build-in-blocks/dev.build** library.

-->


#

### Contributors

Thanks to these amazing contributors to the **@build-in-blocks/dom.autoquery** project. This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. See [emoji key](https://allcontributors.org/docs/en/emoji-key). Contributions of any kind welcome!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/Ifycode"><img src="https://avatars.githubusercontent.com/u/45185388?v=4?s=100" width="100px;" alt="Mary @Ifycode"/><br /><sub><b>Mary @Ifycode</b></sub></a><br /><a href="https://github.com/build-in-blocks/dom.autoquery/commits?author=ifycode" title="Code">💻</a> <a href="https://github.com/build-in-blocks/dom.autoquery/commits?author=ifycode" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/apps/allcontributors"><img src="https://avatars.githubusercontent.com/in/23186?v=4?s=100" width="100px;" alt="allcontributors[bot]"/><br /><sub><b>allcontributors[bot]</b></sub></a><br /><a href="#tool-allcontributors[bot]" title="Tools">🔧</a> <a href="https://github.com/build-in-blocks/dom.autoquery/commits?author=allcontributors[bot]" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
