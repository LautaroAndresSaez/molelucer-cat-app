FROM node:20-alpine

WORKDIR /app

COPY *.json .
COPY yarn.lock .

RUN yarn --production

COPY . .

CMD ["yarn", "start"]
