import BaseScene from "../../utils/BaseScene.ts";
import Floor from "./Floor.js";
import Fox from "./Fox.js";
export default class World {
  baseScene: BaseScene | null;
  scene: any;
  resources: any;
  floor!: Floor;
  fox!: Fox;
  constructor() {
    this.baseScene = BaseScene.instance();
    if (!this.baseScene) return;
    this.scene = this.baseScene.scene;
    this.resources = this.baseScene.resources;
    // Wait for resources
    this.resources.on("ready", () => {
      // Setup
      this.floor = new Floor();
      this.fox = new Fox();
    });
  }
  update() {
    if (this.fox) this.fox.update();
  }
}
