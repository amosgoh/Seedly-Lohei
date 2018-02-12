let currentSlide = 0;


function showFirst(id, btn,audio,secondAudio) {
  document.getElementById(id).style.display = 'none';
  var audio = document.getElementById(audio);
  var secondAudio = document.getElementById(secondAudio);
  currentSlide++; 
  console.log("showFirst", currentSlide);
    audio.play();
    secondAudio.play();
    
  setTimeout(function(){
    document.getElementById("tap-guide").classList.remove("invisible");
  document.getElementById("tap-guide").classList.add("tap");},5000);
  /*document.getElementById("tap").classList.remove("invisible");
  document.getElementById("tap").classList.add("tap");*/
  
}
function showSecond(id, btn,audio) {
  document.getElementById(id).style.display = 'none'
  var audio = document.getElementById(audio);
    audio.play();
  /*document.getElementById("tap-guide").classList.remove("tap");
  document.getElementById("tap-guide").classList.add("invisible");*/
  document.getElementById("tap-guide").style.display='none';
    currentSlide++; 
    console.log("showSecond", currentSlide);


}

function showNext(id, btn,audio) {
  document.getElementById(id).style.display = 'none'
  var audio = document.getElementById(audio);
    audio.play();
    currentSlide++;
    console.log("showNext", currentSlide);

}

function showPrevious() {
  document.getElementById("slide"+currentSlide).style.display = 'block';
  var audio = document.getElementById("audio"+(currentSlide));
    console.log(audio);
    audio.play();

  currentSlide--;

}

var audio = document.getElementById("audio0");
 audio.volume = 0.2;

function showShake(id, btn, audio) {
  document.getElementById(id).style.display = 'none'
  var audio = document.getElementById(audio);
  audio.play();
  
  window.addEventListener('shake', shakeEventDidOccur, false);

  var myShakeEvent = new Shake({
    threshold: 10, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
 })
 myShakeEvent.start();


//function to call when shake occurs
function shakeEventDidOccur () {
  document.getElementById("slide11").style.display ='none';
  document.getElementById("toss-gif").style.display = 'inline';
  
  setTimeout(function () {
        document.getElementById('back-button').style.display='none';
        document.getElementById('toss-gif').style.display='none';
        document.getElementById('shake-icon').style.display='none';
        
        
    }, 2900);
    return false;
  }

}


function generate4d() {
  var number;
  do {
    number = Math.floor(Math.random() * 999);
  } while (number < 100);  

  var luckyNumber = "8" + number; 
 
  console.log(luckyNumber);
  document.getElementById("luckyNumber").innerHTML = luckyNumber;
}


generate4d();
