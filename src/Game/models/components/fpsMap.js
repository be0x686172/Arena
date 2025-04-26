export function fpsMap(models)
{
    models.loader.load('../../../public/models/fpsMap.glb', (gltf) => {
        const fpsMap = gltf.scene;

        // On attache le glock à la caméra
        models.game.camera.add(fpsMap);
        
        // Ajouter la caméra à la scène
        models.game.scene.add(fpsMap)

    }, undefined, function(error) {
        console.error('Erreur lors du chargement du modèle :', error);
    });
}