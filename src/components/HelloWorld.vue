<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hai Nama saya Alfan Firansyah Putra<br>
      Umur saya 20 tahun
    </p>

    <ButtonCounter/>
  </div>
</template>

<script>
import ButtonCounter from './ButtonCounter.vue'

export default {
  name: 'HelloWorld',
  components:{
    ButtonCounter
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
