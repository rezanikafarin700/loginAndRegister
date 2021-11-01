<template>
  <div>
    <div class="send-box">
      <router-link :to="{ name: 'register' }">ثبت نام</router-link>
      <br />
      <br />
      <router-link :to="{ name: 'login' }">لاگین</router-link>
      <br />
      <br />
      <button @click="logout">لاگ اوت</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  methods: {
    logout() {
      this.$slots.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped></style>
