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
                  Its just 15 days work so I could not refine it properly.
                  Consider it as a just beta version. I learnt many things during this app development.
                  Hopefully you will like it.

                  You might be intrested in exact code too. 
                  <br>
                  <br>
                  Hosted app is present at <b>https://user-profile-vue.herokuapp.com/</b>
                  <br>
                  <br>
                  Follow below steps to run this app on your local machine:
                  <br>
                  <div style="font-weight:800">
                    1. Install git.
                    <br>
                    2. Create new folder and open git bash there.\n
                    <br>
                    3. Run Command "git clone https://github.com/dipti1192/VueJSProfile.git"
                    <br>
                    4. Go to user-profile folder by running "cd user-profile"
                    <br>
                    5. Run npm install
                    <br>
                    6. Run npm run serve
                    <br>
                    7. It will start your application locally like localhost:8080
                    <br>
                    8. Run mentioned URL in chrome.
                    <br>
                    9. Open cloned folder in Visual Studio Code to check exact code.
                  </div>
                  <br>
                  <div>
                      I would like to thank all of your friends for helping me in this idea.
                      Specially HARSHRAJ helped me a lot. He is really super energetic person. 
                      In fact I was planning this application thing since you decided to go USA. 
                      It was supposed to be your farewell gift but I couldn't manage to do so.
                      But one day when I was talking with him for very first time on call about your 
                      birthday plan, 
                      unknowingly his words pushed me to make this app into reality.
                      Thank you so much HARSHRAJ for that.
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
      aboutText: `` 
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
    font-size: 40px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
  
</style>
