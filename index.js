document.querySelector('.box').addEventListener('mousemove', (e) => {
  //first display top, left values on screen

  console.log(e.clientX, e.clientY);
  //now add left, top property to the cursor
  document.querySelector('.cursor').style.left = e.clientX + 'px';
  //add top property
  document.querySelector('.cursor').style.top = e.clientY + 'px';
});
