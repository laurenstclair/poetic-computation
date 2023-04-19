var words = [
  "collaborative",
  "generative",
  "biome",
  "iterative",
  "network",
  "protocol",
  "tapestry",
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
  "murmuration",
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

var behind = ["cc81a8", "e6707c", "97a993", "e4bf4c", "0070aa"];

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
