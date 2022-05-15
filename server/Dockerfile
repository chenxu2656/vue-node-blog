FROM node:latest
RUN mkdir -p /home/server \
    && npm --registry https://registry.npm.taobao.org install yarn -g --force \
    && npm --registry https://registry.npm.taobao.org install pm2 -g 
COPY ./ /home/server
WORKDIR /home/server
# install yarn & pm2
RUN yarn
EXPOSE 3001
# start pm2 when docker run 
CMD ["pm2-runtime","start","./bin/www"]