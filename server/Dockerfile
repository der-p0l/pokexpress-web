FROM node:16.17.1-alpine

# Install OS dependencies
RUN apk add dumb-init
RUN apk add rsync

# Create tmp directory (if it doesn't already exists)
RUN mkdir -p /tmp
WORKDIR /tmp

# Install dependencies
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
RUN npm install -g ts-node

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy files to container
COPY . .

# Expose port
EXPOSE 8000

ENTRYPOINT [ "/app/entrypoint.sh" ]
