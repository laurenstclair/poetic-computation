var words = [
  "generative",
  "collaborative",
  "iterative",
  "network",
  "protocol",
  "hope",
  "biome",
  "tapestry",
  "peer-to-peer",
  "foliage",
  "woven",
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

var selectElement = document.getElementById("words");

for (var i = 0; i < words.length; i++) {
  var optionElement = document.createElement("option");
  optionElement.value = words[i];
  optionElement.text = words[i];
  selectElement.appendChild(optionElement);

  var displayWords = (document.getElementById("list").innerHTML +=
    "<p>" + words[i] + "</br></p>");
}
