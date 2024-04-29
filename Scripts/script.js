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
          var letter = ''; //initialize aas empty
          
         // for (var i=0; i < userText.length; i++){
          
              letter = userText[index];

              console.log('letter var = ', letter); //check what we got from array
              
              console.log('are we grabbing correct thing from our data thingy?', phoneticAlfa[letter]); 
              
              result += phoneticAlfa[letter] + ' ';
              console.log('result', result);

          // if(phoneticAlfa[letter]){

          //     console.log('are we grabbing correct thing from our data thingy?', phoneticAlfa.letter); 
              
          //   result += phoneticAlfa[letter] + ' ';
          //     break
          // }
          // else{
          //   result += letter + ' (Not in NATO alphabet) ';
          // }
       // }
        
        }); //closes .each()   

       $('#textOutput').text(result);

      });
      


$('#clear').click(function () {
  $("#userText").val("")
  $('#textOutput').val("")
});

});