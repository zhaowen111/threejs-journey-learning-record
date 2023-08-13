import BaseScene from "../../utils/BaseScene";
import World from "./World";
import Environment from "./Environment";

export default class FoxScene extends BaseScene {
  world: World;
  environment: Environment;
  constructor(canvas:HTMLCanvasElement) {
    super(canvas);
    this.world = new World();
    this.environment = new Environment();
    this.update(() => {
      this.world.update();
    });
  }
}
