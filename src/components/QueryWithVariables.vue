<template>
<h1>Query With Variables</h1>
  <form @submit.prevent="onSubmitForm">
      <label>Jumlah Baris</label>
      <input type="number" placeholder="Limit" v-model="limit">
      <label style="margin-left:10px">Offset</label>
      <input type="number" placeholder="Offset" v-model="offset">
      <button>Search Ships</button>
  </form>
  <p v-if="loadingShips">Loading....</p>
  <div v-for="(ship,idx) in ships" :key="idx">
      <p>abs : {{ship.abs}} </p>
      <p>active : {{ship.active}} </p>
      <p>home_port : {{ship.home_port}} </p>
      <br><br>
  </div>
</template>

<script>
import emosGraphqlApi from '@/apis/emos-graphql-api';
import {Ships} from '@/graphql/Ships/queries';

export default {
    data(){
        return{
            ships:null,
            loadingShips:false,
            limit:10,
            offset:10
        }
    },
    methods:{
        async onSubmitForm (){
            this.loadingShips = true;
            try{
                const result = await emosGraphqlApi.post(null,{
                    query:Ships,
                    variables:{
                        limit:parseInt(this.limit),
                        offset:parseInt(this.offset)
                    }
                });
                this.ships = result.data.data.ships;
            }
            catch(err){
                console.log(err);
                //HANDLE ERROR
            }
            finally{
                this.loadingShips = false
            }
        }
    }
}
</script>

<style>

</style>