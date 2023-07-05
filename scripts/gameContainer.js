class GameContainer extends PIXI.Container {
    constructor() {
        super()
        this.bg = new PIXI.Sprite(PIXI.Texture.WHITE);
        this.bg.width = 10000;
        this.bg.height = 10000;
        this.bg.alpha = 0.0;
        this.bg.eventMode = "dynamic";
        this.bg.dragging = false;
        this.addChild(this.bg);

        this.plane = new Plane();
        this.addChild(this.plane);

        this.update = function (delta) {
            this.plane.update(delta);
        };

        let startMovePlane = function (e) {
            console.log("Picked up");

            this.plane.startPosOffset.x = e.data.global.x;
            this.plane.startPosOffset.y = e.data.global.y;

            this.bg.dragging = true;
        };

        let movePlane = function (e) {
            if (this.bg.dragging) {
                console.log("Dragging");
                this.plane.targetOffset.x +=
                    e.data.global.x - this.plane.startPosOffset.x;
                this.plane.targetOffset.y +=
                    (e.data.global.y - this.plane.startPosOffset.y) * 0.7;

                this.plane.startPosOffset.x = e.data.global.x;
                this.plane.startPosOffset.y = e.data.global.y;
            }
        };

        let endMovePlane = function (e) {
            console.log("Moving");

            this.plane.targetOffset.x +=
                (e.data.global.x - this.plane.startPosOffset.x) * 1.5;
            this.plane.targetOffset.y +=
                (e.data.global.y - this.plane.startPosOffset.y) * 0.7;

            this.plane.startPosOffset.x = e.data.global.x;
            this.plane.startPosOffset.y = e.data.global.y;

            this.bg.dragging = false;
        };

        this.bg.on("pointerdown", startMovePlane, this);
        this.bg.on("pointermove", movePlane, this);
        this.bg.on("pointerup", endMovePlane, this);
        this.bg.on("pointerupoutside", endMovePlane, this);
    }
}