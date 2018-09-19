// Exercise 1 - Moving pictures
// Pippin Barr
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


//The image of a blue circle
var pamCircleImage;
//The current position of the blue cirle
var pamCircleImageX;
var pamCircleImageY;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;


// preload()
//
// Load the two images we're using before the program starts

function preload() {
  feltTextureImage = loadImage("assets/images/pamrectangle.jpg");
  pamCircleImage = loadImage ("assets/images/pan_blue_circle.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);


  //Start the blue circle image at the centre of the createCanvas
  pamCircleImage = width/2;
  pamCircleImage = height/2;


  // Start the felt image perfectly off screen to the left of the canvas
  feltTextureImageY = width/2;
  feltTextureImageX = 0 - feltTextureImage.height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {

  // Move the felt image right by increasing its y position
  feltTextureImageX += 1;

  // Display the felt image
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);



  //Move the blue circle by moving it 1/12th of its current distance from the mouse

  //Calculate the distance in X and in Y
  var xDistance = mouseX - pamCircleImageX;
  var yDistance = mouseY - pamCircleImageY;
  //Add 1/12th of the x and y distance to the circle's current (x,y) location
  pamCircleImageX = pamCircleImageX + xDistance/12;
  pamCircleImageY = pamCircleImageY + yDistance/12;

  //Display the circle images
  image(pamCircleImage,pamCircleImageX,pamCircleImageY);
}
