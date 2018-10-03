var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
                      "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");

canvas.canvas.width = window.innerWidth;
canvas.canvas.height = window.innerHeight;

canvasElement.insertBefore('#container');

window.addEventListener('resize', resizeCanvas, false);

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window
function resizeCanvas() {
	canvas.canvas.width = window.innerWidth;
	canvas.canvas.height = window.innerHeight;
}

var FPS = 30;
var player = {
	color: "#00A",
	x: 50,
	y: 270,
	width: 20,
	height: 30,
	draw: function() {
		canvas.fillStyle = this.color;
		canvas.fillRect(this.x, this.y, this.width, this.height);
	}
};

//prevents form submit from refreshing page.
$("#login_form").submit(function(e) {
    e.preventDefault(); 
});

setInterval(function() {
	update();
	draw();
}, 1000/FPS);

var nickname = "";
function start()
{
	nickname = document.getElementById("nickname").value;
	document.getElementById("login").classList.add("nodisplay");
	document.getElementById("top_left_overlay").classList.add("nodisplay");
	document.getElementById("top_right_overlay").classList.add("nodisplay");
	document.getElementById("bottom_right_overlay").classList.add("nodisplay");
	document.getElementById("bottom_left_overlay").classList.add("nodisplay");
	document.getElementById("bottom_middle_overlay").classList.add("nodisplay");
}
function update() {
	
}

function draw() {
  //canvas.fillStyle = "#111"; // Set color to grey
  //canvas.font = '72px Courier New';
  //canvas.fillText("Hello World Dev!", canvas.canvas.width / 2 - 250, 50);
}

function preload() {
	
}

function create() {
	
}