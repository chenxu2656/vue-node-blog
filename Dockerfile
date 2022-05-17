# install & build
FROM node:latest
## install yarn in global
RUN npm --registry https://registry.npm.taobao.org install yarn -g --force \
    && mkdir /github/btfblog
COPY . /github/btfblog
WORKDIR /github/btfblog
RUN yarn \
    && yarn run build 
# docker file for frontend
FROM nginx
# nginx 配置文件
RUN cp -r /github/btfblog/dist/* /usr/share/nginx/html/

# 暴露端口
EXPOSE 80
