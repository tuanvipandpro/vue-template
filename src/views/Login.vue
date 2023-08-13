<template>
  <div class="login-cont">
    <el-card style="width: 20vw;">
      <h2>Sign In</h2>
      <el-form ref="loginForm" :model="loginData" :rules="loginRules">
        <el-form-item label="Username" prop="username">
          <el-input
            v-model="loginData.username"
            placeholder="Enter your username"
          ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="loginData.password"
            placeholder="Enter your password"
            type="password" 
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const loginForm = ref()

const loginData = ref({
  username: '',
  password: '',
})

const loginRules = {
    username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
    password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
};

const login = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("userPermissions", ["admin"]);

      router.push("/");
    } else {
      alert("Login fail !!!")
    }
  })

};
</script>

<style scoped>
.login-cont {
  display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}
</style>