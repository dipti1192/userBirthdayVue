<template>
  <!--<v-container>-->
    <div style="padding:50px;width:100%;height:100%"> 
		<div class="loading"></div>
		<audio class="song" controls loop>
			<source src="hbd.mp3"></source>
		Your browser isn't invited for super fun audio time.
		</audio>
		<div class="balloons text-center" id="b1">
			<h2 style="color:#F2B300;">A</h2>
		</div>
		<div class="balloons text-center" id="b2">
			<h2 style="color:#0719D4;">N</h2>
		</div>
		<div class="balloons text-center" id="b3">
			<h2 style="color:#D14D39;">I</h2>
		</div>
		<div class="balloons text-center" id="b4">
			<h2 style="color:#8FAD00;">K</h2>
		</div>
		<div class="balloons text-center" id="b5">
			<h2 style="color:#8377E4;">E</h2>
		</div>
		<div class="balloons text-center" id="b6">
			<h2 style="color:#99C96A;">T</h2>
		</div>
		
		<img src="../assets/Balloon-Border.png" width="100%" class="balloon-border">
		<div class="containers">
			<div class="row">
				<div class="col-md-2 col-xs-2 bulb-holder">
					<div class="bulb" id="bulb_yellow"></div>
				</div>
				<div class="col-md-2 col-xs-2 bulb-holder">
					<div class="bulb" id="bulb_red"></div>
				</div>
				<div class="col-md-2 col-xs-2 bulb-holder">
					<div class="bulb" id="bulb_blue"></div>
				</div>
				<div class="col-md-2 col-xs-2 bulb-holder">
					<div class="bulb" id="bulb_green"></div>
				</div>
				<div class="col-md-2 col-xs-2 bulb-holder">
					<div class="bulb" id="bulb_pink"></div>
				</div>
				<div class="col-md-2 col-xs-2 bulb-holder">
					<div class="bulb" id="bulb_orange"></div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 text-center">
					<img src="../assets/banner.png" class="bannar">
				</div>
			</div>
			
			<div class="row cake-cover">
				<div class="col-md-12 texr-center">
					<div class="cake">
					<div class="velas">
						<div class="fuego"></div>
						<div class="fuego"></div>
						<div class="fuego"></div>
						<div class="fuego"></div>
						<div class="fuego"></div>
					</div>
					<div class="cobertura"></div>
					<div class="bizcocho"></div>
					</div>
				</div>
			</div>
			<div class="row message">
				<div class="col-md-12">
					<p>Today is...</p>
					<p>as beautiful as other days</p>
					<p>but you realize</p>
					<p>another year has gone</p>
					<p>in a blink of the eyes</p>
					<p><strong>however</strong></p>
					<p>Do you know..?</p>
					<p>today is just special</p>
					<p>so special to you</p>
					<p>that's why</p>
					<p>Let's make it...</p>
					<p>the best celebration ever</p>
					<p>and let me share...</p>
					<p>a piece of happiness to you</p>
					<p>I made all this...</p>
					<p>as a birthday present to you</p>
					<p>thanks for being there</p>
					<p>thanks for the friendship we made</p>
					<p>thanks for everything</p>
					<p>I wish you all the best</p>
					<p>May your life be at ease</p>
					<p>May all your wishes come true</p>
					<p>Remember</p>
					<p>your ambitions</p>
					<p>you live as a free bird...</p>
					<p>flying in the blue sky</p>
					<p>Now things are different...</p>
					<p>real story of your life</p>
					<p>is just about to begin</p>
					<p>I hope</p>
					<p>you'll find...</p>
					<p>happiness along the way</p>
					<p>keep your spirits up</p>
					<p>enjoy every single moment...</p>
					<p>that you experiecne today</p>
					<p>fill it with your most beautiful smile</p>
					<p>and make it the best memory..</p>
					<p>lastly...</p>
					<p>I'd like to wish you one more time</p>
					<p>a very Happy Birthday</p>
				</div>
			</div>
			<div class="navbar navbar-fixed-bottom">
				<div class="row">
					<div class="col-md-6 text-center col-md-offset-3">
						<button class="btn btn-primary" id="turn_on">Turn On Lights</button>
						<button class="btn btn-primary" id="play">Play Music</button>
						<button class="btn btn-primary" id="bannar_coming">Let's Decorate</button>
						<button class="btn btn-primary" id="balloons_flying">Fly With Balloons</button>
						<button class="btn btn-primary" id="cake_fadein">Most Delicious Cake Ever</button>
						<button class="btn btn-primary" id="light_candle"> Light Candle</button>
						<button class="btn btn-primary" id="wish_message">Happy Birthday</button>
						<button class="btn btn-primary" id="story">A mesage for you</button>
					</div>
				</div>
				
			</div>
		</div>
</div>
</template>
 <script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  created(){
    // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 		// ga('create', 'UA-58229732-1', 'auto');
		// ga('send', 'pageview');
    }
}
</script>
 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
	background-color: blue;
	border: red solid 1px;
	min-height: 500px;
}
  /* Absolute Center CSS Spinner */
.loading {
  position: fixed;
  z-index: 99999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
 /* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
}
 /* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
 .loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: #FFF 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, #FFF -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: #FFF 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, #FFF -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}
 /* Animation */
 @-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.peach {
	background-color: #FFDAB9;
	
}
.peach-after {
	-webkit-animation:peach_alive linear 8s infinite;
	-moz-animation:peach_alive linear 8s infinite;
	-o-animation:peach_alive linear 8s infinite;
	-ms-animation:peach_alive linear 8s infinite;
	animation:peach_alive linear 8s infinite;
}
 @-webkit-keyframes peach_alive {
	0%{
		background-color: #FFDAB9;
	}
	25%{
		background-color: #FFE4B5;
	}
	50%{
		background-color: #FFDAB9;
	}
	75%{
		background-color: #FFEFD5;
	}
	100%{
		background-color: #FFDAB9;
	}
}
@-moz-keyframes peach_alive {
	0%{
		background-color: #FFDAB9;
	}
	25%{
		background-color: #FFE4B5;
	}
	50%{
		background-color: #FFDAB9;
	}
	75%{
		background-color: #FFEFD5;
	}
	100%{
		background-color: #FFDAB9;
	}
}
 @-o-keyframes peach_alive {
	0%{
		background-color: #FFDAB9;
	}
	25%{
		background-color: #FFE4B5;
	}
	50%{
		background-color: #FFDAB9;
	}
	75%{
		background-color: #FFEFD5;
	}
	100%{
		background-color: #FFDAB9;
	}
}
 @-ms-keyframes peach_alive {
	0%{
		background-color: #FFDAB9;
	}
	25%{
		background-color: #FFE4B5;
	}
	50%{
		background-color: #FFDAB9;
	}
	75%{
		background-color: #FFEFD5;
	}
	100%{
		background-color: #FFDAB9;
	}
}
 @keyframes peach_alive {
	0%{
		background-color: #FFDAB9;
	}
	25%{
		background-color: #FFE4B5;
	}
	50%{
		background-color: #FFDAB9;
	}
	75%{
		background-color: #FFEFD5;
	}
	100%{
		background-color: #FFDAB9;
	}
}
 .bulb {
	width: 50px;
	height: 50px;
	margin: auto;
	background-repeat: no-repeat no-repeat;
	background-position:center 0px;
	background-size: 50px 50px;
}
 .bulb-holder {
	height: 70px;
}
 .bulb-glow-yellow {
	background-image: url('../assets/bulb_yellow.png');
	-webkit-animation: bulb_glow_yellow linear 5s;
	-moz-animation: bulb_glow_yellow linear 5s;
	-o-animation: bulb_glow_yellow linear 5s;
	-ms-animation: bulb_glow_yellow linear 5s;
	animation: bulb_glow_yellow linear 5s;
}
 @-webkit-keyframes bulb_glow_yellow {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_yellow.png');
		opacity: 1;
	}
}
@-moz-keyframes bulb_glow_yellow {
	0%{
		background-image: url('bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_yellow.png');
		opacity: 1;
	}
}
@-o-keyframes bulb_glow_yellow {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('bulb_yellow.png');
		opacity: 1;
	}
}
@-ms-keyframes bulb_glow_yellow {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_yellow.png');
		opacity: 1;
	}
}
@keyframes bulb_glow_yellow {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_yellow.png');
		opacity: 1;
	}
}
 .bulb-glow-red {
	background-image: url('../assets/bulb_red.png');
	-webkit-animation: bulb_glow_red linear 5s;
	-moz-animation: bulb_glow_red linear 5s;
	-o-animation: bulb_glow_red linear 5s;
	-ms-animation: bulb_glow_red linear 5s;
	animation: bulb_glow_red linear 5s;
}
 @-webkit-keyframes bulb_glow_red {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_red.png');
		opacity: 1;
	}
}
@-moz-keyframes bulb_glow_red {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_red.png');
		opacity: 1;
	}
}
@-o-keyframes bulb_glow_red {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_red.png');
		opacity: 1;
	}
}
@-ms-keyframes bulb_glow_red {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_red.png');
		opacity: 1;
	}
}
@keyframes bulb_glow_red {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_red.png');
		opacity: 1;
	}
}
.bulb-glow-blue {
	background-image: url('../assets/bulb_blue.png');
	-webkit-animation: bulb_glow_blue linear 5s;
	-moz-animation: bulb_glow_blue linear 5s;
	-o-animation: bulb_glow_blue linear 5s;
	-ms-animation: bulb_glow_blue linear 5s;
	animation: bulb_glow_blue linear 5s;
}
 @-webkit-keyframes bulb_glow_blue {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_blue.png');
		opacity: 1;
	}
}
@-moz-keyframes bulb_glow_blue {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_blue.png');
		opacity: 1;
	}
}
@-o-keyframes bulb_glow_blue {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_blue.png');
		opacity: 1;
	}
}
@-ms-keyframes bulb_glow_blue {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_blue.png');
		opacity: 1;
	}
}
@keyframes bulb_glow_blue {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_blue.png');
		opacity: 1;
	}
}
 .bulb-glow-green {
	background-image: url('../assets/bulb_green.png');
	-webkit-animation: bulb_glow_green linear 5s;
	-moz-animation: bulb_glow_green linear 5s;
	-o-animation: bulb_glow_green linear 5s;
	-ms-animation: bulb_glow_green linear 5s;
	animation: bulb_glow_green linear 5s;
}
 @-webkit-keyframes bulb_glow_green {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_green.png');
		opacity: 1;
	}
}
@-moz-keyframes bulb_glow_green {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_green.png');
		opacity: 1;
	}
}
@-o-keyframes bulb_glow_green {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_green.png');
		opacity: 1;
	}
}
@-ms-keyframes bulb_glow_green {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_green.png');
		opacity: 1;
	}
}
@keyframes bulb_glow_green {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_green.png');
		opacity: 1;
	}
}
 .bulb-glow-pink {
	background-image: url('../assets/bulb_pink.png');
	-webkit-animation: bulb_glow_pink linear 5s;
	-moz-animation: bulb_glow_pink linear 5s;
	-o-animation: bulb_glow_pink linear 5s;
	-ms-animation: bulb_glow_pink linear 5s;
	animation: bulb_glow_pink linear 5s;
}
 @-webkit-keyframes bulb_glow_pink {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_pink.png');
		opacity: 1;
	}
}
@-moz-keyframes bulb_glow_pink {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_pink.png');
		opacity: 1;
	}
}
@-o-keyframes bulb_glow_pink {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_pink.png');
		opacity: 1;
	}
}
@-ms-keyframes bulb_glow_pink {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_pink.png');
		opacity: 1;
	}
}
@keyframes bulb_glow_pink {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_pink.png');
		opacity: 1;
	}
}
 .bulb-glow-orange {
	background-image: url('../assets/bulb_orange.png');
	-webkit-animation: bulb_glow_orange linear 5s;
	-moz-animation: bulb_glow_orange linear 5s;
	-o-animation: bulb_glow_orange linear 5s;
	-ms-animation: bulb_glow_orange linear 5s;
	animation: bulb_glow_orange linear 5s;
}
 @-webkit-keyframes bulb_glow_orange {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_orange.png');
		opacity: 1;
	}
}
@-moz-keyframes bulb_glow_orange {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_orange.png');
		opacity: 1;
	}
}
@-o-keyframes bulb_glow_orange {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_orange.png');
		opacity: 1;
	}
}
@-ms-keyframes bulb_glow_orange {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_orange.png');
		opacity: 1;
	}
}
@keyframes bulb_glow_orange {
	0%{
		background-image: url('../assets/bulb.png');
		opacity: 0;
	}
	50%{
		opacity: 1;
	}
	100%{
		background-image: url('../assets/bulb_orange.png');
		opacity: 1;
	}
}
 /*after music*/
