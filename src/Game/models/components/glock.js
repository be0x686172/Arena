export class Glock {
    constructor(models)
    {
        this.models = models;
        
        this.importGlock();
    }

    importGlock()
    {
        this.models.loader.load('../../../public/models/glock.glb', (gltf) => {
            this.glock = gltf.scene;
            this.glockAnimations = gltf.animations;

            // On attache le glock à la caméra
            this.models.game.camera.add(this.glock);
            
            // Paramètres de l'arme
            this.glock.position.set(-0.3, -0.65, -1.05);
            this.glock.rotation.set(0, Math.PI / 2, 0);
            this.glock.scale.set(0.22, 0.22, 0.22);
            
            // Ajouter la caméra à la scène
            this.models.game.scene.add(this.models.game.camera)

        }, undefined, function(error) {
            console.error('Erreur lors du chargement du modèle :', error);
        });
    }
}