<template>
    <el-row id="container" :gutter="10">
        <el-col :span="6" class="leftSide">
            <leftBar/>
        </el-col>
        <el-col :span="18" class="con">
            <el-carousel trigger="click" height="220px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <articleList/>
        </el-col>
    </el-row>
</template>
<script>
import leftBar from '../../src/components/homePage/leftbar.vue'
import articleList from '../../src/components/homePage/articleList.vue'
export default {
    name: "HomePage",
    components: { 
        leftBar,
        articleList
    }
}
</script>
<style lang="scss" scoped>
.el-row{
    width: 1200px;
    height: 100px;
    .el-col.leftSide {
        min-height: 40px;
        
    }
    .el-col.con{
        height: 600px;

    }
}
</style>