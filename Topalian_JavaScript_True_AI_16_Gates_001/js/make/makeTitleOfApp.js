// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// makeTitleOfApp.js

function makeTitleOfApp()
{
    let titleContainer = document.createElement('div');
    titleContainer.style.position = 'absolute';
    titleContainer.style.right = '10px';
    titleContainer.style.top = '5px';
    titleContainer.style.zIndex = 1;
    titleContainer.style.fontWeight = 'bold';
    ba(titleContainer);

    //-//

    let titleTextDiv = document.createElement('div');
    titleTextDiv.innerHTML =
    `<a href = 'https://github.com/christophertopalian/Topalian_JavaScript_True_AI_16_Gates' target = '_blank'>Topalian JavaScript True AI 16 Gates</a>`;
    titleTextDiv.style.fontSize = '15px';
    titleTextDiv.style.color = 'rgb(120, 120, 120)';
    titleContainer.append(titleTextDiv);
}

