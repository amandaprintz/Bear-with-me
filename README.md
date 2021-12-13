<img src="https://media.giphy.com/media/IJTCcELAbVgHK/giphy.gif" width=100%>

# Bear with me 

First assignments in JavaScript. The mission was to create a small website which serves no purpose. You can visit the site [here.](https://bear-with-me.netlify.app/)

# Built with

* JavaScript<br>
* CSS<br>
* HTML<br>

# Code Review

Code review written by [Albin Andersson](https://github.com/itisalbin).

1.  The clouds causes som side-scrolling on mobile. Could probably be fixed by making them the width of the screen after a certain screen-width. (Or maybe just prevent scrolling with "overflow-x: hidden".)

1.  The jumpy "Christmas Mode"-cloud has a fading square around it when the page is loading. I guess it's a transition fading the color to transparent. Perhaps this could be avoided by using @keyframes instead of transition.

1.  The navigation buttons (sometimes) react a bit slow with showing the next pictures. Can't see why at first glance, but perhaps loading time. Then making them smaller (when possible) or loading them in the background and not first when the user clicks the buttons could help.

1.  There's a @font-face for a "Quicksand"-font in the style.css. This doesn't seems to be used anywhere.

1.  The navigation buttons react in a very responsive manner even on small screens.

#
* <b> Update: the font Quicksand is used in for the snowflakes and not in any paragraphs or headlines. </b>

# Testers

Tested by the following people:

1. Jennifer Andersson

2. Johanna Jönsson
