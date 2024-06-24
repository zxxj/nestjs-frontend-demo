<template>
  <div class="menu-container">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :items="items"
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';
import { useRouter } from 'vue-router';
import {
  IdcardOutlined,
  AppstoreOutlined,
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';

const router = useRouter();

const selectedKeys = ref<string[]>([
  localStorage.getItem('menu-selected') || 'home',
]);

const items = ref<MenuProps['items']>([
  {
    key: 'home',
    icon: () => h(HomeOutlined),
    label: '首页',
  },
  {
    key: 'users',
    icon: () => h(TeamOutlined),
    label: '用户管理',
  },
  {
    key: 'roles',
    icon: () => h(IdcardOutlined),
    label: '角色管理',
  },
  {
    key: 'menus',
    icon: () => h(AppstoreOutlined),
    label: '菜单管理',
  },
]);

const handleClick = (item: any) => {
  selectedKeys.value = item.key;
  router.push(item.key);
  localStorage.setItem('menu-selected', item.key);
};
</script>

<style lang="scss" scoped></style>
