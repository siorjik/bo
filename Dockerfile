FROM node:16-alpine AS builder
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app/

RUN yarn install

COPY . .

RUN chmod +x ./run.sh
RUN npm install -g serve
CMD ["/app/run.sh"]
