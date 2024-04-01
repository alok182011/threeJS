import * as THREE from "three";
import "./style.css";
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
// const geometry = new THREE.BoxGeometry(1, 1, 1);

// const positionArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);

// const positionsAttribute = new THREE.BufferAttribute(positionArray, 3);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute("position", positionsAttribute);

let count = 50;
const positionArray = new Float32Array(count * 3 * 3);

for (let i = 0; i < count * 3 * 3; i++) {
  positionArray[i] = Math.random() - 0.5;
}

const positionsAttribute = new THREE.BufferAttribute(positionArray, 3);

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", positionsAttribute);

const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Axes helper
const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
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
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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
