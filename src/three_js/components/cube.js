import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";

function createCube(x, y, z, rotx, roty, rotz, col, seed) {
  const geometry = new BoxBufferGeometry(1, 1, 1);
  const material = new MeshStandardMaterial({ color: col });
  const cube = new Mesh(geometry, material);
  cube.position.set(x, y, z);

  cube.rotation.set(
    MathUtils.degToRad(rotx),
    MathUtils.degToRad(roty),
    MathUtils.degToRad(rotz)
  );

  cube.anim = () => {
    // increase the cube's rotation each frame
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  };

  return cube;
}

export { createCube };
