<template>
<div>
  <hello-world />
  <v-row>
      <v-col
        v-for="{data,i} in myCards"
        :key="i"
        cols="12"
        sm="4"
      >
      {{i}}
      <MyCard :cardId="i" :cardInfo=data></MyCard>
      </v-col>
    </v-row>
</div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import MyCard from '../components/MyCard'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      MyCard,
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      }
    }
  }
</script>


