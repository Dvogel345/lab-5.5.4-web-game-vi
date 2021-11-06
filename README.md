# Web Game VI

This is an activity for FSWD Lesson 5.4.4- Practicing Promises

Please refer to the Activity Guide in Canvas for directions.

1) Add the Ability to Wait for walkEast
Open newNonPlayableCharacter.js. Refactor walkEast, so it:

Accepts time as a parameter. This should be the number of milliseconds we want the character to walk east.
Returns a promise.
Resolves its promise after stopping the character the set amount of time (in milliseconds) later.

2) Test It
Return to index.js. On line 8, pass npc.walkEast() 2000 as an argument. Check the result in your browser. It should look something like this:

3) Add the Ability to Wait for the Other Directions
Use the same pattern to make walkNorth, walkSouth, and walkWest asynchronous. Be sure to test each method as you complete it, as this is the easiest way to catch and resolve bugs.

4) Implement a Complex Track
Now that all four walking methods have been refactored to accept time as an argument and return promises, we can build a more complex track. Program a path for the npc that uses the following directions and durations:

North for 1400 ms
East for 1200 ms
South for 300 ms
East for 1500 ms
South for 1500 ms
West for 2700 ms
North for 400 ms
When you finish, the npc should walk all the way around the screen, zigzagging slightly to move around the well, and end up where it started.

Note: Be sure to chain your '.then's, so you do not need to nest them.

5) Reflect
When we added NPCs using callback functions, our code became super-nested:

By using promises, we have greatly improved the readability of our code:

Under the hood, we are still using callback functions, but because we can chain .then, we can more easily express our asynchronous logic. If we go a little deeper, we can make our code even more readable. In 2017, JavaScript added two new keywords: async and await. They allow us to express asynchronous logic with even less code while still using promises under the hood. We will learn about async and await in a future lesson.

Bonus
If you have time, below are other ideas to improve the web game:

Loop the track, so once the character finishes, it starts to circle around the screen again.

Use element.style.zIndex to make the character walk behind or in front of objects depending on how far north they are.

Implement collision detection using the practices described at MDN for 2D collision detection. When the player character collides with the non-player character, display a pop-up message using the same techniques from the Lesson 3 activity to ask the user if they want to play again.