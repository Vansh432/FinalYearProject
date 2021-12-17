console.log("welcome to battery mange system");
let color=document.getElementsByClassName('color');
let charg=document.getElementById('charg');
let damage_battery=document.getElementById('damage_battery');
let damage_bat=document.getElementById('damage_bat');
let dama_top=document.getElementById('dama_top');
let gree=document.getElementById('gree');

charg.addEventListener('click',()=>{
Array.from(color).forEach(Element=>{
  Element.classList.add('play');
  damage_battery.style.display="flex";
})  
})


damage_battery.addEventListener('click',()=>{
  console.log('dfffff');
 color[2].classList.add('dama');
 damage_bat.classList.add('blink');
 dama_top.classList.add('topblink');
 damage_bat.style.transform='translateX(-420px)';
 gree.style.transform="translateX(420px)";
 
})
