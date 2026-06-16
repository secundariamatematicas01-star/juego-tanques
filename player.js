export class Player {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.width = 40;
        this.height = 30;

        this.speed = 5;

        this.health = 100;
        this.maxHealth = 100;

        this.direction = 1;

        this.bullets = [];

        this.shootCooldown = 0;
        this.damage = 50;

this.fireRate = 20;

this.mines = [];

this.droneCooldown = 0;
    }

    update(game) {

        if (game.keys["ArrowLeft"]) {
            this.x -= this.speed;
            this.direction = -1;
        }

        if (game.keys["ArrowRight"]) {
            this.x += this.speed;
            this.direction = 1;
        }

        if (this.x < 0) this.x = 0;

        if (this.x + this.width > game.canvas.width) {
            this.x = game.canvas.width - this.width;
        }

        if (game.keys["f"] || game.keys["F"]) {

            if (this.shootCooldown <= 0) {

                this.shoot();

                this.shootCooldown = 20;
            }
        }

        if (this.shootCooldown > 0) {
            this.shootCooldown--;
        }

        this.bullets.forEach(bullet => bullet.update());

        this.bullets = this.bullets.filter(
            bullet => bullet.active
        );
    }

    shoot() {

        this.bullets.push({

            x: this.direction === 1
                ? this.x + this.width
                : this.x,

            y: this.y + 12,

            width: 10,
            height: 5,

            speed: 8 * this.direction,

            active: true,

            update() {

                this.x += this.speed;

                if (
                    this.x < -20 ||
                    this.x > 1200
                ) {
                    this.active = false;
                }
            }
        });
    }

    draw(ctx) {

        ctx.fillStyle = "#22C55E";

        ctx.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        );

        ctx.fillRect(
            this.direction === 1
                ? this.x + this.width
                : this.x - 10,
            this.y + 10,
            12,
            8
        );

        ctx.fillStyle = "orange";

        this.bullets.forEach(bullet => {

            ctx.fillRect(
                bullet.x,
                bullet.y,
                bullet.width,
                bullet.height
            );
        });

        ctx.fillStyle = "red";

        ctx.fillRect(
            this.x,
            this.y - 10,
            this.width,
            5
        );

        ctx.fillStyle = "lime";

        ctx.fillRect(
            this.x,
            this.y - 10,
            (this.width * this.health)
            / this.maxHealth,
            5
        );
    }
}
