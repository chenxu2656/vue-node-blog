<template>
    <canvas id="canvas" ref="canvas"></canvas>
</template>
<style lang="scss">
</style>
<script setup>
import {ref,onMounted} from 'vue'
const canvas = ref(null)
const width = window.innerWidth
const height = window.innerHeight-60
onMounted(() => {
    const mycanvas = canvas.value
    console.log(mycanvas);
    mycanvas.width = width
    mycanvas.height = height
    const context = mycanvas.getContext('2d')
    let ball = function (x,y,r,s,c){
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = s;
        this.c = c
        this.drawBall = function (){
            context.beginPath();
            context.arc(this.x, this.y, this.r, 0, Math.PI*2);
            context.fillStyle='red';
            context.fill();
            context.closePath();
        }
        this.update = function(){
            this.x++
            this.y++
            this.drawBall()
        }
    }
    let canvasList = []
    for (let index = 0; index < 10; index++) {
        canvasList.push(new ball(Math.random()*width,Math.random()*height,10,10))
    }
    const animation = ()=>{
        context.clearRect(0, 0, mycanvas.width, mycanvas.height);
        canvasList.forEach(item=>{
            item.update()
        })
        requestAnimationFrame(animation)
    }
    animation()
})
</script>