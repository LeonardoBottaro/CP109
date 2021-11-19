<template>
  <div class="about">
    <h1>{{counter}}</h1>
    <button v-on:click="increment()">Increment</button>
    <button @click="decrease()">Decrease</button>
    <historico />
  </div>
</template>

<!-- v-on === @ -->
<!-- v-bind === : --> 


<script>
  import Historico from '../components/Historico'

export default {
  data(){
    return{
      counter:0
    }
  },
  methods:{
    increment(){
      console.log("Count++")
      this.counter=this.counter+1
    },
    decrease(){
      console.log("Decrease--")
      this.counter--
    }
  },
  components: {
      Historico,
    }
}
</script>
