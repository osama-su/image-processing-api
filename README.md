# Image Processing API

this project is a simple image processing API. It is mainly made for the purpose of learning and testing.
and for FWD Udacity Advanced Backend Developer Nanodegree.

# Introduction

It is a simple image processing API. that process stored images and resizes them.

# How to use it

## install dependencies

- use the the command `yarn` to install the dependencies.
- or use the command `npm install` to install the dependencies.

## Build the project

- use the command `yarn build` to build the project.
- or use the command `npm run build` to build the project.

## run the server

- use the command `yarn start` to run the server.
- or use the command `npm run start` to run the server.

## scripts

```json
"scripts": {
    "start": "tsc && nodemon build/index.js",
    "dev": "nodemon src/index.ts",
    "test": "tsc && jasmine",
    "build": "npx tsc",
    "lint": "eslint .",
    "lint:fix": "eslint --fix ",
    "format": "prettier --write './src/**/*.ts'"
  }
```

## endpoints

### /api/img/show

### /api/img/resize

accepts a query parameter `filename` , `width` and `height`

- shows the image with the given filename and resizes it to the given width and height.
- width and height are optional for /api/img/show.

## available images names

- `test`
- `fjord`
- `icelandwaterfall`
- `palmtunnel`
- `santamonica`
- `encenadaport`

### Example

- `/api/img/show?filename=test`
- `/api/img/resize?filename=test&width=100&height=100`
