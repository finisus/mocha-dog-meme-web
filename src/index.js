import './style.css';

import yawnLeftImg from './metadata/meme/yawn_left_framed.png';
import headerImg from './metadata/header.png';
import yawnRightImg from './metadata/meme/yawn_right_framed.png';

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

main.appendChild(memesContainer);


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
contract.innerHTML = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
contractContainer.appendChild(contract);

const copyContract = document.createElement('button');
copyContract.id = "copyContractBtn";
copyContract.classList.add("prevent-select");
copyContract.innerHTML = "COPY";
contractContainer.appendChild(copyContract);

footer.appendChild(contractContainer);


/*

add coffee beans via some sort of animation
  - perhaps reuse/recreate animation from old days with flying dollars

*/