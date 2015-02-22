var truths = [
  "JavaScript",
  "Git",
  "algorithms",
  "WordPress",
  "tech conferences",
  "Scala",
  "OOP",
  "testing",
  "web development",
  "frameworks"
];

var slants = [
  "color",
  "tone of voice",
  "UX",
  "communication",
  "music",
  "psychology",
  "superheroes",
  "design",
  "film",
  "agile"
];

var relationships = [
  "What %s can teach us about %t",
  "The history of %s in %t",
  "%s lessons applied to %t",
  "The use of %s in %t",
  "Why caring about %s can help you be better at %t",
  "The intersection of %t and %s"
];

var randomNumber = function(n) {
    return Math.floor(Math.random() * n)
};

var capitalizeFirstLetter = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var generateIdea = function() {
  var truth = truths[randomNumber(truths.length)];
  var slant = slants[randomNumber(slants.length)];
  var relationship = relationships[randomNumber(relationships.length)];
  var idea = relationship.replace("%t", truth).replace("%s", slant);
  $('.idea').html(capitalizeFirstLetter(idea));
};

var init = function() {
  slants = localStorage.getItem('slants') || slants;
  truths = localStorage.getItem('truths') || truths;
  $('#newIdea').on('click', generateIdea);
};

$(document).ready(init);
