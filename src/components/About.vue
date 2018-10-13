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
                  This is a single page application using Vue.js, Vuetify and Jquery.
                  Application is hosted on platform of Heroku.
                  Its specially for you Aniket as a small Birthday Gift. 
                  Its just 15 days work so could not refined it properly. I will keep working on it going forward too.
                  Consider it as a just beta version. I learnt many things during this app development.
                  Hopefully you will like it.

                  You might be intrested in exact code too. 
                  <br>
                  <br>
                  To check exact code follow below steps.
                  <br>
                  <div>
                    1.Install git.
                    <br>
                    2.Create new folder and open git bash there.\n
                    <br>
                    3.Run Command "git clone https://github.com/dipti1192/VueJSProfile.git"
                    <br>
                    4.Go to user-profile folder by running "cd user-profile"
                    <br>
                    5.Run npm install
                    <br>
                    6.Run npm run serve
                    <br>
                    7. It will start your application locally like localhost:8080
                    <br>
                    8.Run mentioned URL in chrome.
                  </div>
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
      aboutText: `This is a single page application using Vue.js, Vuetify and Jquery.
      Application is hosted on platform of Heroku.
      Its specially for you Aniket as a small Birthday Gift. 
      Its just 15 days work so could not refined it properly. I will keep working on it going forward too.
      Consider it as a just beta version. I learnt many things during this app development.
      Hopefully you will like it.

      I know you are intrested in exact code too. 
      To check it follow below steps.
      1.Install git.
      2.Create new folder and open git bash there.\n
      3.Run Command "git clone https://github.com/dipti1192/VueJSProfile.git"
      4.Go to user-profile folder by running "cd user-profile"
      5.Run npm install
      6.Run npm run serve
      7. It will start your application locally like localhost:8080
      8.Run mentioned URL in chrome.
      ` 
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
