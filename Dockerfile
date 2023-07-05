FROM node:18.15.0-alpine as builder

WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

RUN npm ci --silent

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
