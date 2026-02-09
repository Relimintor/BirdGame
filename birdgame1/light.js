import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function setupLights(scene) {
  // Soft global light
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  // Sun light
  const sun = new THREE.DirectionalLight(0xffffff, 1.2);
  sun.position.set(100, 200, 100);
  sun.castShadow = true;

  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 500;

  scene.add(sun);
}
