import * as THREE from "./node_modules/three/build/three.module.js";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

//Making a vector object to store the direction I'm facing so I can move forward
let direction = new THREE.Vector3;
//Variable for storing my current speed (sprinting)
let speed = 1.0;
let onDocumentKeyDown = (event) => {
    // Getting world direction
    camera.getWorldDirection(direction);



    switch (event.which) {
        case 87:
            // W
            camera.position.addScaledVector(direction, speed);
            break;
        case 32:
            // S
            break;
        case 83:
            // D
            break;
        case 65:
            // A
            break;
        default:
            break;
    }
}
document.addEventListener("keydown", onDocumentKeyDown, false);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // camera.lookAt(cube.position)
}
animate();