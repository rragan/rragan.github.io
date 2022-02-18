window.onload = function () {


  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var word;               // Selected word
  var words;              // Word list
  var guess ;             // guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses

  // Get elements
  var showLives = document.getElementById("mylives");

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
      if (i == 12) {
        p = document.createElement('p');
        letters.appendChild(p);
      }
    }
  } 

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over - " + word;
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "Congratulations! The answer word is redwood.";
      }
    }
  }

  // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    words = [ "lackey", "large", "nano", "earthcache", "signal", "pathtag", "compass", "favorite", "mingo", "stash", "adventure", 
             "hiking", "fizzy", "jasmer", "grid", "projectgc", "groundspeak", "letterbox", "virtual", "multi", "mystery", "puzzle",
             "challenge", "bison"
    ];


    word = words[Math.floor(Math.random() * words.length)];
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    canvas();
  }

  play();


   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    play();
  }
  
  document.getElementById('help').onclick = function() {
    alert("The answer word is redwood");
  }

}


