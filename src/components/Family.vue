<template>
<v-flex xs12  style="padding:55px;">
  <v-toolbar color="cyan darken-4" flat>
    <v-btn style="color:white" icon>
        <v-icon>cake</v-icon>
    </v-btn>
    <v-toolbar-title style="color:white">WE LOVE YOU!</v-toolbar-title>
  </v-toolbar>
  <!--<v-layout>-->
    <v-flex xs12 xs6>
      <v-card>
        <v-img
          class="white--text"
          height="450px"
          v-bind:src="getImgURL('Family.jpg')"
        >
        </v-img>
        <v-layout>
          <v-flex xs12 style="margin-top:25px">
            <v-card color="#f5f5f5" v-for="photo in photos" :key="photo.id" class="black--text">
                <v-layout>
                <v-flex xs4 >
                    <v-img style="margin: 15px"
                    v-bind:src="getImgURL(photo.icon)"
                    height="300px"
                    width="350px"
                    contain
                    ></v-img>
                </v-flex>
                <v-flex xs8>
                    <v-card-title primary-title>
                    <div>
                        <div class=" boxheadline">{{photo.title}}</div>
                        <div class="boxText">{{photo.msg}}</div>
                    </div>
                    </v-card-title>
                </v-flex>
                </v-layout>
                <v-divider light></v-divider>
                
            </v-card>
          </v-flex>
        </v-layout>
        
      </v-card>
    </v-flex>
  <!--</v-layout>-->
</v-flex>
</template>
<script>
export default {
  name: 'WishCard',
  data () {
      return {
        photos: [{
                    title: 'Leela Mahapure', icon: 'Mummy.jpg',id:'1',
                    msg:`Happy Birthday Anu! I remember you daily.
                        Khup Motha Ho! GOD BLESS YOU BALA!`
                    },
                    {
                        title: 'Sunil Mahapure', icon: 'Pappa.jpg',id:'2',
                        msg:`Many Many Happy Returns of the Day Aniket and
                        Wish you great sucess in life !`
                    },
                    {
                        title: 'Kiran Mahapure', icon: 'Di.jpg',id:'3',
                        msg: `Wish you a very Happy Birthday and a Successful life ahead.. 
                            Distance doesn't matter when the 
                            hearts are connected, Wish you all the happiness my baby brother..love you...!`
                    },
                ]
      }
  },
 methods:{
    redirectToPage(page){
      this.$router.push(page);
    },
    getImgURL(img){
      return require(`../assets/wishes/${img}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    margin-top: -22%;
    margin-left: 50%;

}
.cube{
    perspective:500px;
    perspective-origin:50% 300px;
}
.cube-face{
    margin:100px;
    top:10px;
    right:55px;
    width:100px;
    height:100px;
    position:relative;
    transform-style:preserve-3d;
    animation:up 5s  infinite linear; 
    transition:width 10s linear;
    opacity:1;
   
}
div:hover{
    width:100px;
}
.cube-face div{
    width:100px;
    height:100px;
    position:relative;
    font-size:55px !important;
    text-align: center;
    color:red;
    font-family: 'Handlee', cursive;
    background:radial-gradient(circle,yellow,white,pink);
    background-size:400px 500px;
}
.cube-face-front{

    transform:translateX(25px);
    
}

.baloon{
    margin:-50px;
    top:10px;
    right:70px;
    width:100px;
    height:100px
    img{float:top ;}
    position:absolute;
    transform-style:preserve-3d;
    animation:down 5s infinite  linear;
    transition:width 10s linear;
     opacity:0.7;
}
@keyframes up{
    from {
    
    transform:translate(0px,500px);
    -webkit-transform:translate(0px,-300px);
    
    }
    to {
    
    transform:translate(0px, 0px);
    -webkit-transform:translate(0px, 50px);
    
    }
}
@keyframes down{
    from {
    
    transform:translate(500px,500px);
    -webkit-transform:translate(0px,400px);
    
    }
    to {
    
    transform:translate(0px, 0px);
    -webkit-transform:translate(0px,-200px);
    
    }
}
</style>
