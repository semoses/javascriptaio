/*
High level stuff about this file
Like author
And purpose
And instuctions on how to use
etc.
*/

const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let x_position = 0;
let y_position = 0;

/* This function handles the keypresses;
right now it supports left, right, up and down */
function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        x_position -= 15;
    }
    if (e.code === 'ArrowRight') {
        x_position += 15;
    }
    if (e.code === 'ArrowDown') {
        y_position += 15;
    }
    if (e.code === 'ArrowUp') {
        y_position -= 15;
    }
    if (x_position < 0) {
        x_position = 0;
    }
    if (y_position < 0) {
        y_position = 0;
    }
    refresh(); // reposition ball based on user's key choice
}

// Refresh updates the ball's position 
function refresh() {
    ball.style.left = x_position + "px";
    ball.style.top = y_position + "px";
}