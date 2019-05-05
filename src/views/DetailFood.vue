<template>
 <div class="container">

        <h1>{{food.name}} <span class="badge badge-primary">{{food.foodname}}</span></h1>
        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="card-img-top" alt="...">

        <p>Price : Rp. {{food.price}}</p>
        <h3>Reviews</h3>

        <div class="row">

            <!-- Comment 1 -->
            <div class="col-sm-4" v-for="review in reviews" :key="review.id">
                <div class="card mb-6">
                    <div class="card-body">
                        <h5 class="card-title">{{review.name}}</h5>
                        <p class="card-text">{{review.comment}}</p>
                        <p class="card-text"><span class="badge badge-success">Rating : {{review.rating}}</span></p>
                    </div>
                </div>
                
            </div>
            
            <!-- Comment 2 -->

        </div>
    </div>
</template>

<script>
// @ is an alias to /src

var axios = require('axios')

export default {
  name: 'detail-food',
  components: {
    
  },
  data(){
    return{
      food:{},
      reviews:[]

    }
  },
  mounted: function(){
  axios
  .get('http://localhost:3000/foods/'+ this.$route.params.foodId)
  .then(response=> (this.food=response.data))
  axios
  .get('http://localhost:3000/reviews/?foods_id='+ this.$route.params.foodId)
  .then(response=> (this.reviews=response.data))
}
}
</script>
