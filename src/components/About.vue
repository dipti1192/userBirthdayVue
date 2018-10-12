<template>
  <v-flex xs12  style="padding:55px;">
    <v-toolbar color="cyan darken-4" flat>
    <v-btn style="color:white" icon>
        <v-icon>book</v-icon>
    </v-btn>
    <v-toolbar-title class="headline" style="color:white">About</v-toolbar-title>
  </v-toolbar>
    <v-card color="">
      
          <v-flex xs12 style="margin-top:15px">
            <v-card color="" class="black--text cardblock">
              <!--<v-card-title primary-title>
                <div class="headline">About</div>
              </v-card-title>-->
              <v-card-actions>
                <div class="subheading cardtext">
                  {{aboutText}}
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
    </v-card>  
  </v-flex>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      aboutText: `Listen to your favorite artists and albums whenever and wherever, online and offline.
                  Listen to your favorite artists and albums whenever and wherever, online and offline.
                  Listen to your favorite artists and albums whenever and wherever, online and offline.
                  Listen to your favorite artists and albums whenever and wherever, online and offline.
                  Listen to your favorite artists and albums whenever and wherever, online and offline.
                  Listen to your favorite artists and albums whenever and wherever, online and offline.
                  Listen to your favorite artists and albums whenever and wherever, online and offline.`
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
  .cardtext{
    padding: 10px;
    font-weight: 600;
    text-align: left;
    font-size: 30px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .cardblock{
    min-height: 700px;
  }
</style>
