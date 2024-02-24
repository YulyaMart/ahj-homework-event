import Field from './game-field';
import Goblin from './game-goblin';

const container = document.querySelector('.field');
// eslint-disable-next-line
let field = new Field();
const goblin = new Goblin();
goblin.changePosition();
goblin.goblinCatch(container);
