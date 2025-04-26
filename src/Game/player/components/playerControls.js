export function playerControls(player)
{
    movePlayer(player);
}

function movePlayer(player)
{
    document.addEventListener('keydown', (e) => {
        switch (e.key)
        {
            case 'z':
                player.forwardMove = true;
                break; 
            case 's':
                player.backwardMove = true;
                break; 
            case 'd':
                player.rightMove = true;
                break; 
            case 'a':
                player.leftMove = true;  
                break;   
            default:
                break;
        }
    });

    document.addEventListener('keyup', (e) => {
        switch (e.key)
        {
            case 'z':
                player.forwardMove = false;
                break; 
            case 's':
                player.backwardMove = false;
                break; 
            case 'd':
                player.rightMove = false;
                break; 
            case 'a':
                player.leftMove = false;   
                break;  
            default:
                break;
        }
    });
}
