export class AbilityManager {

    constructor(player){

        this.player = player;

        this.activeAbilities = [];

        this.droneUnlocked = false;

        this.shieldActive = false;

        this.doubleShot = false;

        this.mineDamage = 100;
    }

    unlockRandomAbility(){

        const abilities = [

            "DOUBLE_SHOT",
            "SHIELD",
            "DRONE",
            "FAST_FIRE",
            "REPAIR",
            "SUPER_BULLETS"
        ];

        const selected = abilities[
            Math.floor(
                Math.random() *
                abilities.length
            )
        ];

        this.applyAbility(selected);

        return selected;
    }

    applyAbility(name){

        if(
            this.activeAbilities.includes(name)
        ){
            return;
        }

        this.activeAbilities.push(name);

        switch(name){

            case "DOUBLE_SHOT":

                this.doubleShot = true;
                break;

            case "SHIELD":

                this.shieldActive = true;
                break;

            case "DRONE":

                this.droneUnlocked = true;
                break;

            case "FAST_FIRE":

                this.player.fireRate = 10;
                break;

            case "REPAIR":

                this.player.health =
                this.player.maxHealth;
                break;

            case "SUPER_BULLETS":

                this.player.damage = 100;
                break;
        }
    }
}
