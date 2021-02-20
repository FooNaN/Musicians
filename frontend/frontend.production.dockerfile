# build environment
FROM node:12-alpine as build
COPY . .
RUN yarn install --production
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
