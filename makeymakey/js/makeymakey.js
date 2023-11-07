// get the ids from the html
const video = document.getElementById('myVideo');
const audio = document.getElementById('myAudio');

// Function to play or pause the video
function toggleVideoPlayback() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Event listener for the MakeyMakey key you've chosen (e.g., spacebar)
document.addEventListener('keydown', (event) => {
    
    /** Send the keypress event to the console, which key is pressed? */
    console.log("Event: " + event) // the event
    console.log("Event.key: " + event.key)  // the key

    if (event.key === ' ') {
        
        console.log("trying to toggle")
        toggleVideoPlayback();
        
    }

    // Now you can use all the keys: wasdfg found on the back of MakeyMakey
    // e.g. start and stop audio by a detected w press
    if (event.key === 'w') {
        
        console.log("audio toggle")
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        
    }

    if (event.key === 'ArrowUp') {
        
        console.log("Yes this is ArrowUp")
    
        
    }
    
});