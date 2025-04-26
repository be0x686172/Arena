export class Lights {
    constructor(game)
    {
        this.game = game;

        this.ambientLight();
        this.sunLight();
    }

    ambientLight()
    {
        const ambientLight = new this.game.THREE.AmbientLight(0xffffff, 0.5);
        this.game.scene.add(ambientLight);
    }

    sunLight()
    {
        const sunlight = new this.game.THREE.DirectionalLight(0xffffff, 1);
        
        sunlight.position.set(100, 100, 100);
        sunlight.castShadow = true;
        
        this.game.scene.add(sunlight);
    }
}