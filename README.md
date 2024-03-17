# pokexpress-web

Personal project to test my skills with React.js and Express.js

## Prerequisites

- Have Docker and Docker Compose installed.

## Installation

1. Create the client's `.env` file with `cp client/.env.example client/.env`
2. Create the server's `.env` file with `cp server/.env.example server/.env`
3. Modify the `.env` files as you wish.

## Development

This is the correct configuration for developing this app:

1. Start the Docker containers with `docker compose -f docker-compose.yml -f docker-compose.dev.yml up`
2. To stop the running containers press _Ctrl+C_.

Alternatively, you can detach your terminal from the containers:

1. Start the Docker containers with `docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
2. To stop the running containers execute `docker compose -f docker-compose.yml -f docker-compose.dev.yml stop`

## Production

Not supported yet.

## Client Scripts

In the client directory (or Docker container), you can run:

### `npm run start`

Runs the app in development mode.
If you change a file the app will automatically restart.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

### Learn More

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## Server Scripts

In the server directory (or Docker container), you can run:

### `npm run build`

Builds the server's source code for production to the `dist` folder.

### `npm run start`

Runs the server with the current configuration, best for production.
You need to previously build the source code for this to work.

### `npm run dev`

Runs the server in watch mode, used for development.
If you change a file the server will automatically restart.
