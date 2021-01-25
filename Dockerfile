FROM node:alpine as builder

WORKDIR '/usr/src/app'

COPY package.json ./

# RUN npm install webpack
RUN npm install

COPY ./ ./

RUN npm run build

# nginx base 
FROM nginx

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html