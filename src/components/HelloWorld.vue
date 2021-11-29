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
      <v-col cols="12">
        <v-img
          src="https://acessoacademico.com.br/mobile/img/logo.png"
          class="my-3"
          contain
          height="400"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{titleview}} ao Acesso Academico
        </h1>


        <p class="subheading font-weight-regular">
          Para qualquer tipo de assistencia nos procure em qualquer meio de comunicação
        </p>
      </v-col>
    </v-row>
  </v-container>

<v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text width: 100%"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data2(){
      return{
        titleview: this.$store.state.title
      }
    },

    data: () => ({
      drawer: false,
      group: null,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
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
      currentTime(){
        const current = new Date()
        const time = current.getHours() + ":" + current.getMinutes()
        const currentTime = time
        return currentTime
      }
    }
  }
</script>
