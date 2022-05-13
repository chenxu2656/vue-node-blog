FROM node:latest
RUN mkdir -p /Desktop
COPY ./server/ /home/server
WORKDIR /home/server
# install yarn & pm2
RUN npm --registry https://registry.npm.taobao.org install yarn \
    && npm --registry https://registry.npm.taobao.org install pm2 -g
EXPOSE 3001
# start pm2 when docker run 
CMD pm2 start ./bin/www