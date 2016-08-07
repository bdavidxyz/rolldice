'use strict';

/**
 * Return number between 1 and 6
 * @return {number}
 */
module.exports = function() {
    return getRandomInt(1, 6);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}