let width = 100,
  height = 100;
(top = 0), (left = 0);
let div = document.createElement("div");
div.className = "dome";
div.style.width = width + "px";
div.style.height = height + "px";
div.style.top = top;
div.style.left = left;
document.body.appendChild(div);

let isClick = false;
let lastX, lastY;
let rightLen, bottomLen;
let winWidth = window.innerWidth;
let winHeight = document.documentElement.clientHeight;
div.onmousedown = function(e) {
  lastX = e.clientX;
  lastY = e.clientY;
  let top = parseInt(div.style.top) || 0;
  let left = parseInt(div.style.left) || 0;
  rightLen = width - (lastX - left);
  bottomLen = height - (lastY - top);
  isClick = true;
};
document.onmousemove = function(e) {
  if (isClick === true) {
    let deltaX = e.clientX - lastX;
    let deltaY = e.clientY - lastY;
    let top = parseInt(div.style.top) || 0;
    let left = parseInt(div.style.left) || 0;
    let resultY = top + deltaY;
    let resultX = left + deltaX;
    if (resultX < 0) resultX = 0;
    if (resultY < 0) resultY = 0;
    if (e.clientX > winWidth - rightLen) resultX = winWidth - width;
    if (e.clientY > winHeight - bottomLen) resultY = winHeight - height;
    div.style.top = resultY + "px";
    div.style.left = resultX + "px";
    lastX = Math.abs(e.clientX);
    lastY = Math.abs(e.clientY);
  }
};
document.onmouseup = function() {
  isClick = false;
};

window.onresize = function() {
  winWidth = window.innerWidth;
  winHeight = document.documentElement.clientHeight;
  let top = parseInt(div.style.top) || 0;
  let left = parseInt(div.style.left) || 0;
  if (left + width > winWidth) {
    div.style.left = winWidth - width + "px";
  }
  if (top + height > winHeight) {
    div.style.top = winHeight - height + "px";
  }
};
