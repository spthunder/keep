<template>
<div class="nav-menu">
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="black"
      active-text-color="black"
      router>
    <el-menu-item index="/todo" >
      <i class="el-icon-location"></i>
      <span>待办列表</span>
    </el-menu-item>
    <el-menu-item index="/done">
      <i class="el-icon-menu"></i>
      <span slot="title">今日专注</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'navMenu',
  methods: {
  },
};
</script>

<style scoped>
.nav-menu{
  width: 200px;
  height: 100%;
  overflow: hidden;
  z-index:999
}
</style>