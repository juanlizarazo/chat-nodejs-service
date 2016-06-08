# chat-nodejs-sevice by Juan Lizarazo

## Stack overview

service: node, npm, docker, expressjs, socket.io
web-ui: html/css/jquery

## How to run

### Easy

You need Docker and node/npm

Run with docker:

    # Build image
    npm run docker:build

    # Run
    npm run docker

    # For dev (mount volume) and run with nodemon
    npm run docker:mount

### Easier

You need node 4.4.x

    npm install

    # For dev
    nodemon

    # For prod
    npm start

Then visit localhost:8080

Status sample resource
localhost:8080/v1/status

### Resources ...

... I used to speed things up and make this a 3 hour
project:

[socket.io](http://socket.io/get-started/)
[ui html template](https://codepen.io/Varo/pen/gbZzgr)
