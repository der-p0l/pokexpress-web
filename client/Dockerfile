FROM node:16.17.1-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

# Copy host files to container
COPY . .

# Expose port
EXPOSE 3000

CMD ["npm","start"]
