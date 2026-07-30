const planetData = {
  Mercury: {
    description: "Mercury is the closest planet to the Sun and the smallest planet in the solar system.",
    fact: "A year on Mercury lasts only 88 Earth days."
  },

  Venus: {
    description: "Venus is the second planet from the Sun and is known for its thick, hot atmosphere.",
    fact: "Venus is the hottest planet in the solar system."
  },

  Earth: {
    description: "Earth is the third planet from the Sun and the only known planet that supports life.",
    fact: "About 71% of Earth's surface is covered by water."
  },

  Mars: {
    description: "Mars is the fourth planet from the Sun and is often called the Red Planet.",
    fact: "Mars is home to Olympus Mons, the largest volcano in the solar system."
  },

  Jupiter: {
    description: "Jupiter is the largest planet in the solar system and is a gas giant.",
    fact: "Jupiter has a giant storm called the Great Red Spot."
  },

  Saturn: {
    description: "Saturn is a gas giant best known for its large and visible ring system.",
    fact: "Saturn's rings are mostly made of ice, rock, and dust."
  },

  Uranus: {
    description: "Uranus is an ice giant with a blue-green appearance caused by methane in its atmosphere.",
    fact: "Uranus rotates almost completely on its side."
  },

  Neptune: {
    description: "Neptune is the farthest major planet from the Sun and is known for strong winds.",
    fact: "Neptune has some of the fastest winds in the solar system."
  }
};

const planetButtons = document.querySelectorAll(".planet-card");
const planetName = document.getElementById("planet-name");
const planetDescription = document.getElementById("planet-description");
const extraFact = document.getElementById("extra-fact");
const showMoreButton = document.getElementById("show-more");

let selectedPlanet = null;

planetButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    selectedPlanet = button.querySelector("span").textContent;

    planetName.textContent = selectedPlanet;
    planetDescription.textContent = planetData[selectedPlanet].description;

    extraFact.textContent = "";
    showMoreButton.textContent = "Show More";
  });
});

showMoreButton.addEventListener("click", function() {
  if (selectedPlanet === null) {
    extraFact.textContent = "Please select a planet first.";
    return;
  }

  if (extraFact.textContent === "") {
    extraFact.textContent = planetData[selectedPlanet].fact;
    showMoreButton.textContent = "Show Less";
  } else {
    extraFact.textContent = "";
    showMoreButton.textContent = "Show More";
  }
});
const answerButtons = document.querySelectorAll(".answer");
const quizResult = document.getElementById("quiz-result");

answerButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const selectedAnswer = button.textContent;

    if (selectedAnswer === "Mars") {
      quizResult.textContent = "Correct! Mars is known as the Red Planet.";
    } else {
      quizResult.textContent = "Incorrect. Try again!";
    }
  });
});
