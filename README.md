# Drum-Kit
When we play the drums, we use the sticks and our hand movements so, why not build it online and it will produce sounds corresponding not just to the clicks but the keypreses too and that's exactly what i have build in this project.

# Tech Stack Used
+ HTML : basic structure for the website
+ CSS : styling the diffenet components in website
+ JavaScript + D0M : to access and manipulate the document's structure, style and content.

# WorkFlow of the Project
+ Added <code>addEventListener</code> for two cases: one corresponding to the clicks and the other for keypresses
+ When <code>"click"</code> is passed as input to <code>addEventListener</code> (for buttons 1-6) then it will trigger action based on the button clicked.
+ Similarily, when <code>"keydown"</code> is passed as input to <code>addEventListener</code> then it will trigger action based on the key pressed.
+ Both have a CallBack function ---> makeSound and this function contains all the sounds data which will be produced based on the data it receive.
+ for clicks, makeSound has input <code>this.innerHTML</code> ---> whatever button i'm clicking on and will produce a sound linked to that presses button
+ for keydown, makeSound has input <code>event.key</code> ----> represents the key value of key, it returns the string.
+ the switch statements are being defined inside the CallBack function where each case is associated with the character and it's corresponding output --> playing a sound.
+ to play a sound, audio.play() function is used.
