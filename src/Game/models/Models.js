import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Glock } from './components/glock';

export class Models {
    constructor(game)
    {
        this.game = game;
        this.loader = new GLTFLoader();

        this.glock = new Glock(this);
    }
}