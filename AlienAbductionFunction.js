let osc, playing, freq, amp;

function preload() {
  img = loadImage('UFO.jpg');
}
function setup() {
  let cnv = createCanvas(427, 532);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw() {
  background(img)
  freq = constrain(map(mouseY, 0, height, 700, 100 ), 100, 700);
  amp = constrain(map(mouseY, height, 0, 0.5, 1), 0, 1);

  text('Click to play', 20, 20);
  text('Freq: ' + freq, 20, 40);
  text('Gain: ' + amp, 20, 60);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}
