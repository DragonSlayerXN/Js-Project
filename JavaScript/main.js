function pMath()
{
        // Pythagoras 
    const sLength = 9;
    alert(Math.sqrt(2) * sLength);
}

function aTriad()
{

    // Herons' formula
    const tside1 = 5;
    const tside2 = 6;
    const tside3 = 7;

    const tPerimeter = (tside1 + tside2 + tside3) / 2;

    const areaT = Math.sqrt(tPerimeter * (tPerimeter - tside1) * (tPerimeter - tside2) * (tPerimeter - tside3));
    alert(areaT);
}

function aCircle()
{
    const radius = 4;
    alert((Math.PI * radius * radius));
}