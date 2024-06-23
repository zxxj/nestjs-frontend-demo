<template>
  <div class="login-container">
    <a-button>login</a-button>
  </div>
</template>

<script setup>
import { getUserList } from "@/service/modules/user"
import { onMounted } from "vue"

onMounted(async () => {
  const res = await getUserList()
  console.log(res);
})
</script>

<style lang="scss" scoped>

</style>