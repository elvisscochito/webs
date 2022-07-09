import React from 'react';

import '../styles/StarMatch.css';

function StarMatch() {
    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue'
    };

    /** @note math science */
    const utils = {

        /** @note array sum */
        sum: array => array.reduce((acc, current) => acc + current, 0),

        /** @note create and array of numbers between min and max */
        range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

        /** @note pick a random number between min and max */
        random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

        /** @note pick a random sum (< max) from the set of all available sums in array */
        randomSumIn: (array, max) => {
            const sets = [[]];
            const sums = [];

            for (let i = 0; i < array.length; i++) {
                for (let j = 0, len = sets.length; j < len; j++) {
                    const candidateSet = sets[j].concat(array[i]);
                    const candidateSum = utils.sum(candidateSet);

                    if (candidateSum <= max) {
                        sets.push(candidateSet);
                        sums.push(candidateSum);
                    }
                }
            }
            return sums[utils.random(0, sums.length - 1)];
        }
    };
    
    return (
        <div className="game">
            <span className="instructions">Pick 1 or even more numbers that match the stars</span>
            <div className="body">
                <div className="left">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <div className="right">
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                    <div className="number">4</div>
                    <div className="number">5</div>
                    <div className="number">6</div>
                    <div className="number">7</div>
                    <div className="number">8</div>
                    <div className="number">9</div>
                </div>
            </div>
            <span className="timer">Time left: 10</span>
        </div>
    );
};

export default StarMatch;
