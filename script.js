let button = document.getElementById("get-dice");
let image = document.getElementById("dice-image");
button.onclick = function() {
  let dicenumber = Math.floor(Math.random() * 6) +1;
  if(dicenumber === 1)
    image.style.backgroundImage = "url('1.jpg')"
  if(dicenumber === 2)
    image.style.backgroundImage = "url('2.jpg')"
  if(dicenumber === 3)
    image.style.backgroundImage = "url('3.jpg')"
  if(dicenumber === 4)
    image.style.backgroundImage = "url('4.png')"
  if(dicenumber === 5)
    image.style.backgroundImage = "url('5.jpg')"
  if(dicenumber === 6)
    image.style.backgroundImage = "url('6.png')"
}