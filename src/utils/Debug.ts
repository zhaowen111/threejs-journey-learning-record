import * as dat from "lil-gui";
export default class Debug {
  active:boolean
  public ui!: dat.GUI;
  constructor() {
    this.active = window.location.hash.includes("debug");
    if (this.active) {
      this.ui = new dat.GUI();
    }
  }
}
