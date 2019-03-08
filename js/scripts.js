$(document).ready(function() {

  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    var input = parseInt($("#num").val());
    var numbers = new Array();
    var divisbles = [3,5,15];

    for (i=1; i<=input; i++){
      numbers.push(i);
    }
    for (i=0; i<=input; i++){;
      if (numbers[i] % 15 === 0){
        numbers.splice(i,1,"Ping Pong")
      }
      else if (numbers[i] % 3 === 0){
        numbers.splice(i,1,"ping");
      }
      else if (numbers[i] % 5 === 0){
        numbers.splice(i,1,"pong");
      }
    }

    var index= 0;
    $("#result").empty();
    numbers.forEach(function(){
      $("#result").append("<li>"+numbers[index]+"</li>");
      index++;
    });

  }); //for the submit



  
}); //for the document