// step-1 create onload handler
window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById("root");
    const changeBtn = document.getElementById("change-btn");
    changeBtn.addEventListener("click", function(){
        const bgColor = generateRGBcolor();
        root.style.backgroundColor= bgColor;
    })
}


// step- 2 random color generator function
function generateRGBcolor(){
    const red = Math.round(Math.random()* 255);
    const green = Math.round(Math.random()* 255);
    const blue = Math.round(Math.random()* 255);
    const RGB = `rgb(${red},${green},${blue})`;
    return RGB;
}

//step -3 collect all necessary items

// step-4 handle clicks