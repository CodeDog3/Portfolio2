const backward = document.querySelectorAll('.movebck');
const forward = document.querySelectorAll('.movefwd');
const spinner = document.querySelector('.image-cube');

let rotatedeg = 0;

forward.forEach((button) => {
  button.addEventListener('click', () => {
    rotatedeg += 90;
    spinner.style.transform = `rotateY(${rotatedeg}deg)`;
  });
});

backward.forEach((button) => {
    button.addEventListener('click', () => {
      rotatedeg -= 90;
      spinner.style.transform = `rotateY(${rotatedeg}deg)`;
    });
  });