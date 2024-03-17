FROM node:16.17.1-alpine

# Install OS dependencies
RUN apk add rsync

# Create tmp directory (if it doesn't already exists)
RUN mkdir -p /tmp
WORKDIR /tmp

# Install dependencies
COPY package*.json ./

RUN npm install

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy files to container
COPY . .

# Expose port
EXPOSE 3000

ENTRYPOINT [ "/app/entrypoint.sh" ]
