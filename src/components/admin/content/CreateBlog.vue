<template>
  <div id="editor">
    <v-md-editor 
    v-model="text" 
    height="400px" 
    :disabled-menus="[]"
    >
    </v-md-editor>
  </div>
</template>

<script setup>
let text = ""
// 上传文件到服务器并返回url，在此选用一个 图床吧
</script>
<style>
#editor {
  margin: auto;
  height: 580px;
}
</style>