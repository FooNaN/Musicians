FROM node:12-alpine
COPY . .
RUN yarn global add @nestjs/cli
RUN yarn install --production
RUN yarn build
