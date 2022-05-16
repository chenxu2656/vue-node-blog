# docker file for frontend
FROM nginx
# nginx 配置文件
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# 项目文件
COPY dist/ /usr/share/nginx/html/
# 暴露端口
EXPOSE 80
