import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import BaseScene from "./BaseScene";
import * as THREE from "three";
import Sizes from "./Sizes";

export default class Camera {
  baseScene: BaseScene | null;
  sizes!: Sizes;
  scene!: THREE.Scene;
  canvas!: HTMLCanvasElement;
  instance!: THREE.PerspectiveCamera;
  controls!: OrbitControls;
  constructor() {
    this.baseScene = BaseScene.instance();
    if (!this.baseScene) return;
    this.sizes = this.baseScene.sizes;
    this.scene = this.baseScene.scene;
    this.canvas = this.baseScene.canvas;
    this.setInstance();
    this.setControls();
  }
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.instance.position.set(6, 4, 8);
    this.scene.add(this.instance);
  }
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = true;
  }
  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }
  update() {
    this.controls.update();
  }
}
