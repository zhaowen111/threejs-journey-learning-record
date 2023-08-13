import BaseScene from "./BaseScene";
import * as THREE from "three";
import Sizes from "./Sizes";
import Camera from "./Camera";

export default class Renderer {
  baseScene: BaseScene | null;
  canvas!: HTMLCanvasElement;
  sizes!: Sizes;
  scene!: THREE.Scene;
  camera!: Camera;
  instance!: THREE.WebGLRenderer;
  constructor() {
    this.baseScene = BaseScene.instance();
    if (!this.baseScene) return;
    this.canvas = this.baseScene.canvas;
    this.sizes = this.baseScene.sizes;
    this.scene = this.baseScene.scene;
    this.camera = this.baseScene.camera;
    this.setInstance();
  }
  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
