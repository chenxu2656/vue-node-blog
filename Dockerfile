# 创建基础镜像
FROM node:latest
# 创建文件夹，把文件复制到容器
RUN mkdir -p /Desktop
COPY ./server/ /home/server
# 工作文件夹 workdir
WORKDIR /home/server
# 安装依赖
RUN npm --registry https://registry.npm.taobao.org install yarn && npm --registry https://registry.npm.taobao.org install pm2
RUN yarn
# 服务端口
EXPOSE 3001
# 启动服务