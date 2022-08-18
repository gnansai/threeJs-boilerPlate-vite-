import {
  WebGLRenderer,
  ACESFilmicToneMapping,
  sRGBEncoding,
  PCFSoftShadowMap,
} from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.physicallyCorrectLights = true;

  return renderer;
}
export { createRenderer };
