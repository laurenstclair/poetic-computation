var words = [
  "collaborative",
  "generative",
  "biome",
  "iterative",
  "network",
  "protocol",
  "tapestry",
  "murmuration",
  "peer-to-peer",
  "foliage",
  "woven",
  "hope",
  "forest",
  "communal",
  "transmutation",
  "emergent",
  "transformative",
  "mycelial",
  "open-source",
  "programmatic",
  "fungal",
  "cocoon",
  "assembly",
  "connective",
  "wish",
  "dream",
  "layer",
  "seedling",
  "nest",
  "mossy",
  "electric",
  "array",
  "relational",
  "blossoming",
  "care",
  "library",
  "mesh",
  "beacon",
  "yearning",
  "garden",
  "web",
  "lyrical",
  "pedagogy",
  "space",
];

var selectElement = document.getElementById("words");

for (var i = 0; i < words.length; i++) {
  var optionElement = document.createElement("option");
  optionElement.value = words[i];
  optionElement.text = words[i];
  selectElement.appendChild(optionElement);

  var displayWords = (document.getElementById("list").innerHTML +=
    "<p><span onclick='setSelectValue(\"" +
    words[i] +
    "\")'>" +
    words[i] +
    "</span></p>");
}

function setSelectValue(value) {
  selectElement.value = value;
  var spans = document.querySelectorAll("#list span");
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].textContent === value) {
      spans[i].classList.add("selected");
    } else {
      spans[i].classList.remove("selected");
    }
  }
}

var selectHeading = document.getElementById("heading");

function randomizer(min, max) {
  return Math.random() * (max - min) + min;
}

var displayHeading = "";
for (var i = 0; i < randomizer(1, 28); i++) {
  displayHeading += "<h1>Poetic computation is an emergent protocol</h1>";
}
var secondaryHeading =
  "<h1>Poetic computation is a peer-to-peer murmuration</h1>" +
  "<h1>Poetic computation is a mycelial-spun cocoon</h1>";
document.getElementById("heading").innerHTML =
  displayHeading + secondaryHeading;

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let inputText = document.getElementById("words").value;

  document.getElementById("output").innerText = inputText;
});

let definition = [];

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let inputText = document.getElementById("words").value;
  definition.push(inputText);

  let outputText = "";
  for (let i = 0; i < definition.length; i++) {
    outputText += definition[i] + "<br>";
  }

  document.getElementById("output").innerHTML = outputText;
  document.getElementById("array").innerHTML = "[" + definition + "]";
  document.getElementById("words").value = "";

  if (definition.includes("murmuration")) {
    document.getElementById("image").innerHTML =
      "<img src='images/5196832414_d7db72206b_o.jpg'>";
  } else {
    document.getElementById("image").innerHTML = "";
  }
});
