FROM node:12-alpine as build
WORKDIR /app
COPY . .
RUN yarn install --production
RUN yarn build
