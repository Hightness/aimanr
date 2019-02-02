var sr = ['red', 'green', 'yellow', 'blue'];
var viapul = false,seq = [],cont = 0,lvl = 0,via = true;

function playsound(c) {
  new Audio("sounds/" + c + ".mp3").play();
} //per fare suono
function rand() {
  var n = Math.floor(Math.random() * 4);
  seq.push(sr[n]);
  $("#" + sr[n]).fadeOut(50).fadeIn(50);
  playsound(sr[n]);
} //aggiunge un nuovo pulsante
function perso() {
  $('body').addClass("game-over");
  setTimeout(function() {
    $('body').removeClass("game-over");
  }, 200);
}

function anim(colore) {
  $('#' + colore).addClass("pressed");
  setTimeout(function() {
    $('#' + colore).removeClass("pressed");
  }, 250);
}

$(".btn").click(function() {
  if (viapul === true) {
    $("h2").addClass("nascondi");
    if (seq[cont] !== $(this).attr("id")) {
      anim($(this).attr("id"));
      $("h1").text("Hai perso .. punteggio: " + (Number(lvl) + 1));
      lvl = 0;
      $("h2").removeClass("nascondi");
      viapul = false;
      via = true;
      seq = [];
      cont = 0;
      perso();
      new Audio("sounds/wrong.mp3").play();
    } // resetta tutto , per quando perdi
    else {
      playsound($(this).attr("id")); // fa il suono
      $(this).fadeOut(50).fadeIn(50); // fa l'animazione
      cont++;
    } //quando non ho ancora perso.
    if ((via === false) && (cont > lvl)) {
      lvl++;
      cont = 0;
      viapul = false;
      setTimeout(function() {
        rand();
        $("h1").text("Level " + lvl);
        viapul = true;
      }, 600);
    }
  } // quando ho azzeccato tutto , aumenta di livello.
});


$("span").click(function() {
  if (via === true) {
    viapul = true;
    $("h2").addClass("nascondi");
    $("h1").text("Level 0");
    setTimeout(function() {
      rand();
    }, 250);
    via = false;
  }
}); //serve per ricominciare o iniziare
