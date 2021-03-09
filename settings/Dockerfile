FROM node:latest
EXPOSE 8080
COPY server.js /www/server.js
COPY package.json /www/package.json
RUN cd /www/ && npm install
CMD node /www/server.js