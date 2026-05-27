let count = 0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];
$("#needy-button").click( function(){
$("#needy-button").html( "Clicks " + count + " " + colors[count] );
count=count+1;
});



