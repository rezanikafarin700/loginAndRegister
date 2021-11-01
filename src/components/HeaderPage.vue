<template>
    <div>
        <header class="header">
            <div class="wrapper">
                <button @click="logout">Logout</button>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name : "HeaderPage",

        methods:{
            logout(){
                this.$store.dispatch('logout');
            }
        }
    }
</script>

<style lang="scss" scoped>

    .header{
        background-color: #eee;
        padding: 1rem;

    }

</style>