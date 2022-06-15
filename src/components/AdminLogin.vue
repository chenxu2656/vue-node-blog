<template>
  <div id="con">
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
#con {
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: linear-gradient( to right, #64b3f4, #c2e59c ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
