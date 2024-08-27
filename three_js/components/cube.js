import {
  
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";
import { BoxGeometry } from "three";
import { mx_fractal_noise_vec3, mx_worley_noise_vec3 } from "three/webgpu";
import { mx_cell_noise_float, normalWorld } from "three/webgpu";
import { MeshStandardNodeMaterial, normalGeometry } from "three/webgpu";

function createCube(x, y, z) {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardNodeMaterial();
  material.colorNode = mx_worley_noise_vec3(normalWorld);
  const cube = new Mesh(geometry, material);



 

  return cube;
}

export { createCube };
