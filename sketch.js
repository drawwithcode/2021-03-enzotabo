//variabili immagini
let imgBG;
let mscott;
let logo;
let mscotts = [];

//variabili suoni
let theofficesong;
let msquotes = [];

//array di cerchi
var michaels = [];

//altre variabili;
let velocita = [-3, -2.5, -2, -1.5, 1.5, 2, 2.5, 3];

function preload() {
  //preload immagini
  imgBG = loadImage("./assets/images/theofficebackground_1.jpg");
  mscott = loadImage("./assets/images/michaelscott.png");
  logo = loadImage("./assets/images/theofficelogo.png");
  ball = loadImage("./assets/images/paperball.png");
  for (var i = 0; i < 9; i++) {
    mscotts[i] = loadImage("./assets/images/michaelscott/ms_" + i + ".png");
  }

  //preload suoni
  theofficesong = loadSound("./assets/sound/theoffice_1.mp3", loaded);
  for (var i = 0; i < 9; i++) {
    msquotes[i] = loadSound("./assets/sound/quotes/michaelscott_" + i + ".mp3");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //cursor("./assets/images/theofficelogo.png", 1, 1);

  noCursor();

  // for (var i = 0; i < 9; i++) {
  //   let raggio = 100;
  //   var x = random(raggio / 2, width - raggio / 2);
  //   var y = random(raggio / 2, height - raggio / 2);
  //   let ms = mscotts[i];
  //   let ms_quote = msquotes[i];

  //   michaels.push(new Michael(x, y, ms, ms_quote, raggio));
  // }

  var i = 0;

  while (michaels.length < 9) {
    let raggio = 100;
    var x = random(raggio / 2, width - raggio / 2);
    var y = random(raggio / 2, height - raggio / 2);

    var overlapping = false;

    for (var j = 0; j < michaels.length; j++) {
      var other = michaels[j];
      var d = dist(x, y, other.x, other.y);
      if (d < raggio + other.r) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      michaels.push(new Michael(x, y, mscotts[i], msquotes[i], raggio));
      i++;
    }
  }
}

function loaded() {
  //theofficesong.loop();
  theofficesong.setVolume(0.3);
}

function mouseClicked() {
  var mouseFuori = 0;
  //if (theofficesong.isPlaying() == false) theofficesong.play();
  for (var i = 0; i < michaels.length; i++) {
    // michaels[i].clicked();

    var d = dist(mouseX, mouseY, michaels[i].x, michaels[i].y);
    if (d < 37.5) {
      if (michaels[i].quote.isPlaying() == false) {
        theofficesong.stop();
        michaels[i].quote.play();
      }
    }
    if (d > 37.5) {
      mouseFuori++;
      michaels[i].quote.stop();
      if (mouseFuori == 9 && theofficesong.isPlaying() == false) {
        theofficesong.play();
      }
    }
  }
}

function draw() {
  //background(220);

  push();
  translate(width, 0);
  scale(-1, 1);
  imageMode(CENTER);
  image(imgBG, windowWidth / 2, windowHeight / 2, width, height);
  pop();
  image(logo, width / 2 - 50, height / 2 - 8.3, 100, 16.61);

  for (var i = 0; i < michaels.length; i++) {
    michaels[i].move();
    michaels[i].display();
    michaels[i].riproduzione();
  }

  // for (var i = 0; i < michaels.length; i++) {
  //   for (var j = 0; j < michaels.length; j++) {
  //     if (i != j) {
  //       if (michaels[i].intersezione(michaels[j])) {
  //         console.log("COLLISIONE");
  //       }
  //     }
  //   }
  // }

  image(ball, mouseX - 25, mouseY - 25, 50, 50);
}
