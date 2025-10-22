var count = 0;
let colorCount= 0;
var colors= ["Orchid", "Coral", "HotPink", "Plum"];


$("#needy-button").click( function() {

   if ( count < 5) {mood = " fresh and happy"}
else if ( (count >=5) && (count <10) ) {mood=" keep pushing"; }
else {mood = " so tired"; }
 
   $("#needy-button").html(" Clicks: " + count + " Color: " + colors[colorCount] + mood);

   $("body").css("background-color", colors[colorCount]) ;

   

   $("body").append("<img width=50 src='images/orchid.webp'>");

count = count + 1;
colorCount = colorCount + 1;

if ( colorCount == 4 ) { colorCount=0; } //new line also == <--- means something from different from =



});




// add a button titled click me

// when it is clicked

// show how many times

// a tap limit

