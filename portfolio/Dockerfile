FROM node:18.13.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app/
RUN npm run build
CMD [ "npm", "start" ]
EXPOSE 80