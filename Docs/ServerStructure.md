### Docker 结构 
---
```
｜-- （宿主机）
    ｜-- github
        |-- btfblog (项目地址)
        |-- nginx
            |-- conf.d (nginx 配置文件挂载)
                |-- default.conf (ngix 配置文件)

｜-- （api 容器）
    ｜-- home
        ｜-- server (api项目地址)

｜-- （blog-vue 容器）
    ｜-- github
        ｜-- btfblog (容器内项目地址、编译地址)
            |-- dist (编译完成后代码)
    ｜-- usr
        |-- share
            |-- nginx
                |-- html (copy from dist/)
    ｜-- etc  
        |-- nginx
            |-- conf.d
                |-- default.conf (ngix 配置文件)
```