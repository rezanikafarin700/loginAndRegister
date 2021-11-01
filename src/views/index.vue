<template>
  <div>
    <div class="space-top"></div>
    <div class="small-wrapper rtl">
     user =  {{ user }}
      <hr>
      <div v-if="user.api_token">
          {{ products }}
      </div>
    
      <nav-bar v-else/>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Index",
  components: {
    NavBar,
  },

  data() {
    return {
      products: [],
      user : null
    };
  },

  mounted(){
      this.user = this.$store.state.user;
  },


  beforeRouteEnter(to, from, next) {
      next(vm => {
          axios.get(process.env.VUE_APP_URL+'products').then(res => {
              vm.products = res.data;
          }).catch(err => {
              console.log('error = ',err);
          })
      })
},
};
</script>

<style lang="scss" scoped></style>
