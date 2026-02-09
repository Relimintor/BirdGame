import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('models/mountain.glb', (gltf) => {
  gltf.scene.scale.set(1, 1, 1);
  scene.add(gltf.scene);
});
