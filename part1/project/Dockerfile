FROM node:12

WORKDIR /usr/src/app

COPY package* ./

RUN npm ci

COPY . .

CMD ["node", "index.js"]