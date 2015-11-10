/*
  Return a random element from the passed in array.
  http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
*/
function randomItem(myArray){
  return myArray[Math.floor(Math.random() * myArray.length)];
}

// Bernie Sander's quotes taken from braintree.org
var quotes = [
  "Let us wage a moral and political war against the billionaires and corporate leaders, on Wall Street and elsewhere, whose policies and greed are destroying the middle class of America.",
  "Finally, let understand that when we stand together, we will always win. When men and women stand together for justice, we win. When black, white and Hispanic people stand together for justice, we win.",
  "What the American people want to see in their president is somebody who not necessarily can win every fight, but they want to see him stand up and fight for what he believes, take his case to the American people.",
  "One in four corporations doesn't pay any taxes.",
  "Here is what the practical impact of Citizens United means. What Citizens United means is that corporations call hundreds of millions of dollars into television ads, radio ads, and other forms of advertising to defeat those candidates who stand up and take them on.",
  "Every working family in America knows how hard it is today to find affordable childcare or early childhood education.",
  "If you ask me about my views on the environment, on women's rights, on gay rights, I am liberal. I don't have a problem with that at all. Some of my best friends are liberal.",
  "You've got the top 400 Americans owning more wealth than the bottom 150 million Americans. Most folks do not think that is right.",
  "Do the elected officials in Washington stand with ordinary Americans - working families, children, the elderly, the poor - or will the extraordinary power of billionaire campaign contributors and Big Money prevail? The American people, by the millions, must send Congress the answer to that question.",
  "I'm not a Democrat, I'm an Independent, but I caucus with the Democrats."
]

function randomQuote(){
  return randomItem(quotes);
}

var bernieQuoteElement = document.getElementById('bernie-quote');
var previousQuote = "";
var audio = new Audio('ThisLand.mp3');
var berniePicElement = document.getElementById('bernie-pic')

function spaceHit(e){
  console.log(e)
  var isTouchOrSpaceBarPress = !e.keyCode || e.keyCode == 32;
  if (isTouchOrSpaceBarPress){
    displayNewBernieQuote();
    playSong();
  }
}
function displayNewBernieQuote(){
  var newQuote;
  do {
    newQuote = randomQuote();
  } while (newQuote == previousQuote);
  bernieQuoteElement.textContent = "\"" + newQuote + "\"";
}
function playSong(){
  audio.currentTime = 0;
  audio.play();
}

// *Space* triggers a random quote to display
berniePicElement.addEventListener('click', spaceHit, false)
document.addEventListener('keyup', spaceHit, false);

var volumeIconElement = document.getElementById('volume');
const FAVOLUMEUPCLASS = "fa-volume-up";
const FAVOLUMEMUTECLASS = "fa-volume-off";

function toggleVolumeIcon(e){
  e.preventDefault(); // prevents emulated click
  if (audio.muted) {
    volumeIconElement.classList.remove(FAVOLUMEMUTECLASS);
    volumeIconElement.classList.add(FAVOLUMEUPCLASS);
  } else {
    volumeIconElement.classList.remove(FAVOLUMEUPCLASS);
    volumeIconElement.classList.add(FAVOLUMEMUTECLASS);
  }
  audio.muted = volumeIconElement.classList.contains(FAVOLUMEMUTECLASS);
}

// Touchstart for mobile, click for desktop
volumeIconElement.addEventListener('click', toggleVolumeIcon)
volumeIconElement.addEventListener('touchstart', toggleVolumeIcon)

audio.muted = true;

displayNewBernieQuote();
