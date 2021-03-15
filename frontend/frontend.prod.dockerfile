FROM node:12-alpine
WORKDIR /home/frontend
COPY . .
RUN yarn install --production
RUN yarn build
