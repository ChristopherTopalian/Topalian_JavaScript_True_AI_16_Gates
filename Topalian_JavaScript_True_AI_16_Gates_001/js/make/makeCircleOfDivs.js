// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeCircleOfDivs.js

function makeCircleOfDivs(whichArray)
{
    // circleContainer
    let circleContainer = ce('div');
    circleContainer.id = 'circleContainer';
    ba(circleContainer);

    //-//

    // infoDiv
    let infoDiv = ce('div');
    infoDiv.id = 'infoDiv';
    infoDiv.className = 'infoDiv';
    infoDiv.style.position = 'absolute';
    infoDiv.style.left = ge('buttonContainer').getBoundingClientRect().x + 420;
    infoDiv.style.top = ge('buttonContainer').getBoundingClientRect().y + -40;
    infoDiv.style.margin = '30px';
    circleContainer.append(infoDiv);

    let radius = 150;

    let centerX = ge('buttonContainer').getBoundingClientRect().x + 200;

    let centerY = ge('buttonContainer').getBoundingClientRect().y + 100;

    //-//

    for (let i = 0; i < whichArray.length; i++)
    {
        let angle = (Math.PI * 2) / whichArray.length * i - Math.PI / 2;

        let x = centerX + radius * Math.cos(angle);

        let y = centerY + radius * Math.sin(angle);

        //-//

        // square
        let square = ce('div');
        square.title = whichArray[i].name;
        square.id = 'square' + i;
        square.className = 'square';
        square.style.position = 'absolute';
        square.style.left = x + 'px';
        square.style.top = y + 'px';
        square.style.width = '45px';
        square.style.height = '45px';
        square.style.backgroundColor = 'rgb(0, 0, 0)';

        //-//

        // nameOfGate
        let nameOfGate = ce('div');
        nameOfGate.innerHTML = whichArray[i].abbreviation;
        nameOfGate.style.position = 'relative';
        nameOfGate.style.zIndex = '2';
        nameOfGate.style.fontWeight = 'bold';
        square.append(nameOfGate);

        // onclick
        square.onclick = function()
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('infoDiv').innerHTML = whichArray[i].abbreviation.bold() + '<br>' +
            whichArray[i].name +
            '<br>' +
            whichArray[i].formula.bold() +
            '<br>' + 
            whichArray[i].truthTable +
            '<br>' +'<pre>'+whichArray[i].truthTableFormatted +
            '</pre>' + 'Opposite is: ' +
            whichArray[i].opposite +
            '<br>';

            ge('square' + i).style.color = 'rgb(255, 0, 255)';
        };

        // onmouseover
        square.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);

            square.style.borderColor = 'rgb(0, 255, 255)';
            square.style.color = 'rgb(0, 255, 255)';
        };

        // onmouseout
        square.onmouseout = function()
        {
            square.style.borderColor = 'rgb(255, 255, 255)';
            square.style.color = 'rgb(255, 255, 255)';
        };
        circleContainer.append(square);

        //-//

        let topalianDiagram = ce('img');
        topalianDiagram.style.maxWidth = '100%';
        topalianDiagram.style.height = 'auto';
        if (online == false)
        {
            topalianDiagram.src = whichArray[i].imgSrcOffline;
        }
        else
        {
            topalianDiagram.src = whichArray[i].imgSrcOnline;
        }
        square.append(topalianDiagram);
    }
}

