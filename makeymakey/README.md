# MaKeyMaKey 

This is the code you need in order to use the MaKeyMaKey as an alternative keyboard with JavaScript. The script is inspired by ChatGPT, however the code from the socalled AI was buggy. I corrected the bugs.

## ChatGPT - error

The ChatGPT error explained:

~~~~
    // not like this
     if (event.key === 'Space') {
        
        console.log("trying to toggle")
        toggleVideoPlayback();
        
    }

    // this is the code you need
    if (event.key === ' ') {
        
        console.log("trying to toggle")
        toggleVideoPlayback();
        
    }

    // ERROR by ChatGPT: the evnt.key is actually a space as below
~~~~