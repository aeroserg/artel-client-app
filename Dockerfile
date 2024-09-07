# Если ноду заблокирую - адрес зеркало
# FROM  mirror.gcr.io/node:20-alpine

FROM  node:20-alpine

WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .

COPY . .

RUN npm run build:prod

EXPOSE 3005
ENTRYPOINT ["npm", "run" "start"]
