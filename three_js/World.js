import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createCameraControls } from "./systems/cameraControls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { gltfLoad } from "./components/gltf_loader/gltfLoad.js";
import { hdriLoad } from "./components/hdri_loader/hdri_loader.js";
import { createCube } from "./components/cube.js";
import { DebugUI } from "./systems/DebugUi.js";
import { AnimLoop } from "./systems/AnimLoop.js";
import { GridHelper } from "three/webgpu";
import { Pane } from "tweakpane";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let controls;
let cube;
let tweakPaneUI;
let loop;


class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    cube = createCube();
    cube.position.set(5, 0, 0)

    loop = new AnimLoop(camera, scene, renderer);
    loop.updatables.push(cube);
    tweakPaneUI = new Pane();


    tweakPaneUI = new DebugUI(scene);
    tweakPaneUI.addUI(cube, "cube");
    loop.updatables.push(tweakPaneUI.stats);


    scene.add(cube);
    //WINDOW RESIZER
    const resizer = new Resizer(container, camera, renderer);
    container.append(renderer.domElement);

    controls = createCameraControls(camera, renderer.domElement);
    loop.updatables.push(controls);
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

    // console.log(loadedmodel)
    // tweakPaneUI.addUI(loadedmodel, "GLTFModel");

  }




  start() {
    loop.start();


  }

  stop() {
    loop.stop();
  }
}

export { World };
