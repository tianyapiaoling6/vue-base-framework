<template>
  <div id="app">    <!--第一排分左侧图标和右侧头部导航-->
    <el-row>
      <el-col :span="4">
        <div class="nav-logo-wrap">
          <img src="./assets/logo.png" alt=" " class="logo"/>    <!--左侧导航区将logo引入-->
        </div>
      </el-col>
      <el-col :span="20">
        <head-nav-bar />
      </el-col>
    </el-row>

    <el-row>    <!--第二排分左侧导航和右侧内容区域，其中右侧内容区全靠vue router来驱动-->
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <side-nav-bar />
        </div>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import HeadNavBar from "./components/HeadNavBar";
    import SideNavBar from "./components/SideNavBar";

    export default {
        name: 'App',
        components:{
            HeadNavBar,
            SideNavBar
        }
    }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .nav-logo-wrap{
    text-align: center;
  }

  .logo{
    height: 60px;
  }
</style>
