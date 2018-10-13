<!-- <template>
  <v-layout row style="padding:50px;">
    <v-flex xs12>
      <v-card>
        <v-toolbar color="cyan darken-4" flat>
          <v-btn style="color:white" icon>
            <v-icon>camera</v-icon>
          </v-btn>
          <v-toolbar-title style="color:white">Clicks</v-toolbar-title>
        </v-toolbar>
      </v-card>
      <v-carousel style="margin-top:10px;">
        <v-carousel-item
          v-for="(photo,i) in photos"
          :key="photo.id"
          :src="getImgURL(photo.icon)"
          reverse-transition="fade"
          transition="fade"
        ></v-carousel-item>
      </v-carousel>
    </v-flex>
  
  </v-layout>
</template> -->
<template>
  <v-layout row style="padding:50px;">
    <v-flex xs12>
      <v-card>
        <v-toolbar flat>
          <v-btn icon>
            <v-icon>camera</v-icon>
          </v-btn>
          <v-toolbar-title>Clicks</v-toolbar-title>
        </v-toolbar>
        <v-subheader>May</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="photo in photos" :key="photo.id" xs4>
              <img :src="getImgURL(photo.icon)" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        <v-subheader>June</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="photo in photos" :key="photo.id" xs4>
              <img :src="getImgURL(photo.icon)" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Photography',
  data () {
    return {
      drawer: null,
      photos: [
        { title: 'Bird', icon: 'Bird.jpg',id:'1'},
        { title: 'Birthday', icon: 'Earphones.jpg',id:'2'},
        { title: 'Photography', icon: 'Friends.jpg',id:'5'},
        { title: 'Photography', icon: 'Slippers.jpg',id:'9'},
      ]
    }
  },
 methods:{
    redirectToPage(page){
      this.$router.push(page);
    },
    getImgURL(img){
      return require(`../assets/photography/${img}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
