FROM node:18.15.0-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ARG API_URL $API_URL

COPY package-lock.json ./
COPY package.json ./

RUN npm ci --silent

COPY . ./
RUN API_URL=$API_URL npm run build

# production
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