.bulb-glow-yellow-after {
	background-image: url('../assets/bulb_yellow.png');
	-webkit-animation: bulb_glow_yellow_after linear 1s infinite;
	-moz-animation: bulb_glow_yellow_after linear 1s infinite;
	-o-animation: bulb_glow_yellow_after linear 1s infinite;
	-ms-animation: bulb_glow_yellow_after linear 1s infinite;
	animation: bulb_glow_yellow_after linear 1s infinite;
}
 @-webkit-keyframes bulb_glow_yellow_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_yellow.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-moz-keyframes bulb_glow_yellow_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_yellow.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-o-keyframes bulb_glow_yellow_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_yellow.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-ms-keyframes bulb_glow_yellow_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_yellow.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@keyframes bulb_glow_yellow_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_yellow.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
 .bulb-glow-red-after {
	background-image: url('../assets/bulb_red.png');
	-webkit-animation: bulb_glow_red_after linear 1.2s infinite;
	-moz-animation: bulb_glow_red_after linear 1.2s infinite;
	-o-animation: bulb_glow_red_after linear 1.2s infinite;
	-ms-animation: bulb_glow_red_after linear 1.2s infinite;
	animation: bulb_glow_red_after linear 1.2s infinite;
}
 @-webkit-keyframes bulb_glow_red_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_red.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-moz-keyframes bulb_glow_red_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_red.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-o-keyframes bulb_glow_red_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_red.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-ms-keyframes bulb_glow_red_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_red.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@keyframes bulb_glow_red_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_red.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
 .bulb-glow-blue-after {
	background-image: url('../assets/bulb_blue.png');
	-webkit-animation: bulb_glow_blue_after linear 1.4s infinite;
	-moz-animation: bulb_glow_blue_after linear 1.4s infinite;
	-o-animation: bulb_glow_blue_after linear 1.4s infinite;
	-ms-animation: bulb_glow_blue_after linear 1.4s infinite;
	animation: bulb_glow_blue_after linear 1.4s infinite;
}
 @-webkit-keyframes bulb_glow_blue_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_blue.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-moz-keyframes bulb_glow_blue_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_blue.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-o-keyframes bulb_glow_blue_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_blue.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-ms-keyframes bulb_glow_blue_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_blue.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@keyframes bulb_glow_blue_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_blue.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
.bulb-glow-green-after {
	background-image: url('../assets/bulb_green.png');
	-webkit-animation: bulb_glow_green_after linear 1.8s infinite;
	-moz-animation: bulb_glow_green_after linear 1.8s infinite;
	-o-animation: bulb_glow_green_after linear 1.8s infinite;
	-ms-animation: bulb_glow_green_after linear 1.8s infinite;
	animation: bulb_glow_green_after linear 1.8s infinite;
}
 @-webkit-keyframes bulb_glow_green_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_green.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
 @-moz-keyframes bulb_glow_green_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_green.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-o-keyframes bulb_glow_green_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_green.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-ms-keyframes bulb_glow_green_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_green.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@keyframes bulb_glow_green_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_green.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
.bulb-glow-pink-after {
	background-image: url('../assets/bulb_pink.png');
	-webkit-animation: bulb_glow_pink_after linear 2s infinite;
	-moz-animation: bulb_glow_pink_after linear 2s infinite;
	-o-animation: bulb_glow_pink_after linear 2s infinite;
	-ms-animation: bulb_glow_pink_after linear 2s infinite;
	animation: bulb_glow_pink_after linear 2s infinite;
}
 @-webkit-keyframes bulb_glow_pink_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_pink.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-moz-keyframes bulb_glow_pink_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_pink.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-o-keyframes bulb_glow_pink_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_pink.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-ms-keyframes bulb_glow_pink_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_pink.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@keyframes bulb_glow_pink_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_pink.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
.bulb-glow-orange-after {
	background-image: url('../assets/bulb_orange.png');
	-webkit-animation: bulb_glow_orange_after linear 2.2s infinite;
	-moz-animation: bulb_glow_orange_after linear 2.2s infinite;
	-o-animation: bulb_glow_orange_after linear 2.2s infinite;
	-ms-animation: bulb_glow_orange_after linear 2.2s infinite;
	animation: bulb_glow_orange_after linear 2.2s infinite;
}
 @-webkit-keyframes bulb_glow_orange_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_orange.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-moz-keyframes bulb_glow_orange_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_orange.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-o-keyframes bulb_glow_orange_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_orange.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@-ms-keyframes bulb_glow_orange_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_orange.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
