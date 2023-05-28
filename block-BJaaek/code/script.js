let ban=document.querySelector(".banner");
let ban2=document.querySelector(".banner");

 let box2=document.querySelector(".second");
 let box1=document.querySelector(".first");

//  ban.addEventListener("click",function(){
//     let colors=["red","green","yellow","blue","pink"]
    
//     for(let i =0;i<=colors.length;i++){
        
//         box1.style.backgroundColor=colors[i]
//     }
    
//  })
ban.addEventListener('click', () => {
    box1.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  });


  ban.addEventListener('onmousemove', () => {
    box2.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  });

