# Dockerfile for client

# Build react client
FROM node:16.17.1-alpine

# Working directory be app
WORKDIR /usr/app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]
