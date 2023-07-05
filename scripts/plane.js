class Plane extends PIXI.Sprite {
    constructor() {
        super(
            PIXI.Texture.from(
                "https://img.icons8.com/?size=128&id=11869&format=png"
            )
        );

        this.anchor.x = 0.5;
        this.anchor.y = 0.5;

        this.x = app.screen.width / 2;
        this.y = app.screen.height - 200;
        this.startPosOffset = {};
        this.startPosOffset.x = 0;
        this.startPosOffset.y = 0;
        this.targetOffset = {};
        this.targetOffset.x = 0;
        this.targetOffset.y = 0;
    }

    update(delta) {
        let moveDelta = {
            x: this.targetOffset.x * delta * 0.2,
            y: this.targetOffset.y * delta * 0.1,
        };
        this.targetOffset.x -= moveDelta.x;
        this.targetOffset.y -= moveDelta.y;

        this.x += moveDelta.x;
        this.y += moveDelta.y;

        this.x = clamp(this.x, 64, app.screen.width - 64);
        this.y = clamp(this.y, 128, app.screen.height - 128);
        this.rotation = clamp(moveDelta.x * delta * 0.015, -1, 1);
        this.scale.x = 1 - Math.abs(this.rotation / 2);
    }
}
