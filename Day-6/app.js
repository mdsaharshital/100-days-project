//global variable
let div = null;
// step-1 create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");
  const outPut = document.getElementById("output");
  changeBtn.addEventListener("click", function () {
    const bgColor = generateHEXcolor();
    root.style.backgroundColor = bgColor;
    outPut.value = bgColor.substring(1);
  });
  copyBtn.addEventListener("click", function () {
    if (isValidColor(outPut.value)) {
      navigator.clipboard.writeText(`#${outPut.value}`);
      if (div != null) {
        div.remove();
        div = null;
      }
      generateToastMsg(`#${outPut.value} Copied`);
    } else {
      generateToastMsg(`Invalid color code`);
    }
  });
  outPut.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      outPut.value = color.toUpperCase();
      if (isValidColor(color)) {
        root.style.backgroundColor = `#${color}`;
      }
    }
  });
}

// step- 2 random color generator function
function generateHEXcolor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const HEX = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  return HEX;
}
function generateToastMsg(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });
  document.body.appendChild(div);
}

const isValidColor = (color) => {
  if (color.length !== 6) false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
};
//step -3 collect all necessary items

// step-4 handle clicks
// day-5 create own hex code and validate it
// DAY-6 - transform user input right after they press keys
