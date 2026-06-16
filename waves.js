import { Enemy } from "./enemy.js";

export class WaveManager {

    constructor(game) {

        this.game = game;

        this.wave = 1;
    }

    startWave() {

        const totalEnemies =
            4 + (this.wave * 2);

        for (
            let i = 0;
            i < totalEnemies;
            i++
        ) {

            const positions = [

                [20,20],
                [900,20],
                [20,500],
                [900,500]
            ];

            const pos =
                positions[
                    Math.floor(
                        Math.random()
                        * positions.length
                    )
                ];

            this.game.enemies.push(

                new Enemy(
                    pos[0],
                    pos[1]
                )
            );
        }

        setInterval(() => {

            if (
                this.game.enemies.length === 0
            ) {

                this.wave++;

                this.startWave();
            }

        },1000);
    }
}
