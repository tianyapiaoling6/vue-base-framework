<!--面包屑导航部分-->
<!--首页路由内容，其它的路由为其子路由-->
<template>
  <div class="mainContent">
    <el-breadcrumb separator-class="/" class="breadcrumb">
      <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->

      <el-breadcrumb-item v-for="route in $route.matched" :key="route.path">
        {{ route.meta.name }} <!--此处必须同时满足(1)v-for="route in $route.matched" (2):key="route.path" (3){{ route.meta.name }}才正确-->
      </el-breadcrumb-item>
    </el-breadcrumb>

    <router-view/>    <!--此处加的这个路由表示，其包含的下面的组件都成为其子路由（即嵌套路由）,上面则处理最外一层公共进度部分-->
  </div>
</template>

<script>
    export default {
        name: "MainContent"
    }
</script>

<style scoped>
  .breadcrumb {
    margin-top: 20px;
  }
  .mainContent{
    margin-left: 20px;
  }
</style>
