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

//MISSION 3: Drink Me

//move right, attack, right, down, up, right, attack

//SOLUTION
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 

//MISSION 4: Taunt the Guards

//uncomment code, right, righ, up, right, taunt, down, right, up, right, right

//SOLUTION
this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

this.moveRight();
this.moveRight();
this.moveUp()
this.moveRight();
this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
this.moveRight();


//MISSION 5: It's a trap

//down, down, taunt, up, up

//SOLUTION
// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

//MISSION 6: Break the Prison

//test if foe, return false if it is (very buggy level)

//SOLUTION
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg" || "Gort" || "Gull Thack" || "Brack")
    return false;  // <-- Start here; Krogg is not a friend!

return true;

//MISSION 7: Taunt

//taunt, up, taunt x3, down

//SOLUTION
this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.moveUp();
this.say("Heya");
this.say("Hello");
this.say("Howdy");
this.moveDown();

//MISSION 8: Cowardly Taunt

//move in range of ogers, follow preset path behind towers

//SOLUTION
this.moveXY(50, 10);
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

//MISSION 9: Commanding Followers

//move to troops, recruit, move down towards enemies, order attack, attack

//SOLUTION
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("follow me");
this.moveXY(60, 30);
this.say("attack!");
this.attackNearbyEnemy();

// Saying anything with "follow" in it will get nearby soldiers
// to follow you

// Saying anything with "attack" will send nearby troops into
// a battle mode.

// Make sure Tharin is safe!

//MISSION 10: Mobile Artillery

//move predetermined route/attack, move up, attack right enemies, move up, attack left enemies

//SOLUTION
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(62,28);
this.attackXY(71, 53);
this.attackXY(71, 45);
this.moveXY(58,37);
this.attackXY(50,64);
this.attackXY(50,52);
 
// Reflection:
// Write your reflection here.

//While I understand the appeal, I'm not crazy about this method of learning. It is too slow for me and involves
// a lot of tedium. I am glad I tried it out though.


//What is this referring to? Think programming-wise rather than in the terms of the game.
//This refers to the object we have loaded
//What does the () do in JavaScript?
//Encloses the parameters
//What is the point of the semicolons?
//show the end of a line
