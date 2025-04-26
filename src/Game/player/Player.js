import { playerPointerLockCamera } from "./components/PlayerPointerLockCamera";
import { playerControls } from "./components/playerControls";
import { playerBody } from "./components/playerBody";
import { movePlayer } from "./components/playerMove";

export class Player {
    constructor(game)
    {
        this.game = game;
        this.playerPointerLockCamera = playerPointerLockCamera(this);
        this.playerControls = playerControls(this);
        this.playerBody = playerBody(this);

        // Etats du joueur 
            // Mouvements
        this.forwardMove = false;
        this.backwardMove = false;
        this.rightMove = false;
        this.leftMove = false;
        this.moveSpeed = 10;
        this.delta = new game.THREE.Clock().getDelta();

        // Bloquer le pointeur pour contrôler la caméra
        document.addEventListener('click', () => {
            this.playerPointerLockCamera.lock();
        })
    }

    update()
    {
        movePlayer(this);
    }
}