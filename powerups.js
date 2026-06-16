export class PowerUp {

    constructor(x,y,type){

        this.x = x;
        this.y = y;

        this.width = 25;
        this.height = 25;

        this.type = type;

        this.active = true;
    }

    update(game){

        const player =
        game.player;

        if(

            player.x <
            this.x + this.width &&

            player.x + player.width >
            this.x &&

            player.y <
            this.y + this.height &&

            player.y + player.height >
            this.y

        ){

            this.collect(game);

            this.active = false;
        }
    }

    collect(game){

        switch(this.type){

            case "XP":

                game.xp += 50;
                break;

            case "HEALTH":

                game.player.health =
                Math.min(
                    game.player.maxHealth,
                    game.player.health + 30
                );
                break;

            case "ABILITY":

                game.abilities
                .unlockRandomAbility();
                break;
        }
    }

    draw(ctx){

        if(this.type==="XP")
            ctx.fillStyle="gold";

        if(this.type==="HEALTH")
            ctx.fillStyle="lime";

        if(this.type==="ABILITY")
            ctx.fillStyle="cyan";

        ctx.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
