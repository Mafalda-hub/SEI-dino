// keycode info https://www.toptal.com/developers/keycode

document.addEventListener('DOMContentLoaded', () => {
  const dino = document.querySelector('.dino');
  const grid = document.querySelector('.grid');
  let isJumping = false;
  const gravity = 0.9;

  function control(e) {
    if (e.keyCode === 32) {
      if (!isJumping) {
        isJumping = true;
        jump();
      }

      console.log('pressed');
    }
  }
  document.addEventListener('keyup', control);

  let position = 0;
  function jump() {
    let count = 0;
    const timerId = setInterval(function () {
      // move down
      if (count === 15) {
        clearInterval(timerId);
        console.log('down');
        const downTimerId = setInterval(function () {
          if (count === 0) {
            clearInterval(downTimerId);
            isJumping = false;
          }
          position -= 5;
          count--;
          position = position * gravity;
          dino.style.bottom = position + 'px';
        }, 20);
      }
      // move up
      console.log('up');
      position += 30;
      count++;
      position = position * gravity;
      dino.style.bottom = position + 'px';
      console.log(dino.style.bottom);
    }, 20);
  }

  function generateObstacles() {
    const obstaclePosition = 1000;
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    grid.appendChild(obstacle);
    obstacle.style.left = obstaclePosition + 'px';

    const timerId = setInterval(function () {
      obstaclePosition -= 10;
      obstacle.style.left = obstacle + 'px';
    }, 20);
  }

  generateObstacles();
});

// // here we're grabbing each element using their Id's by DOM events
// const character = document.getElementById('character');
// const block = document.getElementById('block');

// // create a function to allow you to access jump
// function jump() {
//   // we only want to add the class animate if it hasn't been added yet so we need to use an if statement for this
//   if (character.classList != 'animate') {
//     character.classList.add('animate');
//   }

//   // if we leave it like this it will only run once so we need to set an interval
//   setTimeout(function () {
//     character.classList.remove('animate');
//   }, 500);
// }

// // Now we need an hit detection to detect if it goes against the blocks and -> game over

// const checkDead = setInterval(function () {
//   const characterTop = parseInt(
//     window.getComputedStyle(character).getPropertyValue('top')
//   );
//   const blockLeft = parseInt(
//     window.getComputedStyle(character).getPropertyValue('left')
//   ); // these check if the character and the block collide.
//   // the top position of the character is at 150 and when it's clicked it goes up to 100 and then goes back to 150
//   // we're calculating the top position, now we need to calculate the left position of the block and compare them against each other and see if they hit each other. If yes, game over
//   if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
//     block.style.animation = 'none';
//     block.style.display = 'none';
//     alert('oops, you lose!');
//   }
//   // if all these 3 conditions are met it means that they're hitting each other
// }, 10);
