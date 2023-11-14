function setup() {
  // If you want your drawing to take up a larger part of the screen, you can
  // just make this bigger!
  createCanvas(400, 400);

  // This sets the background for the snowman. You might want to move it
  background(184, 224, 255);
}

// From here on down, things should more or less be just like Khan Academy!
// Just remember you'll need to refresh your browser to re-run your code and
// see any changes.

function draw() {
  // Unlike Khan Academy, though, you need to put all your drawing code inside
  // the `draw` function here. You can still set variables at the top-level,
  // and then modify them inside the draw function to do animations. You just
  // can't call drawing functions like `ellipse` outside the `draw` function.
  fill(0, 100, 255);

  // This creates the snowman's head
  ellipse(100, 60, 40, 40);

  // This creates the snowman's torso
  ellipse(100, 115, 70, 70);

  // This creates the snowman's... I don't know, feet?..
  ellipse(100, 200, 100, 100);
}
