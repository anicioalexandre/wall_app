FROM node:12-alpine

COPY package*.json /code/

WORKDIR /code/

RUN npm install

ENV PATH /code/node_modules/.bin:$PATH

COPY . /code/

EXPOSE 3030

CMD ["npm", "start"]
