<template>
  <div class="role-main">
    <el-space direction="vertical">
      <el-card class="role-box-card role-main-head">
        <el-row :gutter="10">
          <el-col :span="5">
            <div class="grid-content ep-bg-purple">角色名称 :
              <el-input v-model="input" style="width: 240px" placeholder=""/>
            </div>
          </el-col>
          <el-col :span="2">
            <el-button class="search-button" type="primary" round @click="">
              <el-icon>
                <Search/>
              </el-icon>
              &nbsp;搜索
            </el-button>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="role-box-card role-main-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-card>
    </el-space>
  </div>

</template>
<script setup lang="ts">

import {ref} from 'vue'

const input = ref('')
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style scoped>
.search-button {
  width: 70px;
}

.role-main-table {
  height: calc(100vh - 90px - 6vh);
}

.role-main-head {
  padding: 0;
  height: 5vh;
}

.role-box-card {
  width: calc(100vw - 240px);
}

.role-main {
  padding: 20px;
}
</style>