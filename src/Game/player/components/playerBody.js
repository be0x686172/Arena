export function playerBody(player)
{
    const playerBody = new player.game.CANNON.Body({
        mass: 1,
        shape: new player.game.CANNON.Sphere(2.7),
        position: new player.game.CANNON.Vec3(0, 5, 0)
    });

    player.game.World.world.addBody(playerBody);
    
    return playerBody;
}