import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

Object;
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
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
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// Animations

// let time = Date.now();

// const clock = new THREE.Clock();

// animation using gsap
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

const tick = () => {
  //   mesh.position.x = mesh.position.x + 0.001;

  //   let curTime = Date.now();
  //   let delTime = curTime - time;
  //   time = curTime;

  // Clock

  //   const elapsedTime = clock.getElapsedTime();

  //   //  mesh.rotation.y += 0.001 * delTime;

  //   mesh.rotation.y = elapsedTime;
  //   mesh.position.y = Math.sin(elapsedTime);

  //   mesh.position.x = Math.cos(elapsedTime);

  //   camera.lookAt(mesh.position);

  // render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();