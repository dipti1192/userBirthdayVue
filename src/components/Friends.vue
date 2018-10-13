<template>
<v-flex xs12  style="padding:55px;">
  <v-toolbar color="cyan darken-4" flat>
    <v-btn style="color:white" icon>
        <v-icon>cake</v-icon>
    </v-btn>
    <v-toolbar-title style="color:white">Birthday Wishes</v-toolbar-title>
  </v-toolbar>
  <v-layout >
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
</v-flex>
</template>
<script>
export default {
  name: 'Friends',
  data () {
      return {
        photos: [
            { title: 'Dhiraj Mali', icon: 'Dhirya.jpg',id:'2',
              msg:`आई-वडील  दोन्ही वडगांव चे प्रसिद्ध डॉक्टर त्याचा एकुलता एक लाडका मुलगा ... आशी पहिल्यांदा ५ वी मध्ये 
                  ओळख झाली..५ वी पासून मैत्री  झाल्या पासून आज पर्यंत ..... शाळे मध्ये टॉपर. व कॉलेज मध्येही टॉपर.
                  ८ वी मध्ये शाळा सोडून kolhapur मध्ये गेला शिकायला.   १० वी मध्ये पहिला नंबर . सगळ्यां ना वाटले ..हा 
                  डॉक्टर होणार. .   पण झाला तो आयआयटी engineer
                  अनिकेत  तुझ्या मुळे केतन शी पण चांगली फ्रेंडशिप झाली...केतन च आणि माझा स्कूल मध्ये पटत नव्हतं.
                  पण अनिकेत तुझ्या मुळे .... तो पण माझा चांगला मित्र बनला. तु  राजस्थान मध्ये कोटा मध्ये शिकायला गेला .. 
                  तेव्हा तू  पहिल्या jaatana.  खूप रडला ... मला आठवते की....परत घरी जाऊन परत आला आणि रडू कंट्रोल झाला नाही.
                  मला ही रडू आला..खूप खराब वाटत होता..  कारण.  सुट्टी मध्ये खूप एन्जॉय केला होता .. कोल्हापूर ,पिक्चर , पन्हाळा ई.
                  सुट्टी मध्ये आला घरी तर पहिला  तू मला आणि केतन ला फोन असायचा. Movie , kolhapur सुट्टीत. 
                  नक्कीच असाय ची....परत केतन पुण्याला गेला.   तसा ऋषी केतन मी आणि तू चांगला ग्रूप झाला...मी पण पुण्याला कॉलेजला  आलो ...
                  तू  डायरेक्ट पुण्याला यायचा.... दीप्ती तुझी ची स्कूल फ्रेंड. .ती पण पुण्यात जॉब साठी होती ...तिची ओळक तू  ने करून दिली स...ती पण आमची सगळ्यांची चांगली मैत्रीण बनली.....
                  खूप काही आठवणी आहेत... बोलेल तेवढा कमी आहे.   ..
                  आज तुझा  वाढदिवस आणि  तू आमच्या सगळ्यांपासून दूर तिकडे  USA मध्ये. तरी सुद्धा WhatsApp & massagers मुळे चांगलंच जवळ आहोत.     
                  शेवटी एकच बोलेन....
                  "जल्लोश आहे गावाचा,
                  कारण वाढदिवस आहे,
                  माझ्या भावाचा!!!
                  वाढदिवसाच्या हार्दीक शुभेच्छा…!"
                  Happy birthday Aniket.🎂🎂🎂🎂 Miss u`
            },
            { title: 'Ketan Kumbhar', icon: 'Ketan.jpg',id:'3',
              msg: `On your birthday I wish for you that whatever 
                    you want most in life it comes to you just the way you imagined it or better. Happy birthday!`
            },
            { title: 'Rushi Paradkar', icon: 'Rushi.jpg',id:'4',
              msg: `20 odd years have past with you and it’s been a while 
                    I never seen you but feels like years.....waiting to meet you and relive those memories again.... 
                    wish you happy birthday bro... cheers mate 🍻`
            },
            {
              title: 'Dhanashree Nimbalkar', icon: 'Dhanshree.jpg',id:'11',
              msg: `You are one, who always supporting me, encouraging me, listening to me... 
                  Wish you many many happy returns of the day...
                  May your birthday be filled with the warmth of sunshine, the happiness of smile..
                  Best luck for your future dear ..
                  And PARTY HARD...😜🍻🍻`
            },
            { title: 'Urmila Waradkar', icon: 'Urmila.jpg',id:'5',
              msg: `Dear Aniket,
                    You are going to start a new year of your life and I hope this coming year will 
                    bring every success you deserve.Wishing you a day that is as special in every way as you are! `
            },
            { title: 'Shreyasee Chougule', icon: 'Shreyasee.jpg',id:'6',
              msg: `Wishing you a day filled with happiness and a year filled with joy...
                    Happy birthday Aniket 🍫🎉🎁💐🎂 `
            },
            { title: 'Pranshul Chitransh', icon: 'Pranshul.jpg',id:'7',
              msg: `Here's to nights we don't remember with people we won't forget.
                  Step up and put your party shoes on. It's your birthday dammit. Cheers!🍻`
            },
            { title: 'Sachin Jagtap', icon: 'Sachin.jpg',id:'8',
              msg: `14 ऑक्टोबर रोजी  
                  महापुरे घराण्यात आनंदी आनंद झाला.... 
                  कारण घराण्यात रोमॅन्टीक हीरो 😎 अनिकेत जन्मास आला तसंच मनानं दिलदार... 
                  बोलनं दमदार.... वागणं जबाबदार....
                  डान्स मधे टायगर श्रॉफ ला ही टक्कर देणारा असा आमचा लाडका अनिकेत
                  आपणास वाढदिवसाच्या हादि॓क शुभेच्छा 🍺
                  जलने वाले जलते रहे😏,मेरे भाई का नाम चलते रहे...`
            },
            { title: 'Harshraj Narsale', icon: 'Harsharaj.jpg',id:'9',
              msg: `All of us were booking flight✈ tickets for Cinci and I didn't have money💵 at that time. 
                    You booked a flight ticket for me of 50K on phone  without any second thought when we 
                    hardly knew each other. अन्या, तिथेच तोडलंस भावा...😎
                    I have tried many new things here in Cinci 🍻🍗........
                    for the first time which I was afraid of my entire life and every time I thought of 
                    doing them, I just ensured one thing "Is Anya around to handle the situation?"😕. 
                    Thanks for being such an awesome😀, dependable😇 and approachable😍 friend!
                    Happy Birthday Bhava!🎂 I wish that you 
                    find shortest optimal path to success🚩 
                    node with minimum cost without any constraints :)`
            },
            { title: 'Supriya Sawant', icon: 'Supriya_Sawant.jpg',id:'10',
              msg: `Dear Anya,
                  I know it has been just a month or two since we all met, but from this journey
                  I can vouch for the fact that you are one of the most reliable, understanding 
                  friend and that's why I call you 'Anya - The savior'😎
                  Whatever the situation might be(from 'homesickness,seeking advice' 
                  to 'arranging chai party'🎭) I am always sure that friend who 
                  would be approchable is Anya.I got opportunity to 
                  make many other friends (Harsha,Pallavi,Jeevan,Kratika,Vinaya, Trishul) 
                  because of you.In this upcoming year,we will have many more moments to cherish.🎊🎉 
                  I hope our friendship will even become more stronger.💪
                  On the occasion of your birthday I wish you alot of
                  happiness.May you get job soon and have a blessed life ahead..😃
                  मित्रा,वाढदिवसाच्या आभाळभर शुभेच्छा🎂😊`
            },
            { title: 'Pallavi Singh', icon: 'Pallavi.jpg',id:'12',
              msg: `We started as just neighbors but now you are one of the closest friends here. 
                    Love our conversations and endless gossip sessions 😋
                    You are one person I can totally count on.
                    It's been just two months since we've known 
                    each other but it's so cool that we've spoken about so many things 
                    and have spent so much time together be it classes or random events.
                    Love the fact that you are so outgoing and always open to ideas.
                    You are an amazing person and it's great how you've figured out 
                    'some' of my quirks already (not happy about the latter) 😬 
                    Hope you have an amazing birthday and an even more amazing year!
                    Cheers!
                    Also, "You are a horrible person" 😛 (now don't gimme that look)`
            },
            { title: 'Kratika Gupta', icon: 'Kratika.jpg',id:'13',
              msg: `Yo bro,
                  Wish you a very happy birthday!!! I remember the first time we met and bonded 
                  over a common friend, but now I think we are better friends than I am with him! 🤷
                  Cheers to our daaru session, singing sessions, dancing sessions, listening to
                  "good" music sessions, exam sessions, to making stupid mistakes in the exam 
                  and then celebrating them like crazy! 😂
                  Be the genuine person that you are! 
                  And most importantly keep clicking awesome pictures of us! 
                  Have a great year ahead!!`
            },
            { title: 'Jeevan sai', icon: 'Jeevan.jpg',id:'14',
              msg: `Aniket,
                  We have been hanging around since day 1. Our frequencies matched and became 
                  friends very quickly. You were present in every fun event I was part of and 
                  helped to capture that moment literally 😜. We share similar humor and you always 
                  knew what makes me laugh😊.  There were moments when I was Laughing Out Loud with
                  a lot of excitement and people around us couldn’t get the joke. It has always 
                  been fun having you around.
                  You are smart, logical and analytically strong. 
                  Above all you are very modest, and I like it the most. 
                  Keep rocking the same way and let’s continue to have fun for the rest of this year. 😊 
                  A very happy birthday and have a great year ahead 😊`
            },
            {
              title: 'Mohit Anand', icon: 'Mohit.jpg',id:'15',
              msg: `Maha-pure! Tu mujhe one of the most genuine bando mein se ek laga at Cincy. 
                    Tere sath bakar kaatna, tull hokr nachna aur fir exam ke liye pdhna- sbme maza aata hai. 
                    You find place in my potential best buddies very easily. Bindas down to earth banda hai tu. 
                    Toh bhai ki taraf se darling tujhe happy birthday. 
                    Bottomline- Tu bindas khush reh life mein. And i wish hmari dosti bhi tagdi hoti jaye. 
                    Fir apan ek din is seaplane ride pe chlenge. Chalti hai na? 😂 Love you bhai!`
            },
            {
              title: 'Kunal Priyadarshi', icon: 'Mohit.jpg',id:'16',
              msg: `Happy Birthday Aniket! Thank you for hosting all our parties🍻 and 
                    group studies. we will make sure you feel at home with birthday bumps 😂`
            },
            { title: 'Dipti Prabhavale', icon: 'dipti.png',id:'1'},
              
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
<style>
  body{
    background: white
  }
  .boxText{
    font-size: 19px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    /*font-weight: 400;*/
    text-align: left;
  }
  .boxheadline{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: left;
    font-size: 30px;
    font-weight: 800;
    color: #006064;
  }
</style>
