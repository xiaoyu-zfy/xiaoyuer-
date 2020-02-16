<template>
  <div id="app">
    
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog> -->
    <!-- 然后使用路由时 要用router-view 组件展示 -->
    <blog-header></blog-header>
    <router-view></router-view>

  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import showBlog from './components/showBlog'
import BlogHeader from './components/BlogHead'

export default {
  name: 'App',
  components: {
    AddBlog,showBlog,BlogHeader
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px
}
</style>
