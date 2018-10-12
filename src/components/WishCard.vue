<template>
<v-flex xs12  style="padding:55px;overflow-y:hidden">
    <div class="cube-face">
        <div class="cube-face-front">HAPPY </br> BIRTHDAY </br> ANIKET!</div>
        <div class="baloon"><img src="http://www.iconhot.com/icon/png/event-people/512/balloons-1.png"/></div>        
    </div>
    <div class="box">
        <img
          v-bind:src="require('../assets/Aniket1.jpg')"
          width="500"
          height="500"
        >
    </div>
</v-flex>
</template>
<script>
export default {
  name: 'WishCard',
  data () {
      return {
        
      }
  },
 methods:{
    redirectToPage(page){
      this.$router.push(page);
    },
    getImgURL(img){
      return require(`../assets/friends/${img}`);
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
