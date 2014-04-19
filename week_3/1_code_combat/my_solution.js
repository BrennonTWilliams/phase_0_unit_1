// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 //MISSION 1: Rescue Mission
 
 //from "stuck" position
 //move up
 //move right x2
 //move down
 //attack
 
 //SOLUTION
 
 // This is your code controlling Tharin!
this.moveDown();
this.moveDown();
this.moveRight();
 this.moveUp();
 this.moveUp();
 this.moveRight();
 this.moveRight();
 this.moveDown(); 
this.attackNearbyEnemy();
// Edit it anywhere you like, add comments like these

// Follow the same "this.action();" format
// Code is case-sensitive.
 
 //MISSION 2: Grab the mushroom
 
 //move up, right, left, up, attack
 
 //SOLUTION
 
 // Tharin might consider taking a detour after line 3.

this.moveUp();

this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

this.attackNearbyEnemy();

//MISSION 3: Drink Me Complete

//move right, attack, right, down, up, right, attack

//SOLUTION
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
 
 
// Reflection:
// Write your reflection here.
