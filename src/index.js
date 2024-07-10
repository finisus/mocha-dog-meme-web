import './style.css';

import yawnLeftImg from './metadata/meme/yawn_left_framed.png';
import headerImg from './metadata/header-with-crown-2.png';
import yawnRightImg from './metadata/meme/yawn_right_framed.png';

import sideEyeImg from './metadata/meme/bombastic_sideeye_framed.png';
import chomp1Img from './metadata/meme/chomp1_framed.png';
import chomp2Img from './metadata/meme/chomp2_framed.png';
import comfyBlankyImg from './metadata/meme/comfy_in_blanky_framed.png';
import sillyTongueImg from './metadata/meme/tongue_silly_framed.png';
import wutImg from './metadata/meme/wut2_framed.png';

import coffeeCupImg from './metadata/coffee-cup-to-go.png';
import starsSolidBigImg from './metadata/stars-solid-big.png';
import gemImg from './metadata/gem.png';
import starsPixelImg from './metadata/stars-pixel.png';
import arrowHeartFlowerImg from './metadata/arrowHeart_flower.png';
import heartsNstarsImg from './metadata/heartsNstars.png';


const header = document.querySelector('header');

const header_left = document.createElement('img');
header_left.id = "yawnLeftHeader";
header_left.src = yawnLeftImg;
header.appendChild(header_left);

const header_title = document.createElement('img');
header_title.id = "headerTitle";
header_title.src = headerImg;
header.appendChild(header_title);

const header_right = document.createElement('img');
header_right.id = "yawnRightHeader";
header_right.src = yawnRightImg;
header.appendChild(header_right);


const main = document.querySelector('main');

const memesContainer = document.createElement('div');
memesContainer.id = "memesContainer";

const sideEye_latte = document.createElement('img');
sideEye_latte.id = "sideEyeImg";
sideEye_latte.src = sideEyeImg;
memesContainer.appendChild(sideEye_latte);

const chomp1_latte = document.createElement('img');
chomp1_latte.id = "chomp1Img";
chomp1_latte.src = chomp1Img;
memesContainer.appendChild(chomp1_latte);

const chomp2_latte = document.createElement('img');
chomp2_latte.id = "chomp2Img";
chomp2_latte.src = chomp2Img;
memesContainer.appendChild(chomp2_latte);

const comfyBlanky_latte = document.createElement('img');
comfyBlanky_latte.id = "comfyBlankyImg";
comfyBlanky_latte.src = comfyBlankyImg;
memesContainer.appendChild(comfyBlanky_latte);

const sillyTongue_latte = document.createElement('img');
sillyTongue_latte.id = "sillyTongueImg";
sillyTongue_latte.src = sillyTongueImg;
memesContainer.appendChild(sillyTongue_latte);

const wut_latte = document.createElement('img');
wut_latte.id = "wutImg";
wut_latte.src = wutImg;
memesContainer.appendChild(wut_latte);

main.appendChild(memesContainer);

const fillerContainer = document.createElement('div');
fillerContainer.id = "fillerContainer";

const coffeeCup = document.createElement('img');
coffeeCup.id = "coffeeCupImg";
coffeeCup.src = coffeeCupImg;
fillerContainer.appendChild(coffeeCup);

const starsSolidBig = document.createElement('img');
starsSolidBig.id = "starsSolidBigImg";
starsSolidBig.src = starsSolidBigImg;
fillerContainer.appendChild(starsSolidBig);

const gemWithDashes = document.createElement('img');
gemWithDashes.id = "gemImg";
gemWithDashes.src = gemImg;
fillerContainer.appendChild(gemWithDashes);

const starsPixel = document.createElement('img');
starsPixel.id = "starsPixelImg";
starsPixel.src = starsPixelImg;
fillerContainer.appendChild(starsPixel);

const arrowHeartFlower = document.createElement('img');
arrowHeartFlower.id = "arrowHeartFlowerImg";
arrowHeartFlower.src = arrowHeartFlowerImg;
fillerContainer.appendChild(arrowHeartFlower);

const heartsNstars = document.createElement('img');
heartsNstars.id = "heartsNstarsImg";
heartsNstars.src = heartsNstarsImg;
fillerContainer.appendChild(heartsNstars);

main.appendChild(fillerContainer);


const footer = document.querySelector('footer');

const socials = document.createElement('div');
socials.id = "socials";

