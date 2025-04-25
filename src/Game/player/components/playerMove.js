export function movePlayer(player)
{
    moveForward(player);
    moveRight(player);
}

function moveForward(player)
{
    // La direction actuelle du regard du joueur
    const playerLookCurrentDirection = player.playerPointerLockCamera.getDirection(new player.game.THREE.Vector3())

    playerLookCurrentDirection.y = 0;
    playerLookCurrentDirection.normalize(); // Normaliser la direction pour éviter une vitesse plus élevée en diagonale

    if (player.forwardMove)
    {
        player.playerBody.velocity.x = playerLookCurrentDirection.x * player.moveSpeed;
        player.playerBody.velocity.z = playerLookCurrentDirection.z * player.moveSpeed;
    }
    else if (player.backwardMove)
    {
        player.playerBody.velocity.x = -playerLookCurrentDirection.x * player.moveSpeed;
        player.playerBody.velocity.z = -playerLookCurrentDirection.z * player.moveSpeed;
    }
    else 
    {
        player.playerBody.velocity.x = 0;
        player.playerBody.velocity.z = 0;
    }
}

function moveRight(player)
{
    // La direction actuelle du regard du joueur et son côté droit
    const playerLookCurrentDirection = player.playerPointerLockCamera.getDirection(new player.game.THREE.Vector3());
    const playerLookCurrentDirectionSideRight = new player.game.THREE.Vector3();

    // Produit vectoriel pour calculer le côté droit du regard actuel du joueur
    playerLookCurrentDirectionSideRight.crossVectors(new player.game.THREE.Vector3(0, 1, 0), playerLookCurrentDirection);

    if (player.rightMove)
    {
        player.playerBody.velocity.x += -playerLookCurrentDirectionSideRight.x * player.moveSpeed;
        player.playerBody.velocity.z += -playerLookCurrentDirectionSideRight.z * player.moveSpeed;
    }
    else if (player.leftMove)
    {
        player.playerBody.velocity.x += playerLookCurrentDirectionSideRight.x * player.moveSpeed;
        player.playerBody.velocity.z += playerLookCurrentDirectionSideRight.z * player.moveSpeed;
    }
}