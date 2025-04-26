import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Glock } from './components/glock';
import { fpsMap } from './components/fpsMap';

export class Models {
    constructor(game)
    {
        this.game = game;
        this.loader = new GLTFLoader();

        this.glock = new Glock(this);
        fpsMap(this);
    }
}