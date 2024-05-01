$( document ).ready(function() {
    
  // var input = document.getElementById('userText').value.toUpperCase();
  // var output = document.getElementById('usrOutput');

  var phoneticAlfa ={
      "A":"Alfa",
      "B":"Bravo",
      "C":"Charlie",
      "D":"Delta",
      "E":"Echo",
      "F":"Foxtrot",
      "G":"Golf",
      "H":"Hotel",
      "I":"India",
      "J":"Juliett",
      "K":"Kilo",
      "L":"Lima",
      "M":"Mike",
      "N":"November",
      "O":"Oscar",
      "P":"Papa",
      "Q":"Quebec",
      "R":"Romeo",
      "S":"Sierra",
      "T":"Tango",
      "U":"Uniform",
      "V":"Victor",
      "W":"Whiskey",
      "X":"Xray",
      "Y":"Yankee",
      "Z":"Zulu"
  };

  var result =""; 
  // Grab input from textbox
  //split up user text into an array
  //declare string as specific array to loop through

  

$("#submitButton").click(function () {
      //compare value. with a stored object...
      let userText = $('#userText').val().toUpperCase().split("");

      $.each(userText, (index, value)=> {
          console.log(index, value);
          //initialize as empty
          var letter = '';   
              
          letter = userText[index];
//simple eval
          if(phoneticAlfa[letter]){
              console.log('work maybe?', phoneticAlfa.letter); 
            result += phoneticAlfa[letter] + ' ';
          }
          else{
            result += letter + " isn't there bud.";
          }
        
        }); 
// Output the stuff
       $('#textOutput').text(result);

      });
      
//Clear the boxes
$('#clear').click(function () {
  $("#userText").val("")
  $('#textOutput').text("")
});

});