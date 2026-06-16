import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { WaveManager } from "./waves.js";
import { SaveSystem } from "./save.js";

export class Game{

constructor(){

this.canvas =
document.getElementById("gameCanvas");

this.ctx =
this.canvas.getContext("2d");

this.player =
new Player(450,300);

this.enemies=[];

this.waveManager =
new WaveManager(this);

this.save =
new SaveSystem();

this.score=0;

this.level=1;

this.xp=0;

this.lives=3;

this.running=false;

this.keys={};

this.setupControls();
}

setupControls(){

window.addEventListener(
"keydown",
e=>this.keys[e.key]=true
);

window.addEventListener(
"keyup",
e=>this.keys[e.key]=false
);
}

start(){

this.running=true;

this.waveManager.startWave();

requestAnimationFrame(
this.loop.bind(this)
);
}

loop(){

if(!this.running) return;

this.update();

this.draw();

requestAnimationFrame(
this.loop.bind(this)
);
}

update(){

this.player.update(this);

this.enemies.forEach(
enemy=>enemy.update(this)
);

this.enemies =
this.enemies.filter(
enemy=>enemy.alive
);

this.updateHUD();
}

draw(){

this.ctx.clearRect(
0,
0,
this.canvas.width,
this.canvas.height
);

this.player.draw(this.ctx);

this.enemies.forEach(
enemy=>enemy.draw(this.ctx)
);
}

updateHUD(){

document.getElementById(
"score"
).textContent=this.score;

document.getElementById(
"lives"
).textContent=this.lives;

document.getElementById(
"level"
).textContent=this.level;

document.getElementById(
"xp"
).textContent=this.xp;

document.getElementById(
"record"
).textContent=
this.save.record;
}

addScore(points){

this.score += points;

this.xp += points;

if(this.score >
this.save.record){

this.save.record =
this.score;

this.save.saveRecord();
}

if(this.xp >= 100){

this.level++;

this.xp = 0;

this.player.maxHealth += 20;

this.player.health =
this.player.maxHealth;
}

if(this.score >= 1000){

alert("Victoria");

location.reload();
}
}

gameOver(){

alert("Game Over");

location.reload();
}
}
