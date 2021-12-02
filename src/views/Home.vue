<template>
<div>
  <hello-world />
  <h1>{{title}}</h1>
  <v-btn @click="fetch()">FETCH SOMETHING</v-btn>
  <v-row>
      <v-col
        v-for="(data,i) in myCards"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
      <MyCard :cardId="i" :cardInfo="data"></MyCard>
      </v-col>
    </v-row>
</div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import MyCard from '../components/MyCard'
  import axios from 'axios'

  export default {
    name: 'Home',
    data(){
      return{
        titleview: this.$store.state.title
      }
    },

    components: {
      HelloWorld,
      MyCard,
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.smallTitle
      }
    },
    methods:{
      fetch(){
        console.log('as') 
        axios.get['https://agenda-balaguer.herokuapp.com/api/event']
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
      }
    }
  }
</script>


