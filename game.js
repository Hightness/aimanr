var sr = ['red', 'green', 'yellow', 'blue'];
var viapul = false,seq = [],cont = 0,lvl = 0,via = true;
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
function playsound(c) {
  new Audio("sounds/" + c + ".mp3").play();
} //per fare suono
function rand() {
  var n = Math.floor(Math.random() * 4);
  seq.push(sr[n]);
  seq.forEach(function (item){
    setTimeout(1000);
    $("#" + item).fadeOut(50).fadeIn(50);
    playsound(item);
  });
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
      $("h1").html("<h1 id='level-title' style='color:red;'>Hai perso .. punteggio: " + (Number(lvl) + 1)+"</h1>");
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
      $(".red").css("background-color",colorArray[Math.floor(Math.random()*50)+1]);
      $(".blue").css("background-color",colorArray[Math.floor(Math.random()*50)+1]);
      $(".green").css("background-color",colorArray[Math.floor(Math.random()*50)+1]);
      $(".yellow").css("background-color",colorArray[Math.floor(Math.random()*50)+1]);
      cont++;
    } //quando non ho ancora perso.
    if ((via === false) && (cont > lvl)) {
      lvl++;
      cont = 0;
      viapul = false;
      setTimeout(function() {
        rand();
        $("h1").html("<h1 id='level-title' style='color:"+colorArray[Math.floor(Math.random()*50)+1]+"'>Livello " + lvl+"</h1>");
        viapul = true;
      }, 600);
    }
  } // quando ho azzeccato tutto , aumenta di livello.
});


$("span").click(function() {
  if (via === true) {
    viapul = true;
    $("h2").addClass("nascondi");
    $("h1").text("Livelloh 0");
    setTimeout(function() {
      rand();
    }, 250);
    via = false;
  }
}); //serve per ricominciare o iniziare
