<template>
  <v-layout row style="padding:50px;">
    <v-flex xs12>
      <v-card>
        <v-toolbar color="cyan darken-4" flat>
          <v-btn style="color:white" icon>
            <v-icon>camera</v-icon>
          </v-btn>
          <v-toolbar-title style="color:white">CRAZY MEMORIES</v-toolbar-title>
        </v-toolbar>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="(photo, index) in photos" :key="photo.id" xs4 class="block">
              <img :src="getImgURL(index)" class="image" alt="lorem" width="100%" height="100%">
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
      photos: [],
    }
  },
  created(){
    for(let i=1;i<80;i++){
      this.photos.push(i);
    }
  },
  methods:{
    redirectToPage(page){
      this.$router.push(page);
    },
    getImgURL(img){
      return require(`../assets/Memories/${img+1}.jpg`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .block {
    max-height:350px;
    padding:5px;
    min-height: 350px;
  }
</style>
