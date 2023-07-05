const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const app = new PIXI.Application({
    background: "#ddd",
    resizeTo: window,
});
document.body.appendChild(app.view);

let gameContainer = new GameContainer();
app.stage.addChild(gameContainer);

app.ticker.add((delta) => {
    gameContainer.update(delta);
});
