import { createFloor } from "./components/MapFloor";

export class Map {
    constructor(game)
    {
        this.game = game;

        createFloor(this);
    }
}

