FROM node:10-alpine as tomatoro-build
LABEL maintainer="tonymtz <hello@tonymtz.com>"
WORKDIR /app
COPY . .
RUN npm install || true
RUN npm run build

FROM nginx:alpine
COPY --from=tomatoro-build /app/build /usr/share/nginx/html
