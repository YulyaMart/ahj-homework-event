export default class Field {
  constructor() {
    this.size = 4;
    const container = document.querySelector('.field');
    for (let i = 0; i < this.size * this.size; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      container.appendChild(cell);
    }
  }
}
