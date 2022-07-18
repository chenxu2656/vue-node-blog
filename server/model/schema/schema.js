const userStructure = { 
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true   // 保证邮箱唯一
    },
    password: {
        type: String,
        require: true
    },
    ctime: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
    },
    role: {
        type: String,
        default: "admin"    // admin | user
    },
    status: {
        type: String, 
        default: "active"    //active | inactive
    }
}
const articleStructure = {
    title: {
        type: String,
        require: true
    },
    ctime: {
        type: String,
        default: Date.now
    },
    content: {
        type: String,
        require: true
    },
    tags: {
        type: Array,
        require: true
    },
    imgPath: {
        type: String,
        require: false
    },
    folders: {
        type: Array,
        require: true
    },
    tage: {
        type: Number,
        require: false
    }
}
// 文件夹 
const folderStructure = {
    folderName: {
        type: String,
        require: true,
        unique: true
    },
    ctime: {
        type: String,
        default: Date.now
    }
}

// tag
const tagsStructure = {
    tagName: {
        type: String,
        require: true,
        unique: true
    },
    ctime: {
        type: String,
        default: Date.now
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
// 评论


//setting
const syssettingStructure = {
    ak: {
        type: String
    },
    sk: {
        type: String
    },
    url: {
        type: String
    },
    backetName: {
        type: String
    }
}

// 前台设置
const frontDeskSetting = {
    name: {
        require: true,
        type: String
    },
    location: {
        require: true,
        type: String
    },
    socialMedia: {
        sina: String,
        github: String,
        segmentfault: String,
        csdn: String
    },
    avatar: {
        require: true,
        type: String
    },
    lunbo: {
        open: {
            require: true,
            type: Boolean,
            default: false
        },
        folder: {
            require: true,
            type: String
        }
    },
    reward: {
        open: {
            require: true,
            type: Boolean,
            default: false
        },
        alipay: {
            require: true,
            type: String
        },
        wechat: {
            require: true,
            type: String
        }
    },
    record: {
        require: true,
        type: String
    }
}

const todoList = {
    title: {
        require: true,
        type: String
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    folderName: {
        
    }
}
const navItemList = {
    title: {
        require: true,
        type: String
    },
    index: {
        require: true,
        type: String
    },
    weight: {
        require: true,
        type: String
    },
    type: {
        require: true,
        type: String
    },
    dataSourceId: {
        require: true,
        type: String
    },
    status: {
        require: true,
        type: Boolean,
        default: true
    }
}
// 点赞
module.exports = {
    userStructure,
    articleStructure,
    folderStructure,
    tagsStructure,
    syssettingStructure,
    frontDeskSetting,
    navItemList
}