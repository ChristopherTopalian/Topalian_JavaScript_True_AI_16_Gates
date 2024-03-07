// Dedicated to God the Father

// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024

// https://github.com/ChristopherTopalian

// https://github.com/ChristopherAndrewTopalian

// logicGatesCheckInputs.js

let timerAi;

function logicGatesCheckInputs()
{
    timerAi = setInterval(function()
    {
        let a = ge('inputA').innerHTML;

        let b = ge('inputB').innerHTML;

        gateAnd(a, b);
        gateNand(a, b);

        gateOr(a, b);
        gateNor(a, b);

        gateXor(a, b);
        gateXnor(a, b);

        gateCi(a, b);
        gateCNi(a, b);

        gateMi(a, b);
        gateMNi(a, b);

        gateRP(a, b);
        gateRC(a, b);

        gateLP(a, b);
        gateLC(a, b);

        gateTautology(a, b);
        gateContradiction(a, b);
    }, 100);
}

