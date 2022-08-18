import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

function createCameraControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.enableZoom = true;
  controls.target.set(0, 0, 0);
  controls.update();

  return controls;
}

export { createCameraControls };
