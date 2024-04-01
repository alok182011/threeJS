import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "red" });
// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

// GROUP
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const cubeA = new THREE.Mesh(geometry, material);
cubeA.position.set(1, 1, 0);

const cubeB = new THREE.Mesh(geometry, material);
cubeB.position.set(-1, -1, 0);

//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
const group = new THREE.Group();
group.add(cubeA);
group.add(cubeB);

scene.add(group);

// // Position
// mesh.position.set(0.7, -0.6, 1);

// // Scale
// mesh.scale.set(2, 0.5, 0.5);

// // Rotation
// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.25;

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
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

// camera.lookAt(mesh.position);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
