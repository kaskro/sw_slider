# Slider

Slider component for web application used on mobile and desktop.

## Installation

Create a folder and initialize git:

```bash
git init
```

Then use git to pull project from [https://github.com/kaskro/sw_slider.git](https://github.com/kaskro/sw_slider.git):

```bash
git pull https://github.com/kaskro/sw_slider.git
```

After that, you need to use [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install dependencies:

```bash
npm install
```

When dependencies are installed, you can start using the slider:

## Usage

To test project in development server, use command:

```bash
npm start
```

To build project, use command:

```bash
npm run build
```

You need to provide content to slider using "data" props.

"data" prop MUST be array of objects, that has field "content" and value can be any HTML code or just plain text.

Example of data array:

```javascript
 data = [
     { content: <div>First slide content</div> }
     { content: <div>Second slide content</div> }
     { content: <div>Third slide content</div> }
 ]
```

To add a slider component to dom:

```javascript
import React from "react";
import ReactDom from "react-dom";
import Slider from "./components/slider";

ReactDom.render(
  <Slider
    data={[
      { content: <div>None</div> },
      { content: <div>Some</div> },
      { content: <div>None</div> },
    ]}
  />,
  document.getElementById("app")
);
```
