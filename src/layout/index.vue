<script setup lang="ts">
import HeaderLayout from './LayoutHeader.vue'
import LayoutMenu from './LayoutMenu.vue'
</script>

<template>
  <div class="layout-common">
    <el-container>
      <el-aside  class="layout-menu"><LayoutMenu/></el-aside>
      <el-container>
        <el-header class="layout-header">
          <HeaderLayout/>
        </el-header>
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
  padding: 0 0;
}

.layout-menu {
  height: 100vh;
  width: 200px;
}

.layout-header {
  width: calc(100vw - 200px);
  padding: 0 0;
  background-color: #2d3b51;
  color: white;
  height: 50px;
}
</style>