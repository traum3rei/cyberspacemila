import './../App.css';
import { ReactP5Wrapper } from "@p5-wrapper/react";
import love from './assets/heart.png'

function sketch(p) {
    let grid = 64;

    let num;

    let tile;

    let gridWStart;
    let currentCharacter = 0;
    let text = "This is for you <3";
    let margin = 0;
    let count = 0;
    let img;

    p.preload = function () {
        img = p.loadImage(love);
        //console.log(img)
    }

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight + 5)
        p.background(0)
        num = p.windowHeight - 5;
        tile = num / grid;
        gridWStart = (p.windowWidth - num) / 2
        //p.saveGif('./love', 7)
    };

    p.draw = function () {
        p.background(0)
        p.push()
        p.translate(p.width / 2, p.height / 2)
        p.imageMode(p.CENTER)
        let imgWidth = p.min(img.width, p.windowWidth)
        let imgHeight = p.min(img.height, imgWidth * 0.98)
        p.image(img, 0, 0, imgWidth, imgHeight);
        p.pop()

        let currentString = text.substring(0, currentCharacter);

        p.push();
        p.stroke(255)
        p.fill(255)
        p.strokeWeight(2);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(30);
        //p.rectMode(p.CENTER)
        p.textFont('Courier');
        p.text(currentString, 0, 0, p.width - margin * 2, p.height - margin * 2)

        p.pop()

        p.fill(255)
        //p.text("Hello", p.width/2, p.height/2)
        if (currentCharacter >= text.length) {
            count++;
            if (count === 180) {
                count = 0;
                currentCharacter = 0;
            }
        } else {
            currentCharacter += p.random(0.05, 0.15);
        }

    }
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight + 5);
        gridWStart = (p.windowWidth - p.windowHeight - 5) / 2
        num = p.windowHeight - 5;
        tile = p.windowHeight - 5 / grid;
    }
}


function P5Sketch() {
    return <ReactP5Wrapper sketch={sketch} />
}


export default P5Sketch;