// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);
camera.position.set(0, 80, 160);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights
setupLights(scene);

// Load glTF arena
const loader = new THREE.GLTFLoader();
loader.load(
  'assets/arena/mountain.gltf',
  function(gltf) {
    const arena = gltf.scene;

    arena.scale.set(1, 1, 1);
    arena.position.set(0, 0, 0);

    arena.traverse(function(obj) {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    scene.add(arena);
  },
  undefined,
  function(error) {
    console.error('GLTF Load Error:', error);
  }
);

// Resize
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
