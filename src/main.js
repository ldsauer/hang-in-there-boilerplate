// query selector variables go here 👇
let posterImg = document.querySelector(".poster-img")
let posterTitle = document.querySelector(".poster-title")
let posterQuote = document.querySelector(".poster-quote")
let randomPosterButton = document.querySelector(".show-random")
let mainPoster = document.querySelector(".main-poster")
let mainButton = document.querySelector(".show-main")
let backToMain = document.querySelector(".back-to-main")
let formSection = document.querySelector(".poster-form")
let formButton = document.querySelector(".show-form")
let savedSection = document.querySelector(".saved-posters")
let savedButton = document.querySelector(".show-saved")
let makePosterButton = document.querySelector(".make-poster")
let imageURL = document.querySelector("#poster-image-url")
let title = document.querySelector("#poster-title")
let quote = document.querySelector("#poster-quote")
let savePosterButton = document.querySelector(".save-poster")
let savedPostersGrid = document.querySelector(".saved-posters-grid")
let posterClass = document.querySelector(".poster")
let unmotivationalBtn = document.querySelector(".unmotivational-button")

// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster = {
  
}
console.log(currentPoster)
window.addEventListener("load", function(){
  updatePoster();
  createUnmotivationalButton();
})


// event listeners go here 👇
randomPosterButton.addEventListener("click", updatePoster)
formButton.addEventListener("click", toggleForm)
mainButton.addEventListener("click", nevermind)
backToMain.addEventListener("click", toMain)
savePosterButton.addEventListener("click", saveCurrentPoster)
makePosterButton.addEventListener("click", newPoster)
savedButton.addEventListener("click", function() {
  toggleSaved()
  displaySavedPosters()
}
);
unmotivationalBtn.addEventListener("click", toggleUnmotivational)

// functions and event handlers go here 👇
// (we've provided two to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function updatePoster() {
  let randomImage = images[getRandomIndex(images)];
  let randomTitle = titles[getRandomIndex(titles)];
  let randomQuote = quotes[getRandomIndex(quotes)];

  posterImg.src = randomImage;
  posterTitle.innerText = randomTitle; 
  posterQuote.innerText = randomQuote;
}

function toggleForm() {
    formSection.classList.remove("hidden") 
    mainPoster.classList.add("hidden")
    console.log(formSection)
}

function toggleSaved() {
  savedSection.classList.remove("hidden")
  mainPoster.classList.add("hidden")

  console.log(savedSection)
}

function nevermind() {
  mainPoster.classList.remove("hidden")
  formSection.classList.add("hidden")
}

function toMain() {
  mainPoster.classList.remove("hidden")
  savedSection.classList.add("hidden")
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL.value, 
    title: title.value, 
    quote: quote.value
  }
}

function newPoster(event) {
  event.preventDefault(); 
  currentPoster = createPoster(imageURL, title, quote);
  displayCurrentPoster();
  addNewPosterToArray();
  changeDisplay();
  console.log(currentPoster)
}
// refactor: maybe create one function that executes individually and put them into an event listener. 
// more updating not creating 

function displayCurrentPoster() {
  posterImg.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
}

function addNewPosterToArray() {
  images.push(currentPoster.imageURL);
  titles.push(currentPoster.title);
  quotes.push(currentPoster.quote);
}

function changeDisplay() {
  mainPoster.classList.remove("hidden");
  formSection.classList.add("hidden");
}

function saveCurrentPoster() {
  let alreadySaved = savedPosters.some(poster => 
    poster.imageURL === posterImg.src && 
    poster.title === posterTitle.innerText && 
    poster.quote === posterQuote.innerText
  );

  if (!alreadySaved) {
    let newPoster = {
      id: Date.now(),
      imageURL: posterImg.src,
      title: posterTitle.innerText, 
      quote: posterQuote.innerText
    };
    savedPosters.push(newPoster);
    // alert("Hooray! Your poster has been saved!") 
    console.log("Poster Saved!", savedPosters)
  }
  else {
    alert("Looks like you already saved this poster!")
    console.log("Poster is already saved!")
  }
}

function displaySavedPosters() {
  savedPostersGrid.innerHTML = "";
  savedPosters.forEach(poster => {
    let miniPoster = document.createElement("div");
    miniPoster.classList.add("mini-poster");

    let miniImg = document.createElement("img");
    miniImg.src = poster.imageURL;
    miniImg.classList.add("saved-posters-grid", "mini-poster");

    let miniTile = document.createElement("h2");
    miniTile.innerText = poster.title;
    // miniTile.classList.add("mini-poster", "saved-posters-grid");

    let miniQuote = document.createElement("h4");
    miniQuote.innerText = poster.quote;
    // miniQuote.classList.add("mini-poster", "saved-posters-grid");

    miniPoster.append(miniImg, miniTile, miniQuote);

    savedPostersGrid.appendChild(miniPoster)
    console.log("It's workingggggg!!")
  });
}

// function createUnmotivationalButton() {
//   let unmotivationalButton = document.createElement("button");
//   unmotivationalButton.textContent = "Unmotivational Posters";
//   unmotivationalButton.classList.add("unmotivational-button");
//   mainPoster.appendChild(unmotivationalButton);
// }

function toggleUnmotivational() {
  mainPoster.classList.remove("hidden")
  unmotivationalPage.classList.add("hidden")
  console.log("is it working??")
}

function unmotivationalPage() {
  // toggleUnmotivational
  let unmotivationalTitle = document.createElement("section");
}

// console.log("quotes: ", quotes)



// console.log("savedPosters: ", savedPosters)

