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


const footer = document.querySelector('footer');

const contract = document.createElement('span');
contract.innerHTML = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
footer.appendChild(contract);

const copyContract = document.createElement('button');
copyContract.innerHTML = "COPY";
footer.appendChild(copyContract);



/*

add coffee beans via some sort of animation
  - perhaps reuse/recreate animation from old days with flying dollars

*/