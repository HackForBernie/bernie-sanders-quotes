/*
  Return a random element from the passed in array.
  http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
*/
function randomItem(myArray){
  return myArray[Math.floor(Math.random() * myArray.length)];
}

// Bernie Sander's quotes taken from braintree.org and Policy.mic
var quotes = [
  "Let us wage a moral and political war against the billionaires and corporate leaders, on Wall Street and elsewhere, whose policies and greed are destroying the middle class of America.",
  "Finally, let understand that when we stand together, we will always win. When men and women stand together for justice, we win. When black, white and Hispanic people stand together for justice, we win.",
  "What the American people want to see in their president is somebody who not necessarily can win every fight, but they want to see him stand up and fight for what he believes, take his case to the American people.",
  "One in four corporations doesn't pay any taxes.",
  "Here is what the practical impact of Citizens United means. What Citizens United means is that corporations call hundreds of millions of dollars into television ads, radio ads, and other forms of advertising to defeat those candidates who stand up and take them on.",
  "You've got the top 400 Americans owning more wealth than the bottom 150 million Americans. Most folks do not think that is right.",
  "Do the elected officials in Washington stand with ordinary Americans - working families, children, the elderly, the poor - or will the extraordinary power of billionaire campaign contributors and Big Money prevail? The American people, by the millions, must send Congress the answer to that question.",
  "I think many people have the mistaken impression that Congress regulates Wall Street. In truth that's not the case. The real truth is that Wall Street regulates the Congress.",
  "There is a lot of sentiment that enough is enough, that we need fundamental changes, that the establishment — whether it is the economic establishment, the political establishment or the media establishment — is failing the American people",
  "In my view, a corporation is not a person. A corporation does not have First Amendment rights to spend as much money as it wants, without disclosure, on a political campaign. Corporations should not be able to go into their treasuries and spend millions and millions of dollars on a campaign in order to buy elections.",
  "If a financial institution is too big to fail, it is too big to exist",
  "We got a collapsing middle class. We have more wealth and income inequality today than we've had since the 1920s. We have all of these enormous issues. And what big money can do is put an unbelievable amount of TV and radio ads out there to deflect attention from the real issues facing the American people.",
  "If the goal of health care reform is to provide comprehensive, universal health care in a cost-effective way, the only honest approach is a single-payer approach",
  "What the American people are angry about is they understand that they did not cause this recession. Teachers did not cause this recession. Firefighters and police officers who are being attacked daily by governors all over this country did not cause this recession. Construction workers did not cause this recession. This recession was caused by the greed, the recklessness and illegal behavior of the people on Wall Street.",
  "People should not underestimate me."
]

function randomQuote(){
  return randomItem(quotes);
}

var bernieQuoteElement = document.getElementById('bernie-quote');
var previousQuote = "";
var audio = new Audio('ThisLand.mp3');
var berniePicElement = document.getElementById('bernie-pic')

function spaceHit(e){
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
