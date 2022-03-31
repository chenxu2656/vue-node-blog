<template>
    <el-row :gutter="20" id="container">
        <el-col :span="6" class="leftSide">
            <el-card class="box-card" id="basicInfo">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <div id="username">chen.xu</div>
                <div id="location">
                    <el-icon :size="20">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"></path><path fill="currentColor" d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"></path></svg>
                    </el-icon>
                    <div id="localtionName">Anhui,hefei,AHMU</div>
                </div>
            </el-card>
            <el-card class="box-card" id="categoryList">
                <div id="categoryTitle">Category</div>
                <el-divider></el-divider>
            </el-card>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple" /></el-col>
        <el-col :span="6"><div class="grid-content bg-purple" /></el-col>
    </el-row>
</template>
<style lang="scss" scoped>
.el-row{
    width: 1200px;
    height: 100px;
    .el-col.leftSide {
        min-height: 40px;
        #basicInfo{
            .el-avatar{
                width: 100px;
                height: 100px;
            }
            #username{
                font-size: $h2_size;
                font-weight: $font_weight_middle;
            }
            #location{
                height: 30px;
                line-height: 30px;
                font-size: $h3_size;
                .el-icon{
                    height: 30px;
                }
                #localtionName{
                    display: inline-block;
                    vertical-align: top;
                }
            }
        }
        #categoryList{
            margin-top: 10px;
            text-align: left;
            #categoryTitle{
                left: 0px;
                
            }
            .el-divider{
                margin-top: 10px;
            }
        }
    }

}
</style>