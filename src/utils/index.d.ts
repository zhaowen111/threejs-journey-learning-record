import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

declare namespace Resource {
  interface Source {
    name: string;
    type: "cubeTexture" | "texture" | "gltfModel";
    path: string[];
  }

  type ResourceFile = GLTF | THREE.Texture | THREE.CubeTexture;
}
