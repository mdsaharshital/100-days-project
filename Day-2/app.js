// step-1 create onload handler
window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById("root");
    const changeBtn = document.getElementById("change-btn");
    const outPut = document.getElementById("output");
    changeBtn.addEventListener("click", function(){
        const bgColor = generateHEXcolor();
        root.style.backgroundColor= bgColor;
        outPut.value = bgColor;
    })
}


// step- 2 random color generator function
function generateHEXcolor(){
    const red = Math.round(Math.random()* 255);
    const green = Math.round(Math.random()* 255);
    const blue = Math.round(Math.random()* 255);
    const HEX = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return HEX;
}

//step -3 collect all necessary items

// step-4 handle clicks