import { playerPointerLockCamera } from "./components/PlayerPointerLockCamera";

export class Player {
    constructor(game)
    {
        this.game = game;
        this.playerPointerLockCamera = playerPointerLockCamera(this);

        // Bloquer le pointeur pour contrôler la caméra
        document.addEventListener('click', () => {
            this.playerPointerLockCamera.lock();
        })
    }

}