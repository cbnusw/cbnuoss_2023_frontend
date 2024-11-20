FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/.next /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

#COPY nginx/ssl/* /etc/nginx/ssl/
#
#COPY nginx/ssl/swjudge.cbnu.ac.kr/* /etc/nginx/ssl/swjudge.cbnu.ac.kr/
#
#COPY nginx/ssl/swjudgeapi.cbnu.ac.kr/* /etc/nginx/ssl/swjudgeapi.cbnu.ac.kr/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
