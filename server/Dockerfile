#  Dockerfile for Node Express Backend api (development)

FROM node:16.17.1-alpine

# ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install

RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install -g concurrently
RUN chown -R 1000:1000 "/root"

# Copy app source code
COPY . .

# Exports
EXPOSE 8080

CMD ["npm","run","dev"]
