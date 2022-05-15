FROM node:latest
RUN mkdir -p /home/server
COPY ./server/ /home/server
WORKDIR /home/server
# install yarn & pm2
RUN npm --registry https://registry.npm.taobao.org install yarn -f -g \
    && npm --registry https://registry.npm.taobao.org install pm2 -g \
    && yarn
EXPOSE 3001
# start pm2 when docker run 
CMD ["pm2-runtime","starts","./bin/www"]