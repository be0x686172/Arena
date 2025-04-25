import { createScene } from "./core/scene";
import { createCamera } from "./core/camera";
import { createRenderer } from "./core/renderer";
import { World } from "./world/World";
import { Map } from "./map/Map";
import { Player } from "./player/Player";

export class Game {
    constructor(THREE, CANNON)
    {
        this.THREE = THREE;
        this.CANNON = CANNON;

        this.scene = createScene(this);
        this.camera = createCamera(this);
        this.renderer = createRenderer(this);

        this.World = new World(this);
        this.Map = new Map(this);
        this.Player = new Player(this);

        // autoResize
        new THREEx.WindowResize(this.renderer, this.camera);

        this.animate();
    }

    // Fonction animate pour mettre à jour les composants
    animate = () =>
    {
        requestAnimationFrame(this.animate);    

        // La caméra
        this.camera.position.copy(this.Player.playerBody.position);

        // Le monde physique
        this.World.world.step(1 / 60);

        // Le joueur
        this.Player.update();
        
        this.renderer.render(this.scene, this.camera);
    }
}