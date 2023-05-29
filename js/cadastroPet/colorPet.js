const colorPicker = document.getElementById('colorPicker');
const svgElement = document.getElementById('mySvg');
const pathElement = svgElement.querySelector('path');

colorPicker.addEventListener('input', ()=> {
  const newColor = colorPicker.value;
  pathElement.setAttribute('fill', newColor);
  pathElement.setAttribute('stroke', newColor);
});