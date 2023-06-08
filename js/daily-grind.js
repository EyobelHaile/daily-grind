/*

Here are the main things we'll likely need to store for each coffee:
name - the name of the coffee
pic - picture of coffee
color - the color associated with the coffee
alt - the alt tag identifying the coffee
day- the day of the week
desc - the description go the coffee

*/

let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){
    return `
    <p><img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
`;
}

//today = 3;
if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);

 switch(today) {
    case 1: 
        today = "Monday";

        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            color: "pink",
            day: "Monday",
            desc: `I love me some bubble tea!`
        };
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha latte",
            color: "brown",
            day: "Tuesday",
            desc: `I heart chocolate!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Cold-Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold-brew coffee",
            color: "black",
            day: "Wednesday",
            desc: `Cold-brew is the best!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a espresso shot",
            color: "white",
            day: "Thursday",
            desc: `We all need a drip!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name: "pumpkin-spice-latte",
            pic: "images/mocha.jpg",
            alt: "A picture of a pumpkin-spice-latte",
            color: "orange",
            day: "Friday",
            desc: `Yay! It's Friday and that means, it's pumpkin-spice-latte time!`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappaccino",
            color: "green",
            day: "Saturday",
            desc: `Frapp it your way!`
        };
    break;

    default:
        today = "Sunday";
        coffee = {
            name: "caramel-latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel-latte",
            color: "tan",
            day: "Sunday",
            desc: `It's better latte than never!`
        };

    break;

} 

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
console.log(coffee);
