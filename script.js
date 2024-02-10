// utility functions
function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function move(clock, x, y) {
    console.log("moving clock to x,y:",x,y);
    clock.style.left = x;
    clock.style.top = y;
}

// constants
const params = new URLSearchParams(window.location.search);

const initialColor = params.has("initialColor") ? params.get("initialColor") : "white";
let randomizeColor = true;

// if the option is defined and is equal to `false`
if (params.has("randomizeColor") && (params.get("randomizeColor") == "false" || params.get("randomizeColor") == "0")) {
    randomizeColor = false;
}

const speed = params.has("speed") ? params.get("speed") : 2500;

const clock = document.createElement("div");
const textnode = document.createTextNode(new Date().toString());
clock.appendChild(textnode);

// set the ID and the fill color to the logo
clock.id = "clock";
clock.style.color = initialColor;
clock.style.fontSize = "2em";
// clock.style.border = "1px solid #666666";
// clock.style.width = dimensions[0];
// clock.style.height = dimensions[1];
clock.style.position = "absolute";

// add the logo to the page
document.body.append(clock);

// variables
let dimensions = [clock.offsetWidth, clock.offsetHeight];
let x = randint(1, window.innerWidth - dimensions[0] - 1);
let y = randint(1, window.innerHeight - dimensions[1] - 1);

// move the logo to the randomized initial position
move(clock, x, y);

// main loop
setInterval(() => {
    dimensions = [clock.offsetWidth, clock.offsetHeight];
    x = randint(1, window.innerWidth - dimensions[0] - 1);
    y = randint(1, window.innerHeight - dimensions[1] - 1);
    if (randomizeColor) {
        clock.style.color = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
    } 
    move(clock, x, y);
},speed);

setInterval(() => {
    clock.innerText = new Date().toString();
}, 1000)