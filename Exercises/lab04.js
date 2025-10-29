// declaring an array with name myCommutes
let myCommutes = ["Melody's Car", "walking", 
    "Melo", "friends"];
     
    // declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Melody's Car",
    route: "Coastal Campus To Kresge",
    color: "gray",
    hasCupHolders: true,
    drivers: ["Melody", "Angel"],
};

let megaSentence;

megaSentence = "<p>My favorite commute from off and on campus are: " 
+ myCommutes[0] + ", " + myCommutes[1] + "</p>";

megaSentence = megaSentence + 
"<p>My favourite commute possesses such characteristics:  " + 
myFavouriteCommute.type + ", passing costal campus " + myFavouriteCommute.route +
 ", the best driver: " + 
myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence);