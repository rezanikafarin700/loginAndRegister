<template>
  <div>
    <div class="space-top"></div>
    <div class="small-wrapper">
      <div class="send-box rtl">
        <div class="title">لاگین</div>
        <form @submit.prevent="login">
          <label for="name">ایمیل</label>
          <input type="text" v-model="email" id="email" />
          <small></small>
          <br />
          <br />
          <label for="name">پسورد</label>
          <input type="text" v-model="password" id="password" />
          <small></small>
          <br />
          <br />
          <button type="submit">ارسال</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      this.$store.dispatch("login", {
        name: this.name,
        email: this.email,
        password: this.password,
        type: "USER",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
