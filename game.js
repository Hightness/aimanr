var sr = ['red','green','yellow','blue'], seq=[],cont=0,lvl=0,via=true;
function playsound(c){
  new Audio("sounds/"+c+".mp3").play();
}//per fare suono
function rand(){
  var n = Math.floor(Math.random()*4);
  seq.push(sr[n]);
  $("#"+sr[n]).fadeOut(50).fadeIn(50);
  playsound(sr[n]);
}//aggiunge un nuovo pulsante
function perso(){
  $('body').addClass("game-over");
  setTimeout(function (){
    $('body').removeClass("game-over");
  },200);
}
function anim(colore){
  $('#'+colore).addClass("pressed");
  setTimeout(function (){
    $('#'+colore).removeClass("pressed");
  },250);
}

$(".btn").click(function (){
  if(seq[cont]!==$(this).attr("id")){
    anim($(this).attr("id"));
    lvl=0;
    $("h1").text("Hai perso, premi qui per rigiocare..");
    via=true;
    seq=[];
    cont=0;
    perso();
    new Audio("sounds/wrong.mp3").play();
    }// resetta tutto , per quando perdi
  else{
    playsound($(this).attr("id")); // fa il suono
    $(this).fadeOut(50).fadeIn(50); // fa l'animazione
    cont++;
  }//quando non ho ancora perso.
  if((via===false)&&(cont>lvl)){
    lvl++;
    cont=0;
    setTimeout(function (){
      rand();
      $("h1").text("Level "+lvl);
    },600);
  }// quando ho azzeccato tutto , aumenta di livello.
});


$("h1").click(function (){
  if (via===true){
  $("h1").text("Level 0");
  rand();
  via=false;
}
});//serve per ricominciare o iniziare












//versione mini:
//var sr=['red','green','yellow','blue'],seq=[],cont=0,lvl=0,via=!0;function playsound(c){new Audio("sounds/"+c+".mp3").play()}
//function rand(){var n=Math.floor(Math.random()*4);seq.push(sr[n]);$("#"+sr[n]).fadeOut(50).fadeIn(50);playsound(sr[n])}
//function perso(){$('body').addClass("game-over");setTimeout(function(){$('body').removeClass("game-over")},200)}
//function anim(colore){$('#'+colore).addClass("pressed");setTimeout(function(){$('#'+colore).removeClass("pressed")},250)}
//$(".btn").click(function(){if(seq[cont]!==$(this).attr("id")){anim($(this).attr("id"));lvl=0;$("h1").text("Hai perso, premi qualsiasi pulsante per rigiocare..");via=!0;seq=[];cont=0;perso();new Audio("sounds/wrong.mp3").play()}
//else{playsound($(this).attr("id"));$(this).fadeOut(50).fadeIn(50);cont++}
//if((via===!1)&&(cont>lvl)){lvl++;cont=0;setTimeout(function(){rand();$("h1").text("Level "+lvl)},600)}});$(document).keypress(function(){if(via===!0){$("h1").text("Level 0");rand();via=!1}})
