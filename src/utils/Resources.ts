import EventEmitter from "./EventEmitter";
import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Resource } from ".";
export default class Resources extends EventEmitter {
  sources: Resource.Source[];
  items: {
    [index: string]: Resource.ResourceFile;
  };
  toLoad: number;
  loaded: number;
  loaders!: {
    [index: string]:
      | GLTFLoader
      | THREE.TextureLoader
      | THREE.CubeTextureLoader;
  };
  constructor(sources: Resource.Source[]) {
    super();
    this.sources = sources;
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.setLoaders();
    this.startLoading();
  }
  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
  }
  startLoading() {
    // Load each source
    for (const source of this.sources) {
      const path = source.path as string & string[];
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(
          path[0] as string & string[],
          (file) => {
            this.sourceLoaded(source, file);
          }
        );
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeTextureLoader.load(path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }
  sourceLoaded(source: Resource.Source, file: Resource.ResourceFile) {
    this.items[source.name] = file;

    this.loaded++;

    if (this.loaded === this.toLoad) {
      this.trigger("ready");
    }
  }
}
