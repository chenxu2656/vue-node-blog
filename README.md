# btfblog
## 介绍
> Node + Express + Mongoose + Vue3 + Element-Plus + Vue-Router4  +  RestFul API **前后端分离全栈博客系统** 
---  
## 技术
> 后端： Node + Express + Mongoose + jsonWebToken
> 
> 前端： Vue3 + Element-Plus + Vue-Router4 
> 
> 接口： RestFul API

## Start

```bash
# 前台
yarn && yarn run start
# 后台,目前数据库用的mongodb云数据库，hardCode 在代码了，想改可以自己改 （/server/.env）
cd server && yarn && yarn run start

```
>  ApiFox api接口， 过期issues联系。

链接: https://www.apifox.cn/apidoc/shared-6f8b1f31-9880-4ea6-a11a-022c782a2bde  访问密码 : vQYDZM9i 
## 开发日志 
> 下班更新

### 2022.5.2
- Update
  - 系统设置
  - 七牛云设置
### 2022.5.1
- Update
  - update admin UI
  - add some api request
  - Refactoring pages
### 2022.4.28
> 最近比较忙
- Update
  - 完成整个前端+后端框架。（Base_Version,30%）
  - 连接七牛云
  - 开始优化
### 2022.4.23
- Update
  - 博客信息页
  - 登陆
  - token验证
  - v-md-editor
  - 后台框架
- Bug
  - [ ] token 正确性验证
### 2022.4.20
- Update
  - 完成博客首页
  - 修改后端接口的token验证，部分请求可以绕过token
### 2022.4.19
- Update
  - 学习vue, vue3 , vue-axios,组合式api，生命周期hook
  - 重构嵌套路由、嵌套组建
  - 完成博客列表获取
- Diary
  > 昨天合肥确诊五例，一家五口。大家去做核酸检测，调休待定
### 2022.4.17
- Update 
  - 完善数据库结构
  - 文章、用户、folder、category的增删改查
  - 完成接口文档、接口测试
- ToDo List （完成前端部分再来改）
  - [ ] 高级查询，数据库引用
  - [ ] err handle
  - [ ] 分页
### 2022.4.14
- Update
  - 重构后台结构

## Router
- Front-End
  - '/' : homePage
    - '/blog/:id' : blog detail
    - '/category/' : category list
    - '/category/:id' : blog list of current category
    - '/folder/' : folder list
    - '/folder/:id' : blog list of current folder
- Admin
  - '/admin'
    - '/login/' : login
    - '/reg/': sign up
## 参考

> Database:  https://cloud.mongodb.com/v2/6212efd86341c213815dff44#metrics/replicaSet/62380bf7281c914b51fb0ce3/explorer

> https://ppoffice.github.io/hexo-theme-icarus/archives/

> 关系型数据库设计： https://zhangjia.io/852.html
### vue3-study
#### setup 语法糖 `<script setup>` 
> - https://www.mybj123.com/10486.html
> - https://juejin.cn/post/7078865301856583717

#### 组合式api: 
> - https://zhuanlan.zhihu.com/p/361491044 
> - https://juejin.cn/post/6907942907764965384
#### 组件
> 子组件与父组件api： https://blog.csdn.net/cherry_vicent/article/details/117816855

#### ref, refs ,reactive
> ref获取DOM: https://www.bilibili.com/video/BV1Uq4y1L7oj?spm_id_from=333.337.search-card.all.click

## 工具 
    
> apiFox

> jwt: https://www.npmjs.com/package/jsonwebtoken


> > config: https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html

> v-md-editor:  https://ckang1229.gitee.io/vue-markdown-editor/zh/