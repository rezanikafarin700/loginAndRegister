<template>
  <div>
    <div class="space-top"></div>
    <div class="small-wrapper">
      <div class="send-box rtl">
        <div class="title">ثبت نام</div>
        <form @submit.prevent="register">
          <label for="username">نام</label>
          <input type="text" v-model="username" id="username" />
          <small></small>
          <br>
          <br>
          <label for="email">ایمیل</label>
          <input type="text" v-model="email" id="email" />
          <small></small>
          <br>
          <br>
          <label for="password">پسورد</label>
          <input type="text" v-model="password" id="password" />
          <small></small>
          <br>
          <br>
          <button type="submit">ارسال</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",

    data() {
    return {
      username: "",
      email: "",
      password: "",
      type : "USER"
    };
  },


  methods: {
    register() {
      this.$store.dispatch("register", {
        username: this.username,
        email: this.email,
        password: this.password,
        type: "USER",
      }).then(() => {
        this.$router.push({name : "index"});
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
