import './css/main.scss';
import { Application, Ticker } from 'pixi.js';
import { Game } from './ts/Game';

window.onload = () => {
  const app = new Application({
    width: 1280,
    height: 800,
    backgroundColor: 0xeeeeee,
    // resizeTo: window,
    sharedTicker: true,
    sharedLoader: true,
    // resolution: window.devicePixelRatio
  });

  document.body.appendChild(app.view);
  (<any>window).app = app;
  const game = new Game(app);
  const ticker = Ticker.shared;
  ticker.add(game.update.bind(game));

  /*
  const reels: number[][] = [];
  for (let i = 0; i < 5; i++) {
    const reel = [];
    for (let v = 0; v < 90; v++) {
      reel.push(Math.floor(Math.random() * 13));
    }
    reels.push(reel);
  }
  console.log(JSON.stringify(reels));
  */
};
