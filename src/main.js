import Game from './components/game';

const NOOP = () => {};

document.addEventListener("DOMContentLoaded", () => {
  const g = new Game();
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/public/service-worker.js').catch(NOOP);
}
