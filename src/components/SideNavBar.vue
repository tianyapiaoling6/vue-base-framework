<!--左侧导航栏-->
<template>
  <div>                     <!--注：先添加router可以在活动等二级组件中添加路径；但是再添加$router.path，表示可以在直接输入路径时候，自动导航到对应栏-->
    <el-menu :default-active="$router.path" class="el-menu-demo" router>  <!--注：此处一定要加router，因为当输入栏输入路径时候，可以高亮显示全靠router-->
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">活动</template>
        <el-menu-item index="/event/create">创建</el-menu-item>
        <el-menu-item index="/event/list">管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">账户</template>
        <el-menu-item index="3-1">账户充值</el-menu-item>
        <el-menu-item index="3-2">账户信息</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "SideNavBar"
    }
</script>

<style scoped>

</style>
