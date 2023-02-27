# Dockerfile
FROM node:alpine as builder

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY package*.json ./

# copy the app, note .dockerignore
RUN yarn
RUN yarn build
RUN yarn generate

COPY . .

EXPOSE 3000

# CMD [ "yarn", "start" ]

FROM nginx:stable-alpine
COPY --from=builder /usr/src/nuxt-app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
