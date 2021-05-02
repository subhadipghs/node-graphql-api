FROM node:14-alpine

RUN apk add --no-cache python g++ make

WORKDIR /webapi

COPY . .

COPY package*.json .

RUN npm ci

ENV PORT 4000

EXPOSE 4000

CMD ["npm", "run", "start"]