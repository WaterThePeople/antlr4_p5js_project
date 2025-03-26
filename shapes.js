function customRectangle(x, y, w, h, r = 125, g = 125, b = 125) {
  stroke(r, g, b);
  fill(r, g, b);
  rect(x, y, w, h);
}

function customCircle(x, y, d, r = 125, g = 125, b = 125) {
  stroke(r, g, b);
  fill(r, g, b);
  circle(x, y, d);
}

export { customRectangle, customCircle };
