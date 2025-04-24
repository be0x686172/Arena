import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export function playerPointerLockCamera(player)
{
    const controls = new PointerLockControls(player.game.camera, player.game.renderer.domElement);
    return controls;
}

