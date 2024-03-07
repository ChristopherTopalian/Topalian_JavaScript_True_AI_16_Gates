// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeAppButton.js

function makeAppButton()
{
    // buttonContainer
    let buttonContainer = ce('div');
    buttonContainer.id = 'buttonContainer';
    buttonContainer.className = 'buttonContainer';
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.left = '100px';
    buttonContainer.style.top = '100px';
    ba(buttonContainer);

    //-//

    // buttonDivCircle
    let buttonDivCircle = ce('button');
    buttonDivCircle.innerHTML = 'O';
    buttonDivCircle.id = 'buttonDivCircle';
    buttonDivCircle.className = 'buttonDivCircle';
    buttonDivCircle.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        if (ge('circleContainer'))
        {
            ge('circleContainer').remove();
            ge('marker').remove();
            ge('inputA').remove();
            ge('inputB').remove();
        }
        else
        {
            makeInputVariables();

            makeCircleOfDivs(sortedArray);

            setTimeout(function()
            {
                makeCenterPoint();
            }, 1000);
        }
    };
    buttonContainer.append(buttonDivCircle);
}

