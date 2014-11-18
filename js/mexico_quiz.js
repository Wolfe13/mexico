$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var total = getScore();
    var message;
    
    if (total < 42*1/4) {
      message = "Maybe you should stick to Chipotle";
    } else if (total < 42*1/2) {
      message = "Are you sure you can take the time off? Doesn't look like you are too into it";
    } else if (total < 42*3/4) {
      message = "Look into booking a flight. You could probably handle it";
    } else {
      message = "See you in Mexico";
    }

    var your_score = "<div id='score'>You're score is " + total + '.</div>';
    message = '<div id="message">' + message + '</div>';

    $('#container').html(your_score + message);

    function getScore() {
      var score = 0;

      for (var i = 1; i < 15; i++) {
        var question = i;

        var answer = $('input[name=q' + i + ']:checked').val();

        if (answer) {
          score += parseInt(answer);
        }
      }
      return score;
    };
  });
});