export class World {
    constructor(game)
    {
        this.game = game;
        this.world = new this.game.CANNON.World();

        this.world.gravity.set(0, -9.82, 0);
    }
}