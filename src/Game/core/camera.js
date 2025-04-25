export function createCamera(game)
{
    const camera = new game.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100 );
    
    camera.position.set(0, 1, 0);
    
    return camera;
}
