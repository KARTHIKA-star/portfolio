const texts = ["Java Developer", "Android Developer", "Software Engineer"];
let count = 0;
let index = 0;

(function type(){
  if(count === texts.length){
    count = 0;
  }

  let currentText = texts[count];
  let letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 120);
  }
})();
