import EventEmitter from "./EventEmitter";
export default class Sizes extends EventEmitter {
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  pixelRatio: number = Math.min(window.devicePixelRatio, 2);
  constructor() {
    super();
    // Resize event
    window.addEventListener("resize", () => {
      this.resize();
      this.trigger("resize");
    });
  }
  resize(): void {
    // Setup
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }
}
