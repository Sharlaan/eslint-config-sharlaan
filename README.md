# Shareable Eslint Config

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript code.

### `sharlaan` config

it contains generic rules for all JS projects (back & front)

### `sharlaan/react` config

it extends `sharlaan` config and add JSX / React specific rules

## Usage

We use `eslint` and a config based on `eslint-config-standard` to lint our code and `eslint-prettier` to format it.

Here is how you can set it up to easily get up and running:

```sh
yarn add --dev eslint-config-sharlaan eslint-plugin-import eslint-plugin-node eslint-plugin-promise babel-eslint eslint
```

Then, extend `sharlaan` or `sharlaan/react` in your `.eslintrc` depending on the kind of projects you're working on.
`sharlaan/react` extends `sharlaan` config so for mixed projects (React + SSR) `sharlaan/react` is enough.

```json
{ "extends": ["sharlaan"] }
```

or

```json
{ "extends": ["sharlaan/react"] }
```

## Going further

We also use `prettier-eslint-cli`

```
yarn add --dev prettier-eslint-cli
```

And setup helper script in our `package.json`:

```
"scripts": {
  "lint": "eslint ./",
  "fmt": "prettier-eslint \"{./*@(.js|.jsx),./!(node_modules|build|dist)/**/*@(.js|.jsx)}\" --write"
}
```

Happy hacking !
