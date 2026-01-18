const spotlight = document.querySelector(".spotlight");
const lottieContainer = document.querySelector(".lottie-container");
const spotlightMask = document.querySelector(".spotlight-mask");

// The `state` object will tell the animation state
// `isTracking` flag tells if the mouse is currently in the spotlight section or not
// `cursorDetected` flag is a one time flag to detect if user has atleast once interacted 
// with the element so then only animation will start, not prematurely
const state = {
    isTracking: false,
    cursorDetected: false
}


// The `pos` object tells the position of cursor on our screen.
const pos = {
    mouse: {
        target: {x: 0, y: 0}, 
        current: {x: 0, y: 0},
        last: {x: 0, y: 0}
    },
    lottie: {
        current: {x: 0, y: 0},
        center: {x: 0, y: 0}
    }
}