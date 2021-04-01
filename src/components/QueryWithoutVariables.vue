<template>
<h1>Query Without Variables</h1>
  <button @click="fetchCompanyData">FETCH QUERY WITHOUT VARIABLES</button>
  <div v-if="company">
    <p>{{company.ceo}}</p>
    <p>{{company.coo}}</p>
    <p>{{company.cto_propulsion}}</p>
    <p>{{company.employees}}</p>
  </div>
  <div v-if="loadingCompany">Loading...</div>
</template>

<script>
import emosGraphqlApi from '@/apis/emos-graphql-api';
import {GetCompany} from '@/graphql/Company/queries';

export default {
  data(){
    return{
      company:null,
      loadingCompany:false
    }
  },
  methods:{
    async fetchCompanyData(){
      try{
        this.loadingCompany = true;
        const result  = await emosGraphqlApi.post(null,{
            query:GetCompany
        });
        this.company = result.data.data.company;
      }
      catch(err){
          console.log(err);
          //HANDLE ERROR
      }
      finally{
        this.loadingCompany = false;
      }
    }
  }
}
</script>

<style>

</style>