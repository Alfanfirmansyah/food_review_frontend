<template>
  <div class="container">
        <div class="row">
        
            <!-- Food 1 -->
            <div class="col-sm-4" v-for="resto in restos" :key="resto.id">
                <div class="card mb-3">
                    <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{resto.name}}</h5>
                        <p class="card-text">Alamat : {{resto.address}}</p>
                        <p class="card-text">Website : {{resto.website}}</p>
                        <router-link :to="{name:'detail-resto', params:{restoId:resto.id}}" class="btn btn-primary">View Detail</router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
// @ is an alias to /src

var axios = require('axios')

export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
    restos: []
  }
},
mounted: function(){
  axios
  .get('http://localhost:3000/restos')
  .then(response=> (this.restos=response.data))
}
}
</script>
