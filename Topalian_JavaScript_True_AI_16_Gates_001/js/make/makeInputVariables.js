// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeInputVariables.js

function makeInputVariables()
{
    let inputA = ce('div');
    inputA.innerHTML = Math.round(Math.random());
    inputA.id = 'inputA';
    inputA.style.position = 'absolute';
    inputA.style.left = 310 + 'px';
    inputA.style.top = 170 + 'px';
    inputA.style.zIndex = 2;
    ba(inputA);

    //-//

    let inputB = ce('div');
    inputB.innerHTML = Math.round(Math.random());
    inputB.id = 'inputB';
    inputB.style.position = 'absolute';
    inputB.style.left = 335 + 'px';
    inputB.style.top = 170 + 'px';
    inputB.style.zIndex = 2;
    ba(inputB);
}

