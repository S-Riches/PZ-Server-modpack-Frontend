/*
Sets a timeout for x amount of seconds
*/
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}
module.exports = wait;
