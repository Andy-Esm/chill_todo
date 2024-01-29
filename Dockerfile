FROM node:18-alpine

WORKDIR /chill-dev/

COPY *.json /chill-dev/

RUN npm install --no-update-notifier

COPY . /chill-dev/

CMD [ "npm", "run", "build" ]

