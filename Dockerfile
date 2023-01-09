FROM node:18-alpine AS tmdb-ui-franco
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=tmdb-ui-franco /app/dist/moviedb /usr/share/nginx/html
EXPOSE 80