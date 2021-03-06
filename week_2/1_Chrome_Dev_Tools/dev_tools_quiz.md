#### Include an inline screenshot of your codeschool's points from the profile page: http://imgur.com/vn0RRzp

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization 

Realtime editing of HTML and CSS: Elements
Javascript Debugging: Sources
Performance Optimization: Network

* What's the quick key for your OS to spawn the Dev Tools inspector?

Shift + Apple + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

Background is black (and a slightly more blueish black) and grey, crimson if there is a 404 error.

http://i.imgur.com/OnmAbTH.png

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

The text is part of the image. You would need an image editor to change the text.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

Largest image: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

To find the largest image you go into the Network pane and sort by size.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

By reformatting their images they can remove 885.9KiB. By deferring parsing of Javascript they can cut 590.9KiB.
