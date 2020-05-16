FROM node:12-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN yarn global add nodemon

EXPOSE 8000

CMD [ "npm", "run", "start" ]