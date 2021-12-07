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
