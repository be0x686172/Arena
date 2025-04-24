export function createScene(game)
{
    const scene = new game.THREE.Scene();

    scene.background = new game.THREE.Color(0x87ceeb);

    return scene;
}