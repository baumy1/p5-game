var runningFrame = 0;

function setup() {
    createCanvas(620, 480);
    frameRate(24);

    // Load images
    charRunning = [];
    for (i = 1; i <= 8; i++) {
        charRunning.push(loadImage("dog/Run (" + i + ").png"));
    }

}

function draw() {
    // Draw the sky
    noStroke();
    fill(79, 185, 234);
    rect(0, 0, canvas.width, canvas.height);

    // Draw line between grass and sky
    stroke(0, 0, 0);
    strokeWeight(10);
    line(0, canvas.height - 40, canvas.width, canvas.height - 40);

    // Draw the grass
    noStroke();
    fill(81, 165, 58);
    rect(0, canvas.height - 40, canvas.width, canvas.height);

     // Make our character Run
    image(charRunning[runningFrame], 0, canvas.height - 122, 80, 80);
    if (runningFrame == 7) {
        runningFrame = -1;
    }
    runningFrame++;
}