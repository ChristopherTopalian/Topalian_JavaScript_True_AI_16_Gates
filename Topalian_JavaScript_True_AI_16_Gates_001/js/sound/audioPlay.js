// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// audioPlay.js

function audioPlay(whichId, whichVolume)
{
    if (ge(whichId))
    {
        ge(whichId).volume = whichVolume;
        ge(whichId).play();
    }
}