const telegramBtn = document.createElement('button');
telegramBtn.id = "telegramBtn";
telegramBtn.innerHTML = `Telegram`;
socials.appendChild(telegramBtn);

const twitterBtn = document.createElement('button');
twitterBtn.id = "twitterBtn";
twitterBtn.innerHTML = `Twitter`;
socials.appendChild(twitterBtn);

const chartBtn = document.createElement('button');
chartBtn.id = "chartBtn";
chartBtn.innerHTML = `Chart`;
socials.appendChild(chartBtn);

const buyBtn = document.createElement('button');
buyBtn.id = "buyBtn";
buyBtn.innerHTML = `BUY`;
socials.appendChild(buyBtn); 

footer.appendChild(socials);

const contractContainer = document.createElement('div');
contractContainer.id = "contractContainer";

const contract = document.createElement('span');
contract.innerHTML = "CwXoSZ2yrTbe4RpKmjtqafuJ7XUpzKoW5V1xWzKdpump";
contractContainer.appendChild(contract);

const copyContract = document.createElement('button');
copyContract.id = "copyContractBtn";
copyContract.classList.add("prevent-select");
copyContract.innerHTML = "COPY";
contractContainer.appendChild(copyContract);

footer.appendChild(contractContainer);


function starAnimation() {
  var canvas;
  var context;
  var screenH;
  var screenW;
  var stars = [];
  var fps = 50;
  var numStars = 320;
  
  $(document).ready(function() {
    // Calculate the screen size
    screenH = $(window).height();
    screenW = $(window).width();
    
    // Get the canvas
    canvas = $('#space');
    
    // Fill out the canvas
    canvas.attr('height', screenH);
    canvas.attr('width', screenW);
    context = canvas[0].getContext('2d');
    
    // Create all the stars
    for(var i = 0; i < numStars; i++) {
      var x = Math.round(Math.random() * screenW);
      var y = Math.round(Math.random() * screenH);
      var length = 1 + Math.random() * 2;
      var opacity = Math.random();
      
      // Create a new star and draw
      var star = new Star(x, y, length, opacity);
      
      // Add the the stars array
      stars.push(star);
    }
    
    setInterval(animate, 1000 / fps);
  });
  
  /**
   * Animate the canvas
   */
  function animate() {
    context.clearRect(0, 0, screenW, screenH);
    $.each(stars, function() {
      this.draw(context);
    })
  }
  
  /**
   * Star
   * 
   * @param int x
   * @param int y
   * @param int length
   * @param opacity
   */
  function Star(x, y, length, opacity) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.length = parseInt(length);
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * .03;
  }
  
  /**
   * Draw a star
   * 
   * This function draws a star.
   * You need to give the context as a parameter 
   * 
   * @param context
   */
  Star.prototype.draw = function(context) {
    // Save the context
    context.save();
    
    // Move to the position of the star
    context.translate(this.x, this.y);
    
    // Change the opacity
    if(this.opacity > 1) {
      this.factor = -1;
    } else if(this.opacity <= 0) {
      this.factor = 1;
      
      // Reset to a new random position
      this.x = Math.round(Math.random() * screenW);
      this.y = Math.round(Math.random() * screenH);
    }
    
    this.opacity += this.increment * this.factor;
    
    context.beginPath();
    for (var i = 5; i--;) {
      context.lineTo(0, this.length);
      context.translate(0, this.length);
      context.rotate((Math.PI * 2 / 10));
      context.lineTo(0, - this.length);
      context.translate(0, - this.length);
      context.rotate(-(Math.PI * 6 / 10));
    }
    context.lineTo(0, this.length);
    context.closePath();
    context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
    context.shadowBlur = 5;
    context.shadowColor = '#fdf6f2';
    context.fill();
    
    // Restore the context
    context.restore();
  }
}


document.addEventListener('DOMContentLoaded', function() {
  starAnimation();

  // Hyperlinks
  telegramBtn.addEventListener('click', () => window.open("https://t.me/MochaDogSol", "_self"));
  twitterBtn.addEventListener('click', () => window.open("https://x.com/MochaDogSol", "_self"));
  chartBtn.addEventListener('click', () => window.open("https://dexscreener.com/solana/", "_blank"));
  buyBtn.addEventListener('click', () => window.open("https://pump.fun/CwXoSZ2yrTbe4RpKmjtqafuJ7XUpzKoW5V1xWzKdpump", "_blank"));

  // Copy Contract Logic
  const textToCopy = contract.innerHTML;
  copyContract.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });
});