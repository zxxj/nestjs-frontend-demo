<template>
  <a-layout style="height: 100vh">
    <!-- sider -->
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <Menu />
    </a-layout-sider>
    <a-layout>
      <!-- header -->
      <a-layout-header style="background: #fff; padding: 0">
        <div style="margin-left: 30px">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </div>
      </a-layout-header>

      <!-- content -->
      <a-layout-content class="content">
        <RouterView></RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import Menu from './menu/index.vue';
const collapsed = ref<boolean>(false);
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-layout-sider {
  background-color: #fff !important;
}

.content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
}
</style>