@keyframes bulb_glow_orange_after {
	0%{
		background-image: url('../assets/bulb.png');
	}
	50%{
		background-image: url('../assets/bulb_orange.png');
	}
	100%{
		background-image: url('../assets/bulb.png');
	}
}
audio {
	display: none;
}
 .bannar {
	max-width: 100%;
	-webkit-transform:translate(0px,-500px);
	-moz-transform:translate(0px,-500px);
	-o-transform:translate(0px,-500px);
	-ms-transform:translate(0px,-500px);
	transform:translate(0px,-500px);
 }
.bannar-come {
	-webkit-animation: bannar_come linear 6s;
	-webkit-transform:translate(0px,0px);
	-moz-animation: bannar_come linear 6s;
	-moz-transform:translate(0px,0px);
	-o-animation: bannar_come linear 6s;
	-o-transform:translate(0px,0px);
	-ms-animation: bannar_come linear 6s;
	-ms-transform:translate(0px,0px);
	animation: bannar_come linear 6s;
	transform:translate(0px,0px);
}
@-webkit-keyframes bannar_come {
	0%{
		-webkit-transform:translate(0px,-1000px);
	}
	33%{
		-webkit-transform:translate(0px,0px);
		-webkit-transform:rotate(10deg);
		/*-webkit-transform:scale(1.5);*/
	}
	66% {
		-webkit-transform:translate(0px,100px);
		-webkit-transform:rotate(-10deg);
	}
	100% {
		-webkit-transform:translate(0px,0px);
	}
}
@-moz-keyframes bannar_come {
	0%{
		-moz-transform:translate(0px,-1000px);
	}
	33%{
		-moz-transform:translate(0px,0px);
		-moz-transform:rotate(10deg);
		/*-webkit-transform:scale(1.5);*/
	}
	66% {
		-moz-transform:translate(0px,100px);
		-moz-transform:rotate(-10deg);
	}
	100% {
		-moz-transform:translate(0px,0px);
	}
}
@-o-keyframes bannar_come {
	0%{
		-o-transform:translate(0px,-1000px);
	}
	33%{
		-o-transform:translate(0px,0px);
		-o-transform:rotate(10deg);
		/*-webkit-transform:scale(1.5);*/
	}
	66% {
		-o-transform:translate(0px,100px);
		-o-transform:rotate(-10deg);
	}
	100% {
		-o-transform:translate(0px,0px);
	}
}
@-ms-keyframes bannar_come {
	0%{
		-ms-transform:translate(0px,-1000px);
	}
	33%{
		-ms-transform:translate(0px,0px);
		-ms-transform:rotate(10deg);
		/*-webkit-transform:scale(1.5);*/
	}
	66% {
		-ms-transform:translate(0px,100px);
		-ms-transform:rotate(-10deg);
	}
	100% {
		-ms-transform:translate(0px,0px);
	}
}
@keyframes bannar_come {
	0%{
		transform:translate(0px,-1000px);
	}
	33%{
		transform:translate(0px,0px);
		transform:rotate(10deg);
		/*-webkit-transform:scale(1.5);*/
	}
	66% {
		transform:translate(0px,100px);
		transform:rotate(-10deg);
	}
	100% {
		transform:translate(0px,0px);
	}
}
 .balloons {
	position: fixed;
	bottom: -200px;
	opacity: 0.6;
	z-index: 99;
	width: 100px;
	height: 183px;
	background-repeat: no-repeat no-repeat;
	background-size: 100px 183px;
}
.balloons h2 {
	text-transform: uppercase;
	font-family: 'Signika', sans-serif;
	font-size: 50px;
	color: #BF4136;
	text-shadow: 5px 5px 5px #FFF;
	display: none;
}
#b1,#b11 {
	background-image: url('../assets/b1.png');
}
#b2,#b22 {
	background-image: url('../assets/b2.png');
}
#b3,#b33 {
	background-image: url('../assets/b3.png');
}
#b4,#b44{
	background-image: url('../assets/b4.png');
}
#b5,#b55{
	background-image: url('../assets/b5.png');
}
#b6,#b66{
	background-image: url('../assets/b6.png');
}
#b7,#b77{
	background-image: url('../assets/b7.png');
}
.balloons-rotate-behaviour-one {
	-webkit-animation: balloons_rotate_one linear 10s infinite;
	-webkit-transform: rotate(30deg);
	-moz-animation: balloons_rotate_one linear 10s infinite;
	-moz-transform: rotate(30deg);
	-o-animation: balloons_rotate_one linear 10s infinite;
	-o-transform: rotate(30deg);
	-ms-animation: balloons_rotate_one linear 10s infinite;
	-ms-transform: rotate(30deg);
	animation: balloons_rotate_one linear 10s infinite;
	transform: rotate(30deg);
}
@-webkit-keyframes balloons_rotate_one {
	0% {
		-webkit-transform: rotate(30deg);
	}
	50% {
		-webkit-transform: rotate(-30deg);
	}
	100% {
		-webkit-transform: rotate(30deg);
	}
}
@-moz-keyframes balloons_rotate_one {
	0% {
		-moz-transform: rotate(30deg);
	}
	50% {
		-moz-transform: rotate(-30deg);
	}
	100% {
		-moz-transform: rotate(30deg);
	}
}
@-o-keyframes balloons_rotate_one {
	0% {
		-o-transform: rotate(30deg);
	}
	50% {
		-o-transform: rotate(-30deg);
	}
	100% {
		-o-transform: rotate(30deg);
	}
}
@-ms-keyframes balloons_rotate_one {
	0% {
		-ms-transform: rotate(30deg);
	}
	50% {
		-ms-transform: rotate(-30deg);
	}
	100% {
		-ms-transform: rotate(30deg);
	}
}
@keyframes balloons_rotate_one {
	0% {
		transform: rotate(30deg);
	}
	50% {
		transform: rotate(-30deg);
	}
	100% {
		transform: rotate(30deg);
	}
}
.balloons-rotate-behaviour-two {
	-webkit-animation: balloons_rotate_two linear 10s infinite;
	-webkit-transform: rotate(-20deg);
	-moz-animation: balloons_rotate_two linear 10s infinite;
	-moz-transform: rotate(-20deg);
	-o-animation: balloons_rotate_two linear 10s infinite;
	-o-transform: rotate(-20deg);
	-ms-animation: balloons_rotate_two linear 10s infinite;
	-ms-transform: rotate(-20deg);
	animation: balloons_rotate_two linear 10s infinite;
	transform: rotate(-20deg);
}
@-webkit-keyframes balloons_rotate_two {
	0% {
		-webkit-transform: rotate(-20deg);
	}
	50% {
		-webkit-transform: rotate(20deg);
	}
	100% {
		-webkit-transform: rotate(-20deg);
	}
}
@-moz-keyframes balloons_rotate_two {
	0% {
		-moz-transform: rotate(-20deg);
	}
	50% {
		-moz-transform: rotate(20deg);
	}
	100% {
		-moz-transform: rotate(-20deg);
	}
}
@-o-keyframes balloons_rotate_two {
	0% {
		-o-transform: rotate(-20deg);
	}
	50% {
		-o-transform: rotate(20deg);
	}
	100% {
		-o-transform: rotate(-20deg);
	}
}
@-ms-keyframes balloons_rotate_two {
	0% {
		-ms-transform: rotate(-20deg);
	}
	50% {
		-ms-transform: rotate(20deg);
	}
	100% {
		-ms-transform: rotate(-20deg);
	}
}
@keyframes balloons_rotate_two {
	0% {
		transform: rotate(-20deg);
	}
	50% {
		transform: rotate(20deg);
	}
	100% {
		transform: rotate(-20deg);
	}
}
 .balloon-border{
	position: fixed;
	top:100%;
	left:0;
	opacity: 0.5;
	z-index: 9999;
}
.control-panel {
	position: fixed;
	bottom: 0;
	padding:10px 0px 10px 0px;
}
#play, #bannar_coming, #balloons_flying,#wish_message,#story {
	display: none;
}
 .cake-cover {
	margin-top: 50px;
}
.message {
	margin-top: 200px;
	display: none;
}
.message p {
	font-family: 'Signika', sans-serif;
	font-size: 30px;
	text-transform: uppercase;
	color: #C4515C;
	text-shadow: 2px 2px 2px #FFF;
	display: none;
	font-weight: bold;
}
 .btn-primary {
        border-color: #466baf;
        padding: 10px;
        text-transform: uppercase;
        font-family: 'Signika', sans-serif;
        font-weight: 700;
        color: #fff;
        background-color: #466baf;
}
    .btn-primary:hover,
    .btn-primary:focus,
    .btn-primary:active,
    .btn-primary.active,
    .open .dropdown-toggle.btn-primary {
        border-color: #fff;
        color: #fff;
        background-color: #466baf;
    }
 </style>
 