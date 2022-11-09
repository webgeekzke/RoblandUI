<template>
    <h1>view Uploaded Documents </h1>
    <div class="registerform">
        <div class="register">
            
    <select id="grid-documents" 
                                            v-model="documentid" 
                                           >
                                            <option value="">Select document Name</option>
                                            <option v-for="(doc,idx) in clientdocs" :key="idx" 
                                                :value="doc.id">{{ doc.docname }}</option>
                                        </select>

     </div>
         
     <br/>
    <div class="register"> <button v-on:click="viewSpecificDoc(documentid)">View Document</button>
        </div>
        <div v-if="showdocumentloader">
            <h1>Documents Loader </h1>
          
            <img :src="`data:application/image;base64,${selecteddoc.document}`" alt="" srcset="">
          <iframe :src="`data:application/pdf;base64,${selecteddoc.document}`" height="800" width="1200"></iframe>
      
        </div>

    </div>
   
       
    
</template>
<script>
import axios from 'axios'
export default {
    name:'Sign Up',
    data(){
        return {
            clientdocs:[],
            documentid:0,
            selecteddoc:{},
            showdocumentloader:false
            
           
        }
    },
    async  mounted(){
        let result=await axios.get("http://localhost:40/api/Files/GetDocuments");
        console.warn("Get",result.data);
        this.clientdocs=result.data;
    },
    methods:{
viewSpecificDoc(documentId){
    var docc=this.clientdocs.filter(g=>g.id==documentId);
   // this.selecteddoc=docc;
    if(docc.length==0){
this.selecteddoc={};
this.showdocumentloader=false;
    }
    else{
        this.selecteddoc=docc[0];
        
this.showdocumentloader=true;
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