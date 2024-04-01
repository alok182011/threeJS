import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Cursor

const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = -(e.clientY / sizes.height - 0.5);
});

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

Object;
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  90,
  sizes.width / sizes.height,
  0.1,
  100
);
// const camera = new THREE.OrthographicCamera(
//   -1 * (sizes.width / sizes.height),
//   1 * (sizes.width / sizes.height),
//   1,
//   -1,
//   0.1,
//   100
// );
// camera.position.set(2, 2, 2);
camera.position.z = 3;
// camera.position.x = 2;
// camera.position.y = 2;
camera.lookAt(mesh.position);

scene.add(camera);

// Controls

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// Animations

const clock = new THREE.Clock();

const tick = () => {
  // Clock

  const elapsedTime = clock.getElapsedTime();

  //   mesh.rotation.y = elapsedTime;

  //   camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  //   camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  //   camera.position.y = cursor.y * 5;

  //   camera.lookAt(mesh.position);

  // update controls
  controls.update();

  // render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
