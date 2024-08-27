import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCameraControls } from "./systems/cameraControls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { gltfLoad } from "./components/gltf_loader/gltfLoad.js";
import { hdriLoad } from "./components/hdri_loader/hdri_loader.js";
import { Debug } from "./systems/Debug.js";
import { createCube } from "./components/cube.js";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let controls;
let debug;
let cube;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    debug = new Debug();
    cube = createCube();
    cube.position.set(5,0,0)
    
    scene.add(cube);
    //WINDOW RESIZER
    const resizer = new Resizer(container, camera, renderer);
    container.append(renderer.domElement);

    controls = createCameraControls(camera, renderer.domElement);
  }

  //SETS UP BACKGROUND
  async loadBackground() {
    const { background1, hdri1 } = await hdriLoad();
    scene.background = background1;
    scene.environment = hdri1;
  }

  //GLTF LOADER
  async loadGltf() {
    const { loadedmodel } = await gltfLoad(renderer);
    scene.add(loadedmodel);
  }

  start() {
    renderer.setAnimationLoop(function () {
      renderer.render(scene, camera);

      controls.update();

      //DEBUG
      debug.update(renderer);
    });
    renderer.render(scene, camera);
    console.log(scene);
    //DEBUG
    debug.displayStats();
    debug.createGui(renderer);
  }
}

export { World };
