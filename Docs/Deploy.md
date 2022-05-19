## 部署
---
我已经写了 `Dockerfile` 和 `Docker-compose.yml`.所以我们可以通过

**Docker compose** 直接部署.
具体宿主机和容器的目录结构参照 [Docker-Structure.md](./ServerStructure.md)

### Step1
---
首先需要一台装有docker服务器. 

如果需要购买的话，您可以通过我的推广链接: [https://curl.qcloud.com/sl23v8kz](https://curl.qcloud.com/sl23v8kz) 进行购买，这样我可以得到部分推广奖励.

购买云服务器后可以直接选择 `docker镜像`版本，这样不需要再进行安装，可以直接部署。 

如果您选择购买`linux`版本，需要手动安装`docker`.

以**centos**为例

安装 docker & docker-compose
> https://www.runoob.com/docker/centos-docker-install.html <br>
> https://www.runoob.com/docker/docker-compose.html

### Step 2
---
设置nginx配置文件，后面会挂载到容器里

创建文件夹： /github/nginx/conf.d/
```nginx
vi default.conf

配置文件如下：（proxy_pass和server_name 换成自己的,其他最好不要变）

server {
    listen       80;
    server_name  blog.xccit.cn;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;
    location /api/ {
        proxy_pass http://124.222.84.233:3001/api/ ;
    }
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
    
}

```
### Step 3
---
克隆或者上传项目

克隆到如下目录：/github/btfblog/

### Step 4
---
部署
```bash
cd /github/btfblog
docker-compose up -d
```

### 其他
---
5.1 更新项目
```
git pull
docker-compose down
docker-compose up -d --build
```
5.2 查看日志
```
docker logs -f
```
