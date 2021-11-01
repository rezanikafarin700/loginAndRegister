<template>
  <div>
    <div class="send-box">
      <router-link :to="{ name: 'register' }">ثبت نام</router-link>
      <br>
      <br>
      <router-link :to="{ name: 'login' }">لاگین</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped></style>
