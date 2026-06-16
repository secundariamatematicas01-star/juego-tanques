export class Bullet {

    constructor(
        x,
        y,
        speed
    ) {

        this.x = x;
        this.y = y;

        this.width = 10;
        this.height = 5;

        this.speed = speed;

        this.active = true;
    }

    update() {

        this.x += this.speed;

        if (
            this.x < -50 ||
            this.x > 1200
        ) {
            this.active = false;
        }
    }

    draw(ctx) {

        ctx.fillStyle = "orange";

        ctx.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
