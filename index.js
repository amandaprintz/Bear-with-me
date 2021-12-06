document.querySelector('.box').addEventListener('mousemove', (e) => {
  //first display top & left values on screen

  console.log(e.clientX, e.clientY);
  //now add left &  top property to the cursor
  document.querySelector('.cursor').style.left = e.clientX + 'px';

  //add top property
  document.querySelector('.cursor').style.top = e.clientY + 'px';
});

const bears = [
  { img: './images/drop.gif' },
  { img: './images/cheers.gif' },
  { img: './images/bite.gif' },
  { img: './images/band.gif' },
  { img: './images/hug.gif' },
  { img: './images/pat.gif' },
  { img: './images/petty.gif' },
  { img: './images/nap.gif' },
  { img: './images/smooch.gif' },
  { img: './images/study.gif' },
  { img: './images/food.gif' },
];
