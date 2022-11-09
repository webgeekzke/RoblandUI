<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/sign-up">Register User</router-link>
        <router-link to="/user-list">Clients</router-link>
        <router-link to="/user-document">Document</router-link>
        <router-link to="/view-document">View Documents</router-link>
        <router-link to="/">Reports</router-link>
        <a v-on:click="logout" href="#">Log Out</a>
    </div>
</template>
<script>
 
export default {
    name:'Header',
    methods:{
        logout(){
            localStorage.clear(); 
            this.$router.push({name:"Home"})
        }
    }
}
</script>
<style scoped>
.nav{background-color:#333;
overflow: hidden;}
.nav a{
    float: left;
    color:#f2f2f2f2;
    padding:14px 16px;
    text-align:center;
    font-size:17px;
    text-decoration: none;
    margin-right:5px;
}
.nav a:hover{
    background: #ddd;
    color:#333
}
</style>
