<template>
<v-flex>
  <v-card
    class="fullcontainer"
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <!--<v-toolbar-title>Title</v-toolbar-title>-->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  <v-layout
    wrap
    style="height: 200px;"
  >
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar size="50px">
            <img src="../assets/aniket.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Aniket Mahapure</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="redirectToPage(item.path)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</v-flex>
</template>

<script>
export default {
  name: 'HeaderBar',
  data () {
    return {
      drawer: null,
      items: [
        // { title: 'Home', icon: 'dashboard', path:'/home'},
        { title: 'Birthday', icon: 'cake', path:'/happy-birthday' },
        { title: 'Friends', icon: 'people', path:'/friends' },
        { title: 'Photography', icon: 'photo_camera', path:'/photos' },
        { title: 'About', icon: 'question_answer', path:'/about' }
      ]
    }
  },
  methods:{
    redirectToPage(page){
      return this.$router.push(page)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullcontainer{
   height: 8% !important;
   width: 100% !important;
   position: relative;
}
</style>
