<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <infoPage></infoPage>
</template>

<script>
import infoPage from '@/views/infoPage.vue';
export default {
  name: 'HelloWorld',
  //声明接收
  props: {
    msg: String
  },
  components: {
    infoPage
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
