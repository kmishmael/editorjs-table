# NOTE

This is a Fork of the original [@editorjs/table](https://github.com/editor-js/table) with slight changes to the output. I needed to store the output data in [Firestore](https://www.google.com/aclk?sa=l&ai=DChcSEwiZzZGJvtL5AhXLnXcKHTURCoQYABAAGgJlZg&sig=AOD64_2PImJaXl2nQiDs5QTvVdDw451rpg&q&adurl&ved=2ahUKEwim8YmJvtL5AhWGg_0HHSUzBncQ0Qx6BAgCEAE). However, Firestore does not support multidimensional data. This solves the problem by providing output as an Object.
So, if you have no problem with the nature of the output, multidimensional array, I would strongly recommend that
you stick with original package.

# Table tool

The Table Block for the [Editor.js](https://editorjs.io). Finally improved.

![](https://capella.pics/41294cec-a2b3-4157-8399-ffefed3d8ffd.jpg)

## Installation

Get the package

```shell
npm i --save @editorjs/table
```

or

```shell
yarn add @editorjs/table
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
import Table from "@editorjs/table";

var editor = EditorJS({
  tools: {
    table: Table,
  },
});
```

Or init the Table tool with additional settings

```javascript
var editor = EditorJS({
  tools: {
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
      },
    },
  },
});
```

## Config Params

| Field  | Type     | Description                               |
| ------ | -------- | ----------------------------------------- |
| `rows` | `number` | initial number of rows. `2` by default    |
| `cols` | `number` | initial number of columns. `2` by default |

## Output data

This Tool returns `data` in the following format

| Field          | Type         | Description                     |
| -------------- | ------------ | ------------------------------- |
| `withHeadings` | `boolean`    | Uses the first line as headings |
| `content`      | `object{}{}` | object with table contents      |

```json
{
  "type" : "table",
  "data" : {
    "withHeadings": true,
    "content" : { "0": { "0": "Kine", "1": "Pigs", "2": "Chicken" }, "1": { "0": "1 pcs", "1": "3 pcs", "2": "12 pcs" }, "2": { "0": "100$","1" "200$", "2": "150$" } }
  }
}
```

# Support maintenance 🎖

If you're using this tool and editor.js in your business, please consider supporting their maintenance and evolution.

[http://opencollective.com/editorjs](http://opencollective.com/editorjs)

# About CodeX

<img align="right" width="120" height="120" src="https://codex.so/public/app/img/codex-logo.svg" hspace="50">

CodeX is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are [open](https://codex.so/join) for young people who want to constantly improve their skills and grow professionally with experiments in leading technologies.

| 🌐                           | Join 👋                                | Twitter                                      | Instagram                                      |
| ---------------------------- | -------------------------------------- | -------------------------------------------- | ---------------------------------------------- |
| [codex.so](https://codex.so) | [codex.so/join](https://codex.so/join) | [@codex_team](http://twitter.com/codex_team) | [@codex_team](http://instagram.com/codex_team) |
