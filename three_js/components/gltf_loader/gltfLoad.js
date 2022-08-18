import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel.js";

import { LoadingManager } from "three";

async function gltfLoad(renderer) {
  const loader = new GLTFLoader();

  const modelData = await loader.loadAsync("/models/materials_test.glb");

  const loadedmodel = setupModel(modelData);

  return { loadedmodel };
}

export { gltfLoad };
