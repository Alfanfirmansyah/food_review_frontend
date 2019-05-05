<template>
  <div class="container">

        <h1>{{resto.name}}</h1>
        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="...">

        <p>{{resto.description}}</p>
        <h3>Foods</h3>

        <div class="row">

            <!-- Food template -->
            <div class="col-sm-4" v-for="food in foods" :key="food.id">
                <div class="card mb-3">
                    <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{food.name}} 
                        <span class="badge badge-success" v-if="food.rating > 0 ">Rating : {{food.rating}}</span>
                        <span class="badge badge-success" v-else>Rating : Belum Ada Rating</span>
                        </h5>
                        <p class="card-text">Price : Rp. {{food.price}}</p>
                        <router-link :to="{name:'detail-food', params:{foodId:food.id}}" class="btn btn-primary">View Reviews</router-link>
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
  name: 'detail-resto',
  components: {
    
  },
  data(){
    return{
      resto:{},
      foods:[]

    }
  },
  mounted: function(){
  axios
  .get('http://localhost:3000/restos/'+ this.$route.params.restoId)
  .then(response=> (this.resto=response.data))
  axios
  .get('http://localhost:3000/foods/?restos_id='+ this.$route.params.restoId)
  .then(response=> (this.foods=response.data))
}

}
</script>
