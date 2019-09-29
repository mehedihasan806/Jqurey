// bulb start
function lightoff(){
	document.getElementById('myImage').src='images/pic_bulboff.gif';
}
function lighton(){
	document.getElementById('myImage').src='images/pic_bulbon.gif';
}
// bulb start
// date and time start
function datetime(){
	document.getElementById('time').innerHTML = Date();  /* date is pre define innerHTML veriable */
}
// date and time end
// content start
function content(){
	document.getElementById('content').innerHTML = "I am fine"; 
}
// content end 
// style start
function size(){
	document.getElementById('demo').style.fontSize='35px'; 
}
// style end
// hide  show start
function Hide(){
	document.getElementById('hide1').style.display='none'; 
}
function show(){
	document.getElementById('hide1').style.display='block'; 
}
// hide  show end
// java statement start
function sum(){
	var x, y, z;  // Statement 1
x = 5;    // Statement 2
y = 6;    // Statement 3
z = x + y;  // Statement 4

document.getElementById("math").innerHTML ="The value of z is " + z + "."; 
}
// and 
function and() {
  document.getElementById("p1").innerHTML = "Hello sir!";
  document.getElementById("p2").innerHTML = "How are you?";
}
// java statement end
// object start
var person = {
  firstName: "MEHEDI",
  lastName: "HASAN",
  age: 22,
  eyeColor: "blue"
};
// Display some data from the object:
document.getElementById("mydetails").innerHTML =
person.firstName + person.lastName + " is " + person.age + " years old.";

// jqurey ui start===========================================
$(document).ready(function(){
	// show hide & toggle
	$('.btn1').click(function(){
		$('.card1').show(1000);
	});
	$('.btn2').click(function(){
		$('.card1').hide(2000);
	});
	$('.btn3').click(function(){
		$('.card1').toggle(2500);
	});
	// show hide & toggle
	// fadeIn fadeOut fateToggle &fadeTo 
	$('.btn4').click(function(){
		$('.fade_img').fadeIn(1000);
	});
	$('.btn5').click(function(){
		$('.fade_img').fadeOut(2000);
	});
	$('.btn6').click(function(){
		$('.fade_img').fadeToggle(3000);
	});
	$('.btn7').click(function(){
		$('.fade_img').fadeTo(1000,.2);
	});
	// fadeIn fadeOut fateToggle &fadeTo 
    // slide toggle 
    $('.flip').click(function(){
		$('.panel').slideToggle("slow");
	});
    // slide toggle 
});

// jqurey ui start
$( function() {
	// draggable
    $( "#draggable" ).draggable();
	// draggable
  } );
// dropable 
$( function() {
    $( "#draggable2" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );
// dropable 
// selectable
$( function() {
    $( "#selectable" ).selectable();
  } );
// selectable
// sortable
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
// sortable
// accordion
$( function() {
    $( "#accordion" ).accordion();
  } );
// accordion
// Autocomplete====================
$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
// Autocomplete
// checkboxradio
$( function() {
    $( "input" ).checkboxradio();
  } );
// checkboxradio
// date
$( function() {
    $( "#datepicker" ).datepicker();
  } );
// date
// menu
 $( function() {
    $( "#menu" ).menu();
  } );
// Tabs
 $( function() {
    $( "#tabs" ).tabs();
  } );
  // tabs
// color animation
$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
// color animation




// jqurey ui end======================================
















