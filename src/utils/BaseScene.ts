import * as THREE from "three";
import Camera from "./Camera";
import Sizes from "./Sizes";
import Time from "./Time";
import Resources from "./Resources";
import sources from "../pages/lesson_29_code_struct/source";
import Debug from "./Debug";
import Renderer from "./Renderer";
let instance: BaseScene;
export default class BaseScene {
  readonly canvas!: HTMLCanvasElement;
  readonly resources: Resources;
  readonly debug: Debug;
  readonly sizes: Sizes;
  readonly time: Time;
  readonly scene!: THREE.Scene;
  readonly camera: Camera;
  readonly renderer: Renderer;
  constructor(canvas: HTMLCanvasElement) {
    instance = this;

    // Options
    this.canvas = canvas;
    // Setup
    this.resources = new Resources(sources);
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();

    // Resize event
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", () => {
      this.__update();
    });
  }
  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  private __update() {
    this.camera.update();
    this.renderer.update();
  }
  update(func:Function) {
    this.time.on("tick", () => {
      func && func();
    });
  }
  destroy() {
    this.sizes.off("resize");
    this.time.off("tick");
    this.scene.traverse((child) => {
      // Test if it's a mesh
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        // Loop through the material properties
        for (const key in child.material) {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === "function") {
            value.dispose();
          }
        }
      }
    });
    this.camera.controls.dispose();
    this.renderer.instance.dispose();
    if (this.debug.active) this.debug.ui.destroy();
  }
  static instance() {
    return instance;
  }
}
