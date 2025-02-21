<template>
  <div class="login">
    <div class="login-left"/>
    <div class="login-content">
      <el-container>
        <el-header class="login-content-head"/>
        <el-main class="login-content-main">
          <div class="login-form">
            <el-form-item label="username">
              <el-input v-model="ruleForm.username"/>
            </el-form-item>
            <el-form-item label="password">
              <el-input v-model="ruleForm.password"/>
            </el-form-item>
            <el-form-item>
              <el-button class="login-button" size="large" type="primary" round @click="">
                login
              </el-button>
            </el-form-item>
          </div>
        </el-main>
        <el-footer class="login-content-footer"/>
      </el-container>
    </div>
    <div class="login-right"/>
  </div>
</template>
<script setup lang="ts">
import 'element-plus/dist/index.css'
import {reactive, ref} from 'vue'

const ruleForm = reactive({
  username: '',
  password: ''

})

</script>
<style scoped>
.login-button {
  width: 40vw;
}

.login-form {
  margin-top: 13vh;
  padding-left: 8vw;
  padding-right: 8vw;
}

.login-content-main {
  padding: 0 0;
  height: 40vh;
  background: beige;
}

.login-content-head, .login-content-footer {
  height: 30vh;
  display: flex;
}

.login-content {
  float: left;
  width: 40vw;
  height: 100vh;
}

.login-right {
  float: left;

  width: 30vw;
  height: 100vh;
}

.login-left {
  float: left;
  width: 30vw;
  height: 100vh;
}
</style>
