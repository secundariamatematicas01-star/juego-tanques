export class Enemy {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.width = 40;
        this.height = 30;

        this.health = 100;

        this.speed = 1.5;

        this.direction = 1;

        this.alive = true;
    }

    update(game) {

        const player = game.player;

        if (this.x < player.x) {

            this.x += this.speed;

            this.direction = 1;
        }

        if (this.x > player.x) {

            this.x -= this.speed;

            this.direction = -1;
        }
if(
    game.keys["c"] ||
    game.keys["C"]
){

    if(this.mines.length < 5){

        this.placeMine();
    }
}
        player.bullets.forEach(bullet => {

            if (
                bullet.x < this.x + this.width &&
                bullet.x + bullet.width > this.x &&
                bullet.y < this.y + this.height &&
                bullet.y + bullet.height > this.y
            ) {

                bullet.active = false;

                this.health -=
game.player.damage;

                if (this.health <= 0) {

                    this.alive = false;

                    game.addScore(25);
                }
            }
        });

        if (
            this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
            this.y + this.height > player.y
        ) {

            player.health -= 0.2;

            if (player.health <= 0) {

                game.lives--;

                player.health =
                    player.maxHealth;

                if (game.lives <= 0) {
                    game.gameOver();
                }
            }
        }
    }

    draw(ctx) {

        ctx.fillStyle = "#EF4444";

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

        ctx.fillStyle = "red";

        ctx.fillRect(
            this.x,
            this.y - 8,
            this.width,
            4
        );

        ctx.fillStyle = "lime";

        ctx.fillRect(
            this.x,
            this.y - 8,
            (this.width * this.health)
            / 100,
            4
ctx.fillStyle="cyan";

this.mines.forEach(m=>{

    ctx.beginPath();

    ctx.arc(
        m.x,
        m.y,
        10,
        0,
        Math.PI*2
    );

    ctx.fill();
});
            
          game.player.mines.forEach(m=>{

    const dx =
    this.x - m.x;

    const dy =
    this.y - m.y;

    const dist =
    Math.sqrt(
        dx*dx +
        dy*dy
    );

    if(
        dist <
        m.radius &&
        m.active
    ){

        this.health -= 100;

        m.active = false;

        if(
            this.health <= 0
        ){

            this.alive = false;

            game.addScore(25);
        }
    }
});
