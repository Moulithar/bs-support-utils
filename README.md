# bs-support-utils(Bootstrap Support Utilities)
"bs-support-utils extends Bootstrap with additional CSS classes for cursor, padding, margin, gaps, and sizing. Offering fine-grained styling control beyond Bootstrap's core utilities."

[![npm version](https://badge.fury.io/js/bs-support-utils.svg)](https://badge.fury.io/js/bs-support-utils)
## Features

- **Cursor Utilities**: Adds cursor-pointer and other cursor-related utility classes missing in Bootstrap.
- **Padding Utilities (Pixels)**: Offers padding utility classes from `p-px-1` to `p-px-100`, providing more options than Bootstrap's `p-1` to `p-5` (which are in rem units).
- **Extended Utilities**: Future releases will include padding in percentage (`p-pr-1` to `p-pr-100`), margin utilities from `m-px-1` to `m-px-100` and `m-pr-1` to `m-pr-100`, gap properties, and width and height utilities ranging from 1 to 100, significantly extending Bootstrap's `w-25`, `w-50`, `w-75`, and `w-100`.

## Installation
To include `bootstrap-support-utilities` in your project, run:

```bash
npm install bs-support-utils
```
Or if you prefer using Yarn:
```bash
yarn add bs-support-utils
```

## Usage
  After installation, import the CSS file into your project **(app.js or index.js)** to start using the utilities:
```bash
@import 'bs-support-utils/index.css';   

```
Now, you can use the utility classes in your HTML. For example:

```bash
<div class="cursor-pointer">Hover over me!</div>
<div class="p-px-50">This div has 50 pixels of padding.</div>
<div class="m-px-20">This div has 20 pixels of margin.</div>
<div class="w-pr-50">This div has a width of 50%.</div>
<div class="h-pr-75">This div has a height of 75%.</div>

```
## Table of Contents

### version 1
- **sizing** 
| Utilities | Description                                                      |
|-----------|------------------------------------------------------------------|
| p-px-25   |  PADDING : set padding to 25 pixels                              |
| m-px-25   |   MARGIN : sets margin to 25 pixels                              |
| g-px-25   |   GAP : sets gap to 25 pixels                                    |
| h-pr-25   |   HEIGHT : sets height to 25 percentage                          |
| w-pr-25   |   WIDTH : sets width to 25 percentage                            |

- **cursor**
| Cursor Class         | Description                                       |
|----------------------|---------------------------------------------------|
| `cursor-pointer`    | Sets the cursor to a pointer (hand) icon.        |
| `cursor-help`       | Sets the cursor to a help icon.                  |
| `cursor-wait`       | Sets the cursor to a wait (hourglass) icon.      |
| `cursor-text`       | Sets the cursor to an I-beam, indicating text.   |
| `cursor-not-allowed`| Sets the cursor to a not-allowed symbol.         |
| `cursor-move`       | Sets the cursor to a move icon (crosshair with arrows). |
| `cursor-crosshair`  | Sets the cursor to a crosshair.                  |
| `cursor-zoom-in`    | Sets the cursor to indicate zooming in.          |
| `cursor-zoom-out`   | Sets the cursor to indicate zooming out.         |
| `cursor-grab`       | Sets the cursor to a grab hand (useful for drag and drop interfaces). |
| `cursor-grabbing`   | Sets the cursor to indicate something is being grabbed/dragged. |
| `cursor-default`    | Resets the cursor to the default icon.           |


### version 2

### Version 2

| Utilities     | Description                                                      |
|---------------|------------------------------------------------------------------|
| `line-clamp-1` | Makes the text content in a div collapse to a single line using ellipsis if it exceeds the div's width. |





### Pixel Terms

- **p-px-10**:"p" represents padding.(padding: 10px)
- **m-px-10**:"m" represents margin.(margin: 10px)
- **gap-px-10**:"gap" represents gap.(gap: 10px)


### Percentage Terms

- **w-pr-10**:"w" represents width.(width: 10%)
- **h-pr-10**:"h" represents height.(heihgt: 10%)

## Contributing
Contributions to bootstrap-support-utilities are welcome! If you have a suggestion or want to contribute more utilities, please feel free to submit a pull request or open an issue.

## License
This project is licensed under the [MIT License](https://github.com/Moulithar/bootstrap-support-utilities?tab=MIT-1-ov-file#readme)
