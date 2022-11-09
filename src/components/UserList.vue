<template>
    <h1> User List Sign up</h1>
    <div class="registerform">
        
       <table class="employeetable">
        <tr class="tableheaders">
            <th>USerName</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
    </tr>
     <tr class="tablerows" 
       v-for="(emp,idx) in employees" :key="idx"  >
       <td >  {{ emp.username }}  </td>
       <td >  {{ emp.firstname }}  </td>
       <td >  {{ emp.lastname }}  </td>
       <td >  {{ emp.city }}  </td>
       <td >  {{ emp.state }}  </td>
       <td >  {{ emp.country }}  </td>
                                </tr>
    </table>

    </div>
   
       
    
</template>
<script>
import axios from 'axios'
export default {
    name:'Sign Up',
    data(){
        return {
            employees:[],

           
        }
    },
  async  mounted(){
        let result=await axios.get("http://localhost:40/api/Users/GetDbUsers?SearchText=ede");
        console.warn("Get",result.data);
        this.employees=result.data;
    }
         
    }

</script>
<style scoped>

.employeetable{
    border: 2px solid;
    width: 90%;
    border: 1px solid skyblue;
   
}
.tableheaders{
    border: 1px solid skyblue;
    background: skyblue;
    
}.tablerows{
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
    
}
</style>