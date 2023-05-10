const backward = document.querySelectorAll('.movebck');
const forward = document.querySelectorAll('.movefwd');
const spinner = document.querySelector('.image-cube');
const nullext = document.querySelector('.null-ext');

let clicked = false;
let rotatedeg = 0;



nullext.addEventListener('click', ()=>{
  alert("This project does not have a live site");
})


const rb = () =>{
  if(!clicked){
    rotatedeg -= 90;
    spinner.style.transform = `rotateY(${rotatedeg}deg)`;
  }

}

forward.forEach((button) => {
  button.addEventListener('click', () => {
    rotatedeg += 90;
    spinner.style.transform = `rotateY(${rotatedeg}deg)`;
    clicked = true;
  });
});

backward.forEach((button) => {
    button.addEventListener('click', () => {
      rotatedeg -= 90;
      spinner.style.transform = `rotateY(${rotatedeg}deg)`;
      clicked = true;
    });
  });

  setInterval(rb,5000);


