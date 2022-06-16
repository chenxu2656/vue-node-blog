# btfblog
## 介绍
---
> Node + Express + Mongoose + Vue3 + Element-Plus + Vue-Router4  +  RestFul API **前后端分离全栈博客系统** 

### 亮点
#### 1. 前端高度自定义
> 自定义导航，可以给导航栏目配置单页、文件夹、标签等，依托于MarkDown，提供高度自定义的前端
#### 2. 清晰的分级结构
> 以 文件夹、标签来管理文章
> 前台分为 主页、内容页、列表页、单页

#### 3. 原生支持七牛云，图片文件都放里面，不浪费10G免费空间

#### 4. 清晰、简洁

#### 5. docker-compose 部署
---  
## 技术
---
> 后端： Node + Express + Mongoose + jsonWebToken
> 
> 前端： Vue3 + Element-Plus + Vue-Router4 
> 
> 接口： RestFul API

## Demo
---
> 前台：http://blog.xccit.cn <br>
> 后台：http://blog.xccit.cn/admin <br>
> Username: test@xccit.com <br>
> passwrod: 1234 <br>

## Start
---
```bash
# 前台
yarn && yarn run start
# 后台,目前数据库用的mongodb云数据库，hardCode 在代码了，想改可以自己改 （/server/.env）
cd server && yarn && yarn run start
```

## Docs
---
- [后台api文档](./Docs/Api.md)
- [部署](./Docs/Deploy.md)
- [开发日志](./Docs/Logs.md)
- [参考 && 引用](./Docs//Reference.md)

