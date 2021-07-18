import React, { useState } from 'react';

import './ColorBox.scss';

const listBackgroundColor = ['blue', 'red', 'green', 'pink', 'yellow', 'deeppink'];

function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}


function getRandomColor(currentBackgroundColor) {
    const maxIndex = listBackgroundColor.length - 1;
    let randomIndex = getRandomNumber(0, maxIndex);
    while (listBackgroundColor[randomIndex] === currentBackgroundColor) {
        randomIndex = getRandomNumber(0, maxIndex);
    }

    return listBackgroundColor[randomIndex];
}


function ColorBox(props) {

    const [backgroundColor, setBackgroundColor] = useState('deeppink');

    function handleOnClickColorBox() {
        const newBackgroundColor = getRandomColor(backgroundColor);
        setBackgroundColor(newBackgroundColor);
    }


    return (
        <div
            className="color-box"
            style={{ backgroundColor: backgroundColor }}
            onClick={handleOnClickColorBox}
        >
        </div >
    );
}

export default ColorBox;