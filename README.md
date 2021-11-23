# Form Attributes

This project contains script for form attribute handling :


## How to start

The quickest way to start developing a new project is by [creating a new repository from this template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

After that, open the new repository in your terminal and install the NPM packages by running:

```bash
npm install
```

To build the files, you have two defined scripts:

- `npm run build`: Will build to the production directory (`dist`).
- `npm run dev`: Will build to your custom directory, if defined (check [Setting up a custom build directory](#setting-up-a-custom-build-directory) for more info).

## Setting up a custom build directory

By default, the output of the build files is set to the `dist` folder (check `bin/build.js`), but you can define a custom output directory for development purposes.

To do so, create a `.env` file that contains a `CUSTOM_BUILD_DIRECTORY` key. You can check `.env.example` for an example.
