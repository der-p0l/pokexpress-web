FROM node:16.17.1-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install -g concurrently
RUN chown -R 1000:1000 "/root"

# Copy host files to container
COPY . .

# Expose port
EXPOSE 8080

CMD ["npm","run","dev"]
