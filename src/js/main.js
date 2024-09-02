import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import filterGeniusService from './services/filterGeniusService';
import reportWebVitals from './reportWebVitals';
import reportWebVitals from './reportWebVitals';

reportWebVitals(console.log);

document.getElementById('filtergenius-button').addEventListener('click', function() {
  filterGeniusService.filterText('Texto que necesitas filtrar')
    .then(function (response) {
      console.log('Respuesta de FilterGenius:', response.data);
        alert('FilterGenius ha respondido: ' + response.data.result);
      })
    .catch(error => console.error('Error:', error));
});

const LazyComponent = React.lazy(() => import('./LazyComponent'));
const Suspense = React.Suspense;


root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </React.StrictMode>
);
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = 0.21;
bloomPass.strength = 0.8;
bloomPass.radius = 0.55;
composer.addPass(bloomPass);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
const gui = new dat.GUI();

const texture = new THREE.TextureLoader().load('path/to/your/texture.jpg'); 
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
const repoCubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const repoCubeMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const repoCube = new THREE.Mesh(repoCubeGeometry, repoCubeMaterial);
scene.add(repoCube);
scene.add(cube);

repoCube.position.x = 2;  

window.addEventListener('click', (event) => {
 mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects([repoCube]);

    if (intersects.length > 0) {
    window.location.href = 'https://github.com/Neiland85/kurtgodelismydad.io';
  }
});

window.addEventListener('click', (event) => {
  if (intersects.length > 0) {
    repoCube.material.color.set(Math.random() * 0xffffff);
  }
});

const cubeOptions = {
  rotationSpeed: 0.01,
  color: cube.material.color.getHex(),
};

function animate() {
  requestAnimationFrame(animate);
  repoCube.rotation.x += 0.01;
  repoCube.rotation.y += 0.01;
  controls.update();
  composer.render();
}
animate();

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += cubeOptions.rotationSpeed;
  cube.rotation.y += cubeOptions.rotationSpeed;
  controls.update();
  composer.render();  }
animate();

camera.position.y = 2;
camera.position.x = 0;
camera.position.z = 5;

gui.add(cubeOptions, 'rotationSpeed', 0, 0.1);
gui.addColor(cubeOptions, 'color').onChange((value) => {
  cube.material.color.setHex(value);
});
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += cubeOptions.rotationSpeed;
  cube.rotation.x += cubeOptions.rotationSpeed;
  controls.update();
  composer.render();
  renderer.render(scene, camera);
}
animate();

const ambientLight = new THREE.AmbientLight(0x404040); 
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    intersects[0].object.material.color.set(Math.random() * 0xffffff);
  }
});
    
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  controls.update();

  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

window.addEventListener('click', () => {
  cube.material.color.set(Math.random() * 0xffffff); 
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.x = 0;
plane.position.z = 5;
plane.position.y = -1;
plane.castShadow = true;
plane.receiveShadow = true;
scene.add(plane);

cube.castShadow = true;
cube.receiveShadow = true;
repoCube.castShadow = true;
repoCube.receiveShadow = true;

cube.castShadow = true;
cube.receiveShadow = true;
cube.frustumCulled = true;

directionalLight.castShadow = true;

const doctypeObj = document.doctype;
console.log(`doctypeObj: ${doctypeObj}`);

console.log(`doctypeObj.name: ${doctypeObj.name}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);
console.log(`doctypeObj.internalSubset: ${doctypeObj.internalSubset}`);
console.log(`doctypeObj.publicSubset: ${doctypeObj.publicSubset}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);

document.getElementById('github-button').addEventListener('click', () => {
  window.location.href = 'https://github.com/tu-usuario/tu-repositorio';
});
document.getElementById('filtergenius-button').addEventListener('click', function() {

  fetch('https://api.filtergenius.com/your-endpoint', {  
    method: 'POST',  // 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-api-token' 
    },
    body: JSON.stringify({
      input: 'Texto o datos que necesitas filtrar'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta de FilterGenius:', data);
    alert('FilterGenius ha respondido: ' + data.result);
  })
  .catch(error => console.error('Error:', error));
});

