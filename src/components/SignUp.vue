<template>
    <h1>Sign up</h1>
    <div class="registerform">
       <div class="register">
        <input type="text" v-model="employee.username" placeholder="Enter UserName"/>
        <input type="text" v-model="employee.firstname" placeholder="Enter First Name"/>
    </div>
    <div class="register">
        <input type="text" v-model="employee.lastname" placeholder="Enter Last Name"/>
        <input type="text" v-model="employee.city" placeholder="Enter City"/>
    </div> 
    <div class="register">
        <input type="text" v-model="employee.state" placeholder="Enter State"/>
        <input type="text" v-model="employee.country" placeholder="Enter Country"/>
    </div>
    <div class="register"> <button v-on:click="signup">Register User</button>
        </div>

    </div>
   
       
    
</template>
<script>
import axios from 'axios'
export default {
    name:'Sign Up',
    data(){
        return {
            employee:{
                
 // id: 14,
  username: "",
  firstname: "",
  lastname: "",
  city: "",
  state: "",
  country: ""
}
           
        }
    },
        methods:{
           async signup(){
                console.warn("sign UP",this.employee);
           //let result= await axios.post("http://192.168.1.229:40/api/Users/CreateUser",this.employee);
           let result= await axios.post("http://localhost:40/api/Users/CreateUser",this.employee);
           console.warn("register UP",result);
           if(result.status==200){
          //  alert("Successfully Registered User");
          this.$router.push({name:"Home"})
           }
  
   
            }
        }
    }

</script>
<style scoped>
.registerform{
    height: 40px;
    padding-left:20px;
    margin-bottom: 15px;

}
.register input{
    width:300px;
    height: 40px;
    margin-bottom: 15px;
    margin-right: auto;
    margin-left:15px;
    border:1px solid skyblue;

}
.register button{
    width:320px;
    height: 40px;
    border:1px solid skyblue;
    background:skyblue;
    color: #fff;
    cursor: pointer; 
    
}
</style>