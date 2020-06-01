import {render, svg} from 'lit-html';

const circle = svg`<circle cx="100" cy="100" r="80" stroke="black" stroke-width="3" fill="red"/>`;

render(circle, document.getElementById('svg')!);

