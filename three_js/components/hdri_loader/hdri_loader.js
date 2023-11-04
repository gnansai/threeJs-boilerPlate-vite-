import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

import { EquirectangularReflectionMapping,SRGBColorSpace} from "three";
import { TextureLoader } from "three";

async function hdriLoad() {
  const hdriLoader = new RGBELoader().setPath("/hdri/");
  const textureLoader = new TextureLoader().setPath("/hdri/");

  const [background1, hdri1] = await Promise.all([
    textureLoader.loadAsync("lythwood_room_1k.jpg"),
    hdriLoader.loadAsync("lythwood_room_1k.hdr"),
  ]);

  background1.colorSpace = SRGBColorSpace;
  background1.mapping = EquirectangularReflectionMapping;
  hdri1.mapping = EquirectangularReflectionMapping;

  return { background1, hdri1 };
}

export { hdriLoad };
