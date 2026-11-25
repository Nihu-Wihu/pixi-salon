/* VARIABLES */
let hairstyle = 0;
let bangs = 0;
let skinTone = 0;
let eye = 0;
let eyeWidth = 40;
let eyeHeight = 30;
let eyeColors = [
  "rgb(61,29,7)",
  "rgb(118,57,32)",
  "#589DBD",
  "#749452",
  "#85918F",
];

let myPicker;
let myPicker2;
let shirt = 0;
let shirtColors = [
  "rgb(113,189,113)",
  "#458BC2",
  "rgb(175,13,70)",
  "#F2DD9E",
  "rgb(199,163,216)",
  "black",
  "rgb(243,245,243)",
];

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400, 400);

  myPicker = createColorPicker("#322007");
  myPicker.position(340, 130);

  myPicker2 = createColorPicker("pink");
  myPicker2.position(15, 10);

  let btn = createButton(" hair ");
  btn.position(340, 200);
  btn.mousePressed(changeHair);

  let btn2 = createButton("bangs");
  btn2.position(340, 260);
  btn2.mousePressed(changeBangs);

  let btn1 = createButton("skin");
  btn1.position(340, 230);
  btn1.mousePressed(changeSkinTone);

  let btn3 = createButton("eye");
  btn3.position(340, 170);
  btn3.mousePressed(changeEyeColor);

  let btn4 = createButton("shirt");
  btn4.position(340, 100);
  btn4.mousePressed(changeShirt);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(RADIANS);
  rectMode(CORNER);

  //sets the background color
  let f = myPicker2.value();
  background(f);

  let c = myPicker.value();
  let skinColor = "rgb(106,58,34)";
  let mouthStroke = "rgb(82,25,9)";
  let noseColor = "rgb(99,27,13)";

  if (hairstyle === 0) {
    fill(c);
    rect(110, 150, 180, 140);
    ellipse(200, 160, 200, 150);
    triangle(110, 150, 70, 292, 250, 289);
    triangle(290, 160, 140, 292, 335, 290);
  } //short straight hair
  if (hairstyle === 1) {
    fill(c);
    ellipse(200, 160, 180, 160);

    circle(130, 145, 60);
    circle(270, 145, 60);
    circle(145, 120, 60);
    circle(255, 120, 60);
    circle(180, 112, 70);
    circle(220, 112, 70);

    drawCurls(121, 183, 6);
    drawCurls(281, 183, 6);

    rect(125, 246, 149, 137);
  } //curly long
  if (hairstyle === 2) {
    fill(c);
    ellipse(200, 160, 180, 160);

    circle(130, 145, 60);
    circle(270, 145, 60);
    circle(145, 120, 60);
    circle(255, 120, 60);
    circle(180, 112, 70);
    circle(220, 112, 70);

    drawCurls(121, 183, 3);
    drawCurls(281, 183, 3);

    rect(99, 153, 183, 127);
  } //curly short
  if (hairstyle === 3) {
    fill(c);
    rect(110, 150, 180, 200);
    ellipse(200, 160, 180, 160);
  } //long straight
  if (hairstyle === 4) {
    fill(c);
    ellipse(200, 160, 180, 160);
    circle(130, 240, 90);
    circle(260, 240, 90);
  } //space bun
  if (hairstyle === 5) {
    fill(c);
    ellipse(200, 160, 180, 160);
    circle(130, 240, 50);
    circle(265, 240, 50);
    circle(120, 280, 45);
    circle(275, 280, 45);
    circle(115, 320, 40);
    circle(280, 320, 40);
    circle(110, 360, 45);
    circle(280, 360, 50);
    circle(105, 400, 50);
    circle(290, 400, 50);
  } //2 braids
  if (hairstyle === 6) {
    fill(c);
    ellipse(200, 160, 180, 160);
    ellipse(125, 320, 80, 200);
    ellipse(270, 320, 80, 200);
  } //2 ponytails
  if (hairstyle === 7) {
    fill(c);
    ellipse(200, 160, 180, 160);
    circle(140, 240, 90);
  } //bun

  //Face
  //deep
  if (skinTone === 0) {
    skinColor = "rgb(106,58,34)";
    mouthStroke = "rgb(82,25,9)";
    noseColor = "rgb(99,27,13)";

    fill(skinColor);
    noStroke();
    circle(200, 200, 150);
    rect(180, 200, 40, 100);
    circle(175, 220, 100);
    circle(225, 220, 100);

    //blush
    fill("rgb(97,32,12)");
    ellipse(155, 220, 30, 20);
    ellipse(245, 220, 30, 20);
  }
  if (skinTone === 1) {
    skinColor = "rgb(144,86,57)";
    mouthStroke = "rgb(108,54,27)";
    noseColor = "rgb(131,64,25)";

    fill(skinColor);
    noStroke();
    circle(200, 200, 150);
    rect(180, 200, 40, 100);
    circle(175, 220, 100);
    circle(225, 220, 100);

    //blush
    fill("rgb(146,66,47)");
    ellipse(155, 220, 30, 20);
    ellipse(245, 220, 30, 20);
  }
  if (skinTone === 2) {
    skinColor = "rgb(179,117,81)";
    mouthStroke = "rgb(150,61,36)";
    noseColor = "rgb(170,88,55)";

    fill(skinColor);
    noStroke();
    circle(200, 200, 150);
    rect(180, 200, 40, 100);
    circle(175, 220, 100);
    circle(225, 220, 100);

    //blush
    fill("rgb(177,76,50)");
    ellipse(155, 220, 30, 20);
    ellipse(245, 220, 30, 20);
  }
  if (skinTone === 3) {
    skinColor = "#da8f6a";
    mouthStroke = "rgb(201,90,61)";
    noseColor = "rgb(214,102,72)";

    fill(skinColor);
    noStroke();
    circle(200, 200, 150);
    rect(180, 200, 40, 100);
    circle(175, 220, 100);
    circle(225, 220, 100);

    //blush
    fill("rgb(214,102,72)");
    ellipse(155, 220, 30, 20);
    ellipse(245, 220, 30, 20);
  }
  if (skinTone === 4) {
    skinColor = "#e6bc98";
    mouthStroke = "rgb(228,143,121)";
    noseColor = "rgb(225,149,130)";

    fill(skinColor);
    noStroke();
    circle(200, 200, 150);
    rect(180, 200, 40, 100);
    circle(175, 220, 100);
    circle(225, 220, 100);

    //blush
    fill("rgb(240,159,137)");
    ellipse(155, 220, 30, 20);
    ellipse(245, 220, 30, 20);
  }
  if (skinTone === 5) {
    skinColor = "#f3c2aa";
    mouthStroke = "rgb(228,152,132)";
    noseColor = "rgb(242,152,128)";

    fill(skinColor);
    noStroke();
    circle(200, 200, 150);
    rect(180, 200, 40, 100);
    circle(175, 220, 100);
    circle(225, 220, 100);

    //blush
    fill("rgb(242,163,142)");
    ellipse(155, 220, 30, 20);
    ellipse(245, 220, 30, 20);
  }
  if (skinTone === 6) {
    skinColor = "#fbd4c0";
    mouthStroke = "rgb(233,171,155)";
    noseColor = "rgb(235,175,160)";

    fill(skinColor);
    noStroke();
    circle(200, 200, 150);
    rect(180, 200, 40, 100);
    circle(175, 220, 100);
    circle(225, 220, 100);

    //blush
    fill("rgb(238,175,158)");
    ellipse(155, 220, 30, 20);
    ellipse(245, 220, 30, 20);
  }
  //pale

  //Eyes
  if (mouseIsPressed) {
    //smile
    fill("rgb(253, 246, 248)");
    stroke(mouthStroke);
    strokeWeight(4.5);
    circle(203, 230, 35);

    fill(skinColor);
    noStroke();
    rect(182, 208, 42, 22);

    //Eyes closed
    fill("black");
    ellipse(170, 200, 40, 30 / 8);
    ellipse(230, 200, 40, 30 / 8);

    triangle(152, 199, 150, 201, 140, 193);
    triangle(248, 199, 250, 201, 260, 193);
  } else {
    //smile
    fill(skinColor);
    stroke(mouthStroke);
    strokeWeight(4.5);
    circle(203, 230, 35);

    fill(skinColor);
    noStroke();
    rect(182, 208, 42, 22);

    //Eyes open
    fill("rgb(245,234,231)");
    ellipse(170, 200, 40, 30);
    ellipse(230, 200, 40, 30);

    fill(eyeColors[eye]);
    arc(175, 184, 40, 55, 0, HALF_PI + HALF_PI);
    arc(235, 184, 40, 55, 0, HALF_PI + HALF_PI);

    fill("white");
    circle(185, 195, 9);
    circle(245, 195, 9);
  }

  //nose
  fill(noseColor);
  noStroke();
  ellipse(200, 220, 20, 15);

  if (bangs === 1) {
    fill(c);
    //bangs
    rect(140, 125, 40, 60);
    rect(170, 115, 60, 70);
    rect(220, 125, 40, 60);
  } //straight bangs
  if (bangs === 0) {
    fill(c);
    circle(259, 160, 50);
    circle(239, 130, 50);
    circle(220, 150, 50);
    circle(205, 140, 68);
  } //curly bangs

  fill(shirtColors[shirt]);
  ellipse(200, 444, 220, 300);

  //Text
  fill("black");
  textSize(13);
  text("I am not pretty. I am not beautiful. I am as radiant as the sun", 15, 55);
  text("--- Suzanne Collins", 15, 70)

  //Directions for mouse press
  textSize(12);
  text("Click to see me blink and smile.", 205, 385);
}

function drawCurls(x, y, numberOfCurls) {
  for (let i = 0; i < numberOfCurls; i++) {
    let curlSize = 60;
    let newY = y + i * 35;

    if (numberOfCurls < 6) {
      let curlSize = 70;
    }
    circle(x, newY, curlSize);
  }
}

function changeShirt() {
  shirt++;
  if (shirt > 6) shirt = 0;
}

function changeHair() {
  hairstyle++;
  if (hairstyle > 7) hairstyle = 0;
}

function changeBangs() {
  bangs++;
  if (bangs > 2) bangs = 0;
}

function changeSkinTone() {
  skinTone++;
  if (skinTone > 6) skinTone = 0;
}

function changeEyeColor() {
  eye++;
  if (eye > 4) eye = 0;
}
