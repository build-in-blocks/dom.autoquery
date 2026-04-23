
# User guide: Package installation, setup and usage

The **@build-in-blocks/dom.autoquery** package provides HTML attributes that work like commands, providing clear instructions for adding and removing elements from the DOM, on page load and resize.

#

### User installation instructions

User installation and setup instructions can in the [root README.md](https://github.com/build-in-blocks/dom.autoquery).

#

### User guide extension

More info on **@build-in-blocks** framework libraries in general can be found at: https://github.com/build-in-blocks/.github/wiki/Repo-User-Guide-Extension

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
