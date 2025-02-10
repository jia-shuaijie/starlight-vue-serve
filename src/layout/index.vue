<script setup lang="ts">
import HeaderLayout from './LayoutHeader.vue'
import LayoutMenu from './LayoutMenu.vue'
</script>

<template>
  <div class="layout-common">
    <el-container>
      <el-header class="layout-header">
        <HeaderLayout/>
      </el-header>
      <el-container class="layout-bottom">
        <el-aside class="layout-menu" width="200px">
          <LayoutMenu/>
        </el-aside>
        <el-main class="layout-main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>
.layout-common {
  height: 100vh;
}

.layout-main {
  width: calc(100vw - 200px);
}

.layout-menu {
  background-color: bisque;
}

.layout-header {
  background-color: #2d3b51;
  color: white;
  height: 50px;
}

.layout-bottom {
  height: calc(100vh - 50px);
}
</style>