export function createFloor(map)
{
    const geometry = new map.game.THREE.PlaneGeometry(100, 100);
    const material = new map.game.THREE.MeshBasicMaterial({ color: 0xebebeb });
    const floor = new map.game.THREE.Mesh(geometry, material);

    floor.rotation.x = -Math.PI / 2;

    map.game.scene.add(floor);
}