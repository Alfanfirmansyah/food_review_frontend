<template>
    <div>
        <p>{{ score }}</p>
        <button v-on:click="decScore()">-</button>
        <button v-on:click="incScore()">+</button>
    </div>

</template>
<script>
export default {
name:'buttoncounter',
data:function(){
    return{
        score:0

    }
},

methods:{
    incScore: function(){
        this.score++
    },
    decScore: function(){
        this.score--
    }
}

    
}
</script>
