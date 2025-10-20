let count = 0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click( function() {
 
   $("#needy-button").html(" Clicks: " + count + " Color: " + colors[count] );

   $("body").css("background-color", color[count]);

count = count + 1;

});




// add a button titled click me

// when it is clicked

// show how many times

// a tap limit

