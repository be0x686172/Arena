export function createFloor(map)
{
    // THREE
    const geometry = new map.game.THREE.PlaneGeometry(15, 15);
    const material = new map.game.THREE.MeshBasicMaterial({ color: 0xebebeb });
    const floor = new map.game.THREE.Mesh(geometry, material);

    floor.rotation.x = -Math.PI / 2;

    map.game.scene.add(floor);

    // CANNON
    const floorBody = new map.game.CANNON.Body({
        mass: 0, // Statique = pas de mouvement
        shape: new map.game.CANNON.Plane()
    });

    floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Rotation pour être à plat

    map.game.World.world.addBody(floorBody);
}

