export default class Goblin {
  constructor() {
    this.notCaught = 0;
    this.caught = 0;
  }

  changePosition() {
    const position = [...document.querySelectorAll('.cell')];
    let posGoblin = 0;
    const goblinMissed = document.querySelector('.missed');
    const interval = setInterval(() => {
      const posRandom = Math.floor(Math.random() * position.length);
      if (posGoblin !== posRandom) {
        position[posGoblin].classList.remove('goblin');
        position[posRandom].classList.add('goblin');
        posGoblin = posRandom;
        this.notCaught += 1;
        goblinMissed.innerText = `Missed: ${this.notCaught}`;
      }
      if (this.notCaught === 5) {
        position[posRandom].classList.remove('goblin');
        alert('Game over!');
        clearInterval(interval);
      }
    }, 1000);
  }

  goblinCatch(element) {
    const points = document.querySelector('.score');
    element.addEventListener('click', (event) => {
      const e = event.target;
      if (e.className.includes('goblin') === true) {
        e.classList.remove('goblin');
        this.notCaught -= 1;
        this.caught += 1;
        points.innerText = `Score: ${this.caught}`;
      }
    });
  }
}
