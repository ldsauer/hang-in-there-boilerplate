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
let unmotivationalBtn = document.querySelector(".show-unmotivational")
let unmotivationalPage = document.querySelector(".unmotivational-posters")
let sadToMain = document.querySelector(".sad-to-main")
let unmotivationalGrid = document.querySelector(".unmotivational-posters-grid")
// let miniPosterClass = document.querySelectorAll(".mini-poster")

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
var unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];
var cleanedUnmotivationalPosters = [];
var savedPosters = [];

var currentPoster = {}

var postersDeleted = false

console.log(currentPoster)
window.addEventListener("load", function(){
  updatePoster();
  // createUnmotivationalButton();
})


// event listeners go here 👇
randomPosterButton.addEventListener("click", updatePoster)
formButton.addEventListener("click", toggleForm)
mainButton.addEventListener("click", nevermind)
backToMain.addEventListener("click", toMain)
savePosterButton.addEventListener("click", saveCurrentPoster)
makePosterButton.addEventListener("click", newPoster)
sadToMain.addEventListener("click", unmotivationalToMain)
savedButton.addEventListener("click", function() {
  toggleSaved()
  displaySavedPosters()
}
);

unmotivationalBtn.addEventListener("click", function(event) {
  cleanDataFunction(),
  displayCleanedPosters(),
  toggleUnmotivational()
})

unmotivationalGrid.addEventListener("dblclick", function(event) {
  let posterElement = event.target.closest(".sad-mini-poster"); // Find the closest poster div
  if (posterElement) {
    let posterID = Number(posterElement.getAttribute("data-id")); // Convert to number
    deletePoster(posterID);
    posterElement.remove(); // Remove from the DOM
  }
});
// posterElement.dataset.dataID

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
    formSection.classList.remove("hidden");
    mainPoster.classList.add("hidden");
    console.log(formSection);
}

function toggleSaved() {
  savedSection.classList.remove("hidden");
  mainPoster.classList.add("hidden");
  console.log(savedSection)
}

function nevermind() {
  mainPoster.classList.remove("hidden");
  formSection.classList.add("hidden");
}

function toMain() {
  mainPoster.classList.remove("hidden");
  savedSection.classList.add("hidden");
  unmotivationalPage.classList.add("hidden");
}

function changeDisplay() {
  mainPoster.classList.remove("hidden");
  formSection.classList.add("hidden");
}

function toggleUnmotivational() {
  mainPoster.classList.add("hidden");
  unmotivationalPage.classList.remove("hidden");
  console.log("is it working??")
}

function unmotivationalToMain() {
  mainPoster.classList.remove("hidden");
  unmotivationalPage.classList.add("hidden");
  console.log("did you click?")
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL.value, 
    title: title.value, 
    quote: quote.value,
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
    miniImg.classList.add("mini-poster");

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

function cleanDataFunction() {
  if (cleanedUnmotivationalPosters.length === 0 && !postersDeleted) {
    let counter = 0;
    cleanedUnmotivationalPosters = unmotivationalPosters.map(poster => ({
      id: counter++,
      imageURL: poster.img_url, 
      title: poster.name, 
      quote: poster.description
    }));
  }
  console.log(cleanedUnmotivationalPosters)
}

function displayCleanedPosters() {
  unmotivationalGrid.innerHTML = ""; 
  cleanedUnmotivationalPosters.forEach(poster => {
    let sadPosters = document.createElement("div"); 
    sadPosters.classList.add("sad-mini-poster");
    sadPosters.setAttribute("data-id", poster.id)

    let sadImage = document.createElement("img");
    sadImage.src = poster.imageURL;
    sadImage.classList.add("mini-poster");

    let sadTitle = document.createElement("h2");
    sadTitle.innerText = poster.title;

    let sadQuote = document.createElement("h4");
    sadQuote.innerText = poster.quote;

    sadPosters.append(sadImage, sadTitle, sadQuote);

    unmotivationalGrid.appendChild(sadPosters)
    console.log("It's workingggggg!!")
  });
}

function deletePoster(posterID) { 
  let index = cleanedUnmotivationalPosters.findIndex((poster) => {
    return poster.id === posterID
  });
  if (index !== -1) {
    cleanedUnmotivationalPosters.splice(index, 1);
  }
  postersDeleted = true
  console.log(cleanedUnmotivationalPosters)
}


// cleanedUnmotivationalPosters.forEach((poster) => {
//   let sadPosterByID = poster.id
//   console.log(sadPosterByID)
// })
// splice(x, # to delete)

// console.log("quotes: ", quotes)

// console.log("savedPosters: ", savedPosters)


// cleanedUnmotivationalPosters.forEach((poster) => {
//   if (!deletedPosters.includes(poster.id)) {
//     let sadPoster = document.createElement("div");
//     sadPoster.classList.add("sad-mini-poster");
//     sadPoster.setAttribute("data-id", poster.id);
//     sadPoster.textContent = poster.title;
//     unmotivationalGrid.appendChild(sadPoster)
//   }
// });

// var deletedPosters = []

// deletedPosters.push(posterID);