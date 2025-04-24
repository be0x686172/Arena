import { createScene } from "./core/scene";
import { createCamera } from "./core/camera";
import { createRenderer } from "./core/renderer";
import { Map } from "./map/Map";
import { Player } from "./player/Player";

export class Game {
    constructor(THREE)
    {
        this.THREE = THREE;

        this.scene = createScene(this);
        this.camera = createCamera(this);
        this.renderer = createRenderer(this);

        this.Map = new Map(this);
        this.Player = new Player(this);

        // autoResize
        new THREEx.WindowResize(this.renderer, this.camera);

        this.animate();
    }

    animate = () =>
    {
        requestAnimationFrame(this.animate);      
        this.renderer.render(this.scene, this.camera);
    }
}