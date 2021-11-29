<template>
<div>
    <v-system-bar
      dark
      color="primary"
    >
      <v-spacer></v-spacer>
      <span>{{currentTime()}}</span>
    </v-system-bar>
  <v-card
    class="mx-auto overflow-hidden"
    height="200"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Acesso Academico</v-toolbar-title>
      <v-main>
        <router-view/>
      </v-main>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="goToHome()">Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-book-open-blank-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="goToNotas()">Notas/Faltas</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-clipboard-text-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="goToHistorico()">Historico</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cards-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="goToCards()">Cards</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Bem vindo as Notas e Faltas
        </h1>
        <p class="subheading font-weight-regular">
          Bora ver suas Notas!
        </p>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Notas',

    data: () => ({
      drawer: false,
      group: null,
    }),
    data2(){
      return{
        counter:0
      }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    methods:{
      goToCards(){
        this.$router.push('/cards')
      },
      goToNotas(){
        this.$router.push('/notas')
      },
      goToHistorico(){
        this.$router.push('/historico')
      },
      goToHome(){
        this.$router.push('/')
      },
      increment(){
        console.log("Count++")
        this.counter=this.counter+1
      },
      decrease(){
        console.log("Decrease--")
        this.counter--
      },
      currentTime(){
        const current = new Date()
        const time = current.getHours() + ":" + current.getMinutes()
        const currentTime = time
        return currentTime
      }
    }
  }
</script>