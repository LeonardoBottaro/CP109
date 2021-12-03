<template>
<div>
  <hello-world />
  <h1>{{title}}</h1>
  <v-row>
      <v-col
        v-for="(data,i) in events"
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

  export default {
    name: 'Home',
    data(){
      return{
        titleview: this.$store.state.title,
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
      },
      events(){
        return this.$store.state.events
      }
    },
    async created(){
      this.$store.dispatch("fetchEvents")
    }
  }
</script>


