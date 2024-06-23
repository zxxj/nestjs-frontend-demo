<template>
  <div class="register-container">
    <div class="register-content">
      <a-form
        :model="formState"
        name="normal_login"
        @finish="onFinish"
        :labelCol="labelCol"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码 !' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item
          label="确认密码"
          name="repassword"
          :rules="[{ required: true, message: '请确认密码 !' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" class="registerBtn">
            注 册
          </a-button>
        </a-form-item>

        <a-button type="link" style="color: #fff" @click="goResister"
          >已有账号? 去登录!</a-button
        >
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getUserList } from '@/service/modules/user';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(async () => {
  const res = await getUserList();
  console.log(res);
});

const formState = ref({
  username: '',
  password: '',
});

const labelCol = { style: { width: '90px' } };

const onFinish = (values) => {
  console.log('Success:', values);
};

const goResister = () => {
  router.push('/login');
};
</script>

<style lang="scss" scoped>
.register-container {
  background: url('@/assets/images/loginbg.png') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .register-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.01);
    border-radius: 10px;
  }

  .registerBtn {
    width: 100%;
    background-color: black;
  }
}

:deep(label) {
  color: #fff !important;
}
</style>
