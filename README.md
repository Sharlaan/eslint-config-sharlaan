# Shareable Eslint Config

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code.

## `sharlaan` config

it contains generic rules for all JS projects (back & front)

## `sharlaan/react` config

it extends `sharlaan` config and add JSX / React specific rules

## `sharlaan/vue` config

it extends `sharlaan` config and add JSX / Vue specific rules

## Usage

You can use `eslint` and a config based on `eslint-config-standard` to lint your code and `eslint-prettier` to format it.

Here is how you can set it up to easily get up and running:

```sh
yarn add -D eslint-config-sharlaan
```

Then, extend `sharlaan` or `sharlaan/react` or `sharlaan/vue` in your `.eslintrc` depending on the kind of projects you're working on.

```json
{ "extends": ["sharlaan"] }
# or
{ "extends": ["sharlaan/react"] }
# or
{ "extends": ["sharlaan/vue"] }
```

... and optionally you can add these scripts in your `package.json`:

```json
"scripts": {
  "lint": "eslint ./",
  "fmt": "prettier-eslint \"{./*@(.js|.jsx),./!(node_modules|build|dist)/**/*@(.js|.jsx)}\" --write"
}
```

Happy linting and formatting !
