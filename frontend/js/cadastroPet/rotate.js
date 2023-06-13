let rotationAngle = 0;

function rotateImage(image) {
  rotationAngle += 90;
  image.style.transform = `rotate(${rotationAngle}deg)`;
}