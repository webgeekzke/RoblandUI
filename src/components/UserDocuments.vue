<template>
    <h1>Document Upload</h1>
    <div class="registerform">
        <div class="register">
        <input type="text" v-model="employee.username" placeholder="Enter Document Name"/>
     </div>
         <input
             type="file"
             ref="file"
             id="grid-file" required
             class="input-control input-sm text-xs"
           /> 
           <br/>
    <div class="register"> <button v-on:click="saveDocument">Upload Document</button>
        </div><br/>
    <div class="register"> <button v-on:click="saveDocumentToFile">Upload Document to Dir</button>
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
  
   
            },
            async saveDocument() {
         
         const file = this.$refs.file.files[0];
 
     const fileData = new FormData();
     fileData.append('postedFile', file);
     let result= await axios.post("http://localhost:40/api/Files/UploadFile",fileData);
     console.warn("register UP",result);
    if(result.status==200){
     alert("Successfully Uploaded User Document");
   //this.$router.push({name:"Home"})
    }
   
 }, async saveDocumentToFile() {
         
         const file = this.$refs.file.files[0];
 
     const fileData = new FormData();
     fileData.append('files', file);
     fileData.append('id',1);
     fileData.append('name','mydocument');
     let result= await axios.post("http://localhost:40/api/MyFiles/UploadMyFile",fileData);
     console.warn("register UP",result);
    if(result.status==200){
     alert("Successfully Uploaded User Document");
   //this.$router.push({name:"Home"})
    }
   
 },
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