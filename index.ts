// CSS Styles importieren; kann gelöscht werden falls nicht benötigt
import './style.css';

// Wir laden p5js
import p5 = require('p5');
import { drawCircle } from './circle';

// Wir informieren p5js, welche Funktionen unser Programm bereitstellt.
// Mit TypeScript und p5js verwendet man am besten den "instance mode"
// statt dem "global mode" (https://p5js.org/reference/#/p5/p5).
// Man kann die Funktionen entfernen, die man in der jeweiligen Übung
// nicht braucht (z.B. kein Reagieren auf Tastatur -> `keyPressed` weg).
export let p: p5;
new p5((p5: p5) => {
  p = p5;
  p.preload = preload;
  p.setup = setup;

  p.draw = draw;
  p.keyPressed = keyPressed;
  p.mousePressed = mousePressed;
});

function preload() {
  // Diese Funktion wird vor `setup` aufgerufen. Wir verwenden sie,
  // um z.B. Bilder zu laden.
  // https://p5js.org/reference/#/p5/preload
}

function setup() {
  // Diese Funktion wird einmal beim Programmstart aufgerufen.
  // https://p5js.org/reference/#/p5/setup
  p.createCanvas(700, 500);
}

function keyPressed() {
  // Diese Funktion wird aufgerufen, wenn eine Taste gedrückt wird.
  // https://p5js.org/reference/#/p5/keyPressed
  console.log(`Key ${p.keyCode} has been pressed`);
}

function mousePressed() {
  // Diese Funktion wird aufgerufen, wenn die Mause geklickt wird.
  // https://p5js.org/reference/#/p5/mousePressed
  console.log(`Mouse was pressed at ${p.mouseX}/${p.mouseY}`);
}

function draw() {
  p.background('white');

  for(let x=0; x< p.width; x+=100) {
    for(let y=0; y< p.width; y+=100) {
      smilie(x, y);    
    }  
  }
}

function smilie(x: number, y: number) {
  p.push();
  p.translate(x, y);

  p.stroke('black');
  p.fill('yellow');
  p.strokeWeight(5);
  p.circle(50, 50, 100);

  p.fill('black');
  p.circle(70, 35, 10);
  p.circle(30, 35, 10);

  p.noFill();
  p.arc(50, 50, 50, 50, 0.5, Math.PI - 0.5, p.OPEN);

  p.pop();
}
