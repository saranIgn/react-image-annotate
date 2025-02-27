# React Image Annotate

[![npm version](https://img.shields.io/npm/v/@saran-ign/react-image-annotate.svg)](https://www.npmjs.com/package/@saran-ign/react-image-annotate)

Fork of react-image-annotate - The best image/video annotation tool
ever. [Check out the demo here](https://universaldatatool.github.io/react-image-annotate/). Or
the [code sandbox here](https://codesandbox.io/s/react-image-annotate-example-38tsc?file=/src/App.js:0-403).

Implemented features in fork:

- added typescript
- updated react to v.18

## Features

- Simple input/output format
- Bounding Box, Point and Polygon Annotation
- Zooming, Scaling, Panning
- Multiple Images
- Cursor Crosshair

![Screenshot of Annotator](https://user-images.githubusercontent.com/1910070/51199716-83c72080-18c5-11e9-837c-c3a89c8caef4.png)

## Usage

`npm i @saran-ign/react-image-annotate`

```javascript
import React from "react";
import ReactImageAnnotate from "@saran-ign/react-image-annotate";

const App = () => (
  <ReactImageAnnotate
    onExit={() => {
            console.log("exit");
          }}
    regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
    regionTagList={["tag1", "tag2", "tag3"]}
    images={[
      {
        src: "https://placekitten.com/408/287",
        name: "Image 1",
        regions: []
      }
    ]}
  />
);

export default App;

```

To get the proper fonts, make sure to import the Inter UI or Roboto font, the
following line added to a css file should suffice.

```css
@import url("https://rsms.me/inter/inter.css");
```

## Props

All of the following properties can be defined on the Annotator...

| Prop                       | Type (\* = required)                                    | Description                                                                                                                                                   | Default       |
|----------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `taskDescription`          | \*`string`                                              | Markdown description for what to do in the image.                                                                                                             |               |
| `allowedArea`              | `{ x: number, y: number, w: number, h: number }`        | Area that is available for annotation.                                                                                                                        | Entire image. |
| `regionTagList`            | `Array<string>`                                         | Allowed "tags" (mutually inclusive classifications) for regions.                                                                                              |               |
| `regionClsList`            | `Array<string>`                                         | Allowed "classes" (mutually exclusive classifications) for regions.                                                                                           |               |
| `regionTagSingleSelection` | `boolean`                                               | Allowed select only one tag for image.                                                                                                                        |               |
| `regionAllowedActions`     | `{remove?:boolean, lock?:boolean, visibility?: boolean` | Allowed actions for region in regions list.                                                                                                                   | Everything.   |
| `imageTagList`             | `Array<string>`                                         | Allowed tags for entire image.                                                                                                                                |               |
| `imageClsList`             | `Array<string>`                                         | Allowed classes for entire image.  

| `classificationTitle`             |`<string>`                                         | Allowed classes for entire image.                                                                                                                             |               |
| `enabledTools`             | `Array<string>`                                         | Tools allowed to be used. e.g. "select", "create-point", "create-box", "create-polygon"                                                                       | Everything.   |
| `showTags`                 | `boolean`                                               | Show tags and allow tags on regions.                                                                                                                          | `true`        |
| `selectedImage`            | `string`                                                | URL of initially selected image.                                                                                                                              |               |
| `images`                   | `Array<Image>`                                          | Array of images to load into annotator                                                                                                                        |               |
| `showPointDistances`       | `boolean`                                               | Show distances between points.                                                                                                                                | `false`       |
| `pointDistancePrecision`   | `number`                                                | Precision on displayed points (e.g. 3 => 0.123)                                                                                                               |               |
| `onExit`                   | `MainLayoutState => any`                                | Called when "Save" is called.                                                                                                                                 |               |
| `RegionEditLabel`          | `Node`                                                  | React Node overriding the form to update the region (see [`RegionLabel`](https://github.com/waoai/react-image-annotate/blob/master/src/RegionLabel/index.js)) |               |
| `allowComments`            | `boolean`                                               | Show a textarea to add comments on each annotation.                                                                                                           | `false`       |
| `hidePrev`                 | `boolean`                                               | Hide `Previous Image` button from the header bar.                                                                                                             | `false`       |
| `hideNext`                 | `boolean`                                               | Hide `Next Image` button from the header bar.                                                                                                                 | `false`       |
| `hideClone`                | `boolean`                                               | Hide `Clone` button from the header bar.                                                                                                                      | `false`       |
| `hideSettings`             | `boolean`                                               | Hide `Settings` button from the header bar.                                                                                                                   | `false`       |
| `hideFullScreen`           | `boolean`                                               | Hide `FullScreen/Window` button from the header bar.                                                                                                          | `false`       |
| `hideSave`                 | `boolean`                                               | Hide `Save` button from the header bar.                                                                                                                       | `false`       |

## Developers
Change theme :  localStorage.setItem("_annotate_bgColor", "black")
### Development

This project uses [react-storybook](https://storybook.js.org/). To begin developing run the following commands in the
cloned repo.

1. `yarn install`
2. `yarn add react react-dom`
3. For production build need remove `react` and `react-dom` packages and
   run `yarn build` - it fix the issue with `react` and `react-dom` versions in your project.

A browser tab will automatically open with the project components.

See more details in
the [contributing guidelines](https://github.com/waoai/react-image-annotate/wiki/Setup-for-Development).

### Icons

Consult these icon repositories:

- [Material Icons](https://material.io/tools/icons/)
- [Font Awesome Icons](https://fontawesome.com/icons?d=gallery&m=free)
