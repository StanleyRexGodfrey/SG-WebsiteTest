let soundFile, reverb;
let img;
function preload() {
  soundFile = loadSound('DoReMiFaSo.wav');
  img = loadImage('Cathedral.jpg');
}

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playSound);

  reverb = new p5.Reverb();
  soundFile.disconnect(); // so we'll only hear reverb...

  // connect soundFile to reverb, process w/
  // 3 second reverbTime, decayRate of 2%
  reverb.process(soundFile, 3, 2);
}

function draw() {
  let dryWet = constrain(map(mouseX, 0, width, 0, 1), 0, 1);
  // 1 = all reverb, 0 = no reverb
  reverb.drywet(dryWet);

  background(img);
  text('tap to play', 10, 20);
  text('dry/wet: ' + round(dryWet * 100) + '%', 10, height - 20);
}

function playSound() {
  soundFile.play();
}
