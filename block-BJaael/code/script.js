// let container = document.getElementById('container');

// for (let i = 0; i < 500; i++) {
//   let box = document.createElement('div');
//   let span=document.createElement('span');
  
  
//   box.classList.add('box');
//   box.append(span)
//   container.appendChild(box);
// }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  for (let i = 0; i < 500; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.textContent = getRandomInt(501);
    
    box.addEventListener("mouseover", function() {
      box.style.backgroundColor = getRandomColor();
      box.textContent = getRandomInt(501);
    });
    
    document.getElementById("container").appendChild(box);
}
  










