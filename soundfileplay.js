let sound;

function setup() {
  sound = loadSound('snare.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (sound.isPlaying()) {
    // .isPlaying() returns a boolean
    sound.stop();
    background(255, 0, 0);
  } else {
    sound.play();
    background(0, 255, 0);
  }
}
