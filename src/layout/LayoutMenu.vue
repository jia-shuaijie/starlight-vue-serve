<template>
  <div class="left-menu">
    <el-card class="left-menu-card">
      星光系统
    </el-card>
    <el-menu
        background-color="#2f4050"
        text-color="white"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <Setting/>
          </el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">部门管理</el-menu-item>
        <el-menu-item index="1-3">岗位管理</el-menu-item>
        <el-menu-item index="/role">角色管理</el-menu-item>
        <el-menu-item index="1-5">菜单管理</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>

</template>

<script lang="ts" setup>
import {
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>


<style scoped>
.el-card {
  --el-card-border-color: null;
}

.left-menu-card, .left-menu-list, .left-menu {
  width: 200px;

  color: white;
  background: #2f4050;
}

.left-menu {
  height: 100vh;
  width: 200px;
}
</style>