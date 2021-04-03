let neueHaasReg, neueHaasMed, texts, timePassed, lastTime, currentTime, counter, colorCounter;
let colors, magenta1, cyan1, yellow1, red1, magentaAlpha, cyanAlpha, black, white;
const Y_AXIS = 1;
const X_AXIS = 2;
//var message = createDiv('');

function preload() {
  neueHaasReg = loadFont('NHaasGroteskTXPro-55Rg.ttf');
  neueHaasMed = loadFont('NHaasGroteskTXPro-65Md.ttf');
  texts = loadStrings('STEAMis.txt')
}

function setup() {
  // put setup code here
  createCanvas(1200, 275);
//  background(225);
  lastTime = 0; 
  counter = 0;
  colorCounter = 0;
  magenta1 = color(221, 62, 147);
  magentaAlpha = color(221, 67, 147, 200);
  cyan1 = color(67, 222, 183);
  cyanAlpha = color(19, 160, 183, 0);
  yellow1 = color(243, 248, 0, 200);
  red1 = color(247, 64, 19);
  black = color(10, 10, 10);
  white = color(245, 245, 245);
  grey = color(240, 240, 240, 200);
  whiteAlpha = color(245, 245, 245, 0);
  colors = [magenta1, cyan1, yellow1, red1];

  textFont(neueHaasReg);
  textSize(100);
//  text(texts, 50, 50)
//  text(texts, 50, 50);

  console.log(texts);
//  message.center();
//  framerate(3)
}

function draw() {
  currentTime = millis();
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;


  if (counter == texts.length) {
    counter = 0
  }
  if (currentTime - lastTime >= 1000) {
  //  resizeCanvas(windowWidth, windowHeight);
  //  background(225);
  //  setGradient(0, 0, width, height, magenta1, cyan1, X_AXIS);
  //  background(grey);
  //  setGradient(0, 0, windowWidth * 0.75, windowHeight, magenta1, white, X_AXIS);
  //  backgroundTexts(texts[counter]);
    lastTime = currentTime;
    counter += 1;
  //  text(texts[counter], 20, 150 + 50 * counter)
  //  midBackdrop();
    clear();
    fill(black);
    noStroke();
    textSize(100);
    textFont(neueHaasReg);
    text("STEAM is", 50, 125);
  //  text(texts[counter], windowWidth / 2 - textWidth(texts[counter]) / 2, windowHeight / 2 + 50)
    text(texts[counter], 50, 225)
  //  message.html(`STEAM is${texts[counter]}`);
  //  message.center();

  /*
    ambientLight(0);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, locX, locY, 250);
    push();
    translate(0, 0, 100);
    rotateZ(frameCount * 0.02);
    rotateX(frameCount * 0.02);
    specularMaterial(250);
    box(100, 100, 100);
    pop();
    */
  } else {
  //  resizeCanvas(windowWidth, windowHeight);
  //  background(225);
  //  setGradient(0, 0, width, height, magenta1, cyan1, X_AXIS);
  //  text(texts[counter], 20, 150 + 50 * counter)
  //  background(grey);
  //  setGradient(0, 0, windowWidth * 0.75, windowHeight, magenta1, white, X_AXIS);
  //  backgroundTexts(texts[counter]);
  //  midBackdrop();
    fill(black);
    textSize(100);
    noStroke();
    clear();
    textFont(neueHaasReg);
    text("STEAM is", 50, 125)
  //  text(texts[counter], windowWidth / 2 - textWidth(texts[counter]) / 2, windowHeight / 2 + 50)
    text(texts[counter], 50, 225)
  //  message.html(`STEAM is${texts[counter]}`);
  //  message.center();
  /*
    ambientLight(0);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, locX, locY, 250);
    push();
    translate(0, 0, 100);
    rotateZ(frameCount * 0.02);
    rotateX(frameCount * 0.02);
    specularMaterial(250);
    box(100, 100, 100);
    pop();
    */
  }
}

function midBackdrop() {
  setGradient(windowWidth / 2 - 550, windowHeight / 2 - 175, 
    1200, 275, grey, grey, Y_AXIS)
}


//  for (let i = 0; i < texts.length; i ++) {
//    text(texts[i], 150, 150 + 50 * i)
//  }
  // put drawing code here


function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
    }
  }
}


function backgroundTexts(str) {
  textSize(400);
  textFont(neueHaasMed);
  stroke(cyan1);
  strokeWeight(5);
  let tWidth = textWidth(str);
//  let horiCount = round(windowWidth / tWidth);
  let horiCount = 2;
//  print(horiCount);
  let textHeight = textAscent() - 120;
//  let vertiCount = round(windowHeight / textHeight);
  let vertiCount = 8;
  let max = horiCount * vertiCount;
  print(horiCount + " " + vertiCount); 
  /* if (colorCounter > colors.length) {
    colorCounter = 0;
    fill(colors[colorCounter])
    fill(yellow1)
  } else {
    fill(colors[colorCounter]);
    colorCounter += 1 
    fill(yellow1)
  }*/
  fill(yellow1);
  for (let i = 0; i < vertiCount; i ++) {
    for (let col = 0; col < horiCount; col ++) {
      if (i % 2 == 0){
        text(str, col * tWidth - 50 * i, i * textHeight + counter * 50);
      } else {
        text(str, col * tWidth + 35 * i, i * textHeight + counter * 50);
      }
      
    }
  //  print(column);
  //  print(textHeight);
  //  text(str, column * tWidth, row * 50)
  }
}
/*
function noiseBackground(col) {
  let noiseScale = 0.05;
  let tempColor = col;
  for (let w = 0; w < windowWidth; w + 10) {
    for (let h = 0; h < windowHeight; h + 10) {
      newRed = map(noise(w, h), 0, 1, 45, 255); 
      tempColor.setRed(newRed);
      stroke(tempColor);
      strokeWeight(10);
      point(w, h)
    }
  }
}
*/

