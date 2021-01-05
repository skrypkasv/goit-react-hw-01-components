export default function getRandomColor(max) {
  const red = Math.floor(Math.random() * Math.floor(max));
  const green = Math.floor(Math.random() * Math.floor(max));
  const blue = Math.floor(Math.random() * Math.floor(max));
  return `rgb(${red}, ${green}, ${blue})`;
}
