
# Contributor guide: Installation instructions for code contributors

Code contributors to **@build-in-blocks/dom.autoquery** repository should use this document as a reference guide, to setup this library locally during development.

#

### Community Code of Conduct

Read our code of conduct before you start contributing: https://resources.collabocate.community/contribute/code-of-conduct

#

### Prerequisites

Regardless of work experience level, interested code contributors must first complete the [Git & GitHub Workflow Series by **@collabocate-osc**](https://github.com/orgs/collabocate-osc/discussions?discussions_q=is%3Aopen+label%3A%22topic%3A+git+%26+github+collab%22), before making an attempt to work on issue tickets from **@build-in-blocks** repositories and project board.


#

### Project board

Find issue tickets to work on through our project board: https://github.com/orgs/build-in-blocks/projects/2

#

### Library compatiblity

Compatible `Node.js` version(s) have been specified in the [root README.md](https://github.com/build-in-blocks/dom.autoquery) of this repository.

#

### Local development instructions

#### Fork and clone this repo

Follow the instructions to fork and clone this repository locally unto your computer from here: https://github.com/build-in-blocks/.github/wiki/Repo-Contributor-Guide-Extension

#### Install dependencies and run project locally

- **Folder structure:** On your computer, create a new parent folder or go to an existing folder that you will like to be the parent, for both this library and your typescript web app. Make sure your cloned `dom.autoquery` repo folder and your typescript web app are inside the parent folder, so that the structure looks like this:

    ````
    PARENT-FOLDER/
    ├── dom.autoquery/
    └── your-typescript-web-app/
    ````

- **For library:** Open a terminal specifically for the library, cd into the root of the library folder and run the following script commands.

    Install dependencies:

    ```
    npm install
    ```

    Link library:

    ```
    npm link
    ```

- **For your typescript web app:** Open a terminal specifically for your typescript web app, cd into the root of your typescript web app.
    - **Step 1:** First install the npm dependencies in your typescript web app.
    - **Step 2:** Add this to your typescript web app's package.json dependencies (take note incase library version changes in the future: use the exact version number in the `@build-in-blocks/dom.autoquery` library's `package.json`. At the time of writing, it is 1.0.0):

        ```
        "@build-in-blocks/dom.autoquery": "1.0.0"
        ```

        Link your app to the library:

        ```
        npm link ../dom.autoquery
        ```

    - **Step 3:** Follow the usage instructions in the [root README.md](https://github.com/build-in-blocks/dom.autoquery), not from the beginning though; start from the **2. Do I need to install `typescript`?** section (and continue till the end).

#

### Contributors

List of awesome people who contributed to this project can be found in the [root README.md](https://github.com/build-in-blocks/dom.autoquery). 
