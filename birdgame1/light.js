function setupLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xffffff, 1.2);
  sun.position.set(100, 200, 100);
  sun.castShadow = true;
  scene.add(sun);
}
