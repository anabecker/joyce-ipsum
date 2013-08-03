

//document ready is a safety precaution that makes sure all of the HTML document has loaded before we try to add behavior.
$(document).ready(function(){

$(".error").hide();

//define lorem ipsum function
function ipsum () {
  var paragraphs = '';

//Determine which of the check boxes is checked 
  var chosen_button = $("#ipsum-form input[name='choice']:checked").val();
  
//Grab the paragraph number the user enters
  var paragraph_number = $("#paragraph_count").val();

//Define var words as an empty array
  var words = [];

//Create an array of words to randomize later
  var dubliners = ["Araby", "Eveline", "Snow"];
  var portrait = ["Stephen", "Dedalus", "pull out his eyes, apologize", "bird"];
  var ulysses = ["yes I said yes I will Yes", "ineluctable modality of the visible", "Love loves to love love", "stately", "plump", "Buck Mulligan", "Gerty MacDowell", "ben Bloom Elijah", "Bloom", "Stephen", "Dedalus", "Poldy", "Molly", "la ci darem la mano", "mellow", "yellow", "smellow", "melons", "kidneys", "7 Eccles Street", "Davy Byrne&rsquo;s", "burgundy", "gorgonzola", "Blazes Boylan", "night town", "seedcake", "Sandycove", "Howth Head", "Rudy", "sixteen", "and", "soft", "Sandymount strand", "like a shot off a shovel", "rhododendrons", "sweets", "cyclops", "Sinbad the Sailor", "Tinbad the Tailor", "love", "song", "oxen of the sun", "Penelope", "Ithaca", "Proteus", "Circe", "Sirens", "fortyfoot", "faintly scented urine", "Martha", "letter", "sixteen", "the citizen", "contransmagnificandjewbangtantiality", "Kinch", "Frseeeeeeeeeeeeeeeeeeeefrong"];  
  var words_all = ulysses;

//ELSE IF determines which array of words to show the user
  if (chosen_button == "dubliners") {
   words = dubliners;
} else if (chosen_button == "portrait") {
   words = portrait; 
} else if (chosen_button == "ulysses") {
   words = ulysses; 
} else {
words = words_all;
}

//Vary the number of sentences in each paragraph randomly
var sentence_number = Math.floor( (Math.random()+4) * 2 );

//Use a function that randomizes the contents of an array
  function fisherYates(words) {
    var i = words.length, j, tempi, tempj;
    if ( i == 0 ) return false;
    while ( --i ) {
       j = Math.floor( Math.random() * ( i + 1 ) );
       tempi = words[i];
       tempj = words[j];
       words[i] = tempj;
       words[j] = tempi;
       }
       return words;
    }

//Start the first FOR loop that builds sentences from words
for ( var z = 0; z < paragraph_number; z++ ) {
  var sentence_group = '';

//Start the second FOR loop that builds sentence groups from sentences
for ( var y = 0; y < sentence_number; y++ ) {

//Start the third FOR loop that builds paragraphs from sentence groups
for ( var x = 0; x < words.length; x++ ) {

//Create a variable for the randomized array of words
  var words_random = fisherYates(words);

//Convert array to string with no commas or quotes, add period to end

  //Set a sentence length between 8 and 25 words, based on average readibility
  var sentence_length = Math.floor(Math.random() *(15 - 7 + 1) + 7);

  var sentence_random = words_random.slice(1, sentence_length).toString();

  var sentence = sentence_random.toString().replace(/,/g, ' ') + '. ';

//Capitalize first letter in string
  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var sentence_capped = capitalizeFirstLetter(sentence);
//End the first FOR loop that builds sentences from words
          }
  sentence_group += sentence_capped;  
//End the second FOR loop that builds sentence groups from sentences
       }
  paragraphs+='<p>' + sentence_group + '</p>';
//End the third FOR loop that builds and spaces paragraphs from sentence groups
    }

//add in the ending
paragraphs+="<p>Trieste-Zurich-Paris 1914-1921</p>";

//paragraph fade-in
function paragraphSwitch(){
  $("#print-paragraphs").animate({top:"+=25", opacity:0},600).queue(function(){
    $(this).empty().html(paragraphs);
    $(this).dequeue();
  }).animate({top:"-=25", opacity:1},1000);
}

paragraphSwitch();

//Prevent form from actually submitting so page does not reload
return false; 

//function
  }

$("#ipsum-form").submit(function(e){
  e.preventDefault();
  var paragraphNum = $("#paragraph_count").val();
  if (paragraphNum === ""){
    $(".error").fadeIn(300);
  }else{
    ipsum();
    $(".error").fadeOut(300);
  }
});

$("#paragraph_count").blur(function(){

  var numbers = /^[0-9]+$/;

  if ($("#paragraph_count").val().match(numbers)){
    $("#submit").css("opacity", 1);
    $(".error").fadeOut(300);
  }else{
    $(".error").fadeIn(300);
    $("#submit").css("opacity", 0.7);
  }
})

// $("#paragraph_count").blur(function(){
//   ipsum();
// })

//End document ready
});
 
