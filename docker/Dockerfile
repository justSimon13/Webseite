##########################
# Stage: Base (shared)
##########################
FROM node:23-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

##########################
# Stage: Dev
##########################
FROM base AS dev
COPY . .
EXPOSE 4200
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]

##########################
# Stage: Prod Build
##########################
FROM base AS build
COPY . .
RUN npm run build -- --configuration production

##########################
# Stage: Nginx Serve
##########################
FROM nginx:alpine AS prod
COPY --from=build /app/dist/webseite/browser /usr/share/nginx/html
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./src/errors /usr/share/nginx/html/errors
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]