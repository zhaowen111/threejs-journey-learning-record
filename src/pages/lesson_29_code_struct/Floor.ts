import BaseScene from "../../utils/BaseScene.js";
import * as THREE from "three";
import Resources from "../../utils/Resources.js";
export default class Floor {
  baseScene: BaseScene | null;
  scene!: THREE.Scene;
  resources!: Resources;
  geometry!: THREE.CircleGeometry;
  textures!: {
    color: THREE.Texture;
    normal: THREE.Texture;
  };
  material!: THREE.MeshStandardMaterial;
  mesh!: THREE.Mesh<any, any>;
  constructor() {
    this.baseScene = BaseScene.instance();
    if (!this.baseScene) return;
    this.scene = this.baseScene.scene;
    this.resources = this.baseScene.resources;

    // Setup
    this.setGeometry();
    this.setTextures();
    this.setMaterial();
    this.setMesh();
  }
  setGeometry() {
    this.geometry = new THREE.CircleGeometry(5, 64);
  }
  setTextures() {
    this.textures = {
      color: this.resources.items.grassColorTexture as THREE.Texture,
      normal: this.resources.items.grassNormalTexture as THREE.Texture,
    };

    this.textures.color.colorSpace = THREE.SRGBColorSpace;
    this.textures.color.repeat.set(1.5, 1.5);
    this.textures.color.wrapS = THREE.RepeatWrapping;
    this.textures.color.wrapT = THREE.RepeatWrapping;

    this.textures.normal.repeat.set(1.5, 1.5);
    this.textures.normal.wrapS = THREE.RepeatWrapping;
    this.textures.normal.wrapT = THREE.RepeatWrapping;
  }
  setMaterial() {
    this.material = new THREE.MeshStandardMaterial({
      map: this.textures.color,
      normalMap: this.textures.normal,
    });
  }
  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI * 0.5;
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);
  }
}
