
# User guide: Package installation, setup and usage

The **@build-in-blocks/dom.autoquery** package provides HTML attributes that work like commands, providing clear instructions for dynamically swapping, adding and/or removing elements from the DOM on page load and on resize.

#

### User installation instructions

User installation and setup instructions can in the [root README.md](https://github.com/build-in-blocks/dom.autoquery).

#

### User guide extension

More info on **@build-in-blocks** framework libraries in general can be found at: https://github.com/build-in-blocks/.github/wiki/Repo-User-Guide-Extension

#

### Media query `unit` default and changing to your preferred unit

The `unit` property can have any of the 3 values `px`, `em` or `rem`. When the `unit` property is not specified, the value is set to `px` by default (i.e. if your preferred media query unit is `px`, then you don't need to add the `unit` property).

Here's an example where the preference is the `em` unit:


````ts
import { DOMautoquery } from '@build-in-blocks/dom.autoquery';

DOMautoquery.devices({
  //-------------
  // Specify unit
  //-------------
  unit: 'em',
  //-------------------------------------------------------
  // Specify as little or as much device sizes as you need.
  // Update the sizes (names & startpoints) as you see fit.
  //-------------------------------------------------------
  sizes: {
    1: { name: 'small', startPoint: 0},
    2: { name: 'medium', startPoint: 48 },
    3: { name: 'large', startPoint: 64 },
    4: { name: 'xLarge', startPoint: 80 },
    5: { name: 'xxLarge', startPoint: 100 },
  },
});
````

#

### Swaping `_replaceref` and `_refelem` elements

Syntax:

````html
<div _refelem="refElemUniqueNameID">Sibling element 1</div>
<div _replaceref="refElemUniqueNameID" _atsize="1">Sibling element 2</div>
````

There are other device size attribute types apart from `_atsize`. See table below:

<table>
  <tr>
    <th>Device size attribute type</th>
    <th>Example code usage</th>
  </tr>
  <tr>
    <td><code>_atsize</code></td>
    <td>

````html
<div _replaceref="refElemUniqueNameID" _atsize="1">Sibling element 2</div>
````
</td>
  </tr>
    <tr>
    <td><code>_uptosize</code></td>
    <td>

````html
<div _replaceref="refElemUniqueNameID" _uptosize="2">Sibling element 2</div>
````
</td>
  </tr>
  </tr>
    <tr>
    <td><code>_fromsize</code></td>
    <td>

````html
<div _replaceref="refElemUniqueNameID" _fromsize="2">Sibling element 2</div>
````
</td>
  </tr>
  </tr>
    <tr>
    <td><code>_withinsizerange</code></td>
    <td>

````html
<div _replaceref="refElemUniqueNameID" _withinsizerange="2-4">Sibling element 2</div>
````
</td>
  </tr>
</table>


#

### Swaping `_replacesibling` and `_refelem` elements

Syntax:

````html
<div _refelem="refElemUniqueNameID">Sibling element 1</div>
<div _replacesibling="refElemUniqueNameID" _atsize="1">Sibling element 2</div>
````

There are other device size attribute types apart from `_atsize`. See table below:

<table>
  <tr>
    <th>Device size attribute type</th>
    <th>Example code usage</th>
  </tr>
  <tr>
    <td><code>_atsize</code></td>
    <td>

````html
<div _replacesibling="refElemUniqueNameID" _atsize="1">Sibling element 2</div>
````
</td>
  </tr>
    <tr>
    <td><code>_uptosize</code></td>
    <td>

````html
<div _replacesibling="refElemUniqueNameID" _uptosize="2">Sibling element 2</div>
````
</td>
  </tr>
  </tr>
    <tr>
    <td><code>_fromsize</code></td>
    <td>

````html
<div _replacesibling="refElemUniqueNameID" _fromsize="2">Sibling element 2</div>
````
</td>
  </tr>
  </tr>
    <tr>
    <td><code>_withinsizerange</code></td>
    <td>

````html
<div _replacesibling="refElemUniqueNameID" _withinsizerange="2-4">Sibling element 2</div>
````
</td>
  </tr>
</table>
