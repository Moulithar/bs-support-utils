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
