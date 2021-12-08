/* make the pointer to an emoji */

document.querySelector('.box').addEventListener('mousemove', (e) => {
  /*   console.log(e.clientX, e.clientY); */
  document.querySelector('.cursor').style.left = e.clientX + 'px';

  document.querySelector('.cursor').style.top = e.clientY + 'px';
});

/* slideshow */
var slider_img = document.querySelector('.slider-img');
var images = [
  'drop.gif',
  'cheers.gif',
  'bite.gif',
  'band.gif',
  'hug.gif',
  'pat.gif',
  'petty.gif',
  'nap.gif',
  'smooch.gif',
  'study.gif',
  'food.gif',
];

var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute('src', './images/' + images[i]);
}

const before = document.querySelector('.btn-prev');
before.addEventListener('click', function (e) {
  prev();
});

const after = document.querySelector('.btn-next');
after.addEventListener('click', function (e) {
  next();
});

after.addEventListener('click', function (e) {
  next();
});

/* snow script */
const snow = document.querySelector('.container-snow');
const body = document.querySelector('body');
const snowButton = document.querySelector('.lets-snow');

//add bounce effect on the lets snow button
setTimeout(function () {
  snowButton.style.opacity = 1;
  snowButton.classList.add('bounce');
}, 10);

//toggle between "let it snow" and "stop snow" buttons
snowButton.addEventListener('click', () => {
  if (snow.style.display === 'flex') {
    snow.style.display = 'none';
    snowButton.textContent = 'Christmas mode';
  } else {
    snow.style.display = 'flex';
    snowButton.textContent = 'Cancel Christmas';
  }
});

//function that creates snow
function createSnow() {
  let snowflakes = 100;

  for (let i = 0; i < snowflakes; i++) {
    let flake = document.createElement('div');
    flake.classList.add('snow-flake');
    flake.style.fontSize = Math.random() * 3 + 2 + 'rem';
    flake.style.opacity = Math.random() * 0.9;
    flake.style.animationDuration = Math.random() * 10 + 9 + 's';
    flake.style.animationDelay = Math.random() * 10 + 's';
    flake.textContent = '*';
    snow.appendChild(flake);
  }
}
createSnow();

/* night mode */

function changeBackground() {
  if (window.scrollY > window.innerHeight / 2) {
    document.body.classList.add('night-time');
  } else {
    document.body.classList.remove('night-time');
  }
}
window.addEventListener('scroll', changeBackground);
