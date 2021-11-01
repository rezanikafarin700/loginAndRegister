<template>
    <div>
        <header-page />
        <div class="content">
            <router-view />
        </div>

        <footer-page />
        
    </div>
</template>

<script>
import HeaderPage from '../components/HeaderPage.vue';
import FooterPage from '../components/FooterPage.vue';
    export default {
        name : "layout",

        components : {
            HeaderPage,
            FooterPage
        }
    }
</script>

<style lang="scss" scoped>
.content{
    min-height: 100vh;
}
</style>