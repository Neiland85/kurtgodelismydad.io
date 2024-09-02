import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import filterGeniusService from './services/filterGeniusService'

// "la escena" 
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 'Camera'
const controls = new OrbitControls(camera, renderer.domElement)
const gui = new dat.GUI()

// 'process'
const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85)
composer.addPass(bloomPass)

// 'Objects'
const texture = new THREE.TextureLoader().load('path/to/your/texture.jpg') 
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({ map: texture })
const cube = new THREE.Mesh(geometry, material)
const repoCubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const repoCubeMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff })
const repoCube = new THREE.Mesh(repoCubeGeometry, repoCubeMaterial)
scene.add(repoCube)
scene.add(cube)

repoCube.position.x = 2  

// Luz
const ambientLight = new THREE.AmbientLight(0x404040) 
scene.add(ambientLight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 5, 5).normalize()
scene.add(directionalLight)

// Configuración 'raycaster'
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
window.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(scene.children)

  if (intersects.length > 0) {
    intersects[0].object.material.color.set(Math.random() * 0xffffff)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  repoCube.rotation.x += 0.01
  repoCube.rotation.y += 0.01
  controls.update()
  composer.render()
  renderer.render(scene, camera)
}
animate()

// Redimensiones
window.addEventListener('resize', () => {
  const width = window.innerWidth
  const height = window.innerHeight
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})

// FilterGenius Botón
document.getElementById('filtergenius-button').addEventListener('click', function() {
  filterGeniusService.filterText('Texto que necesitas filtrar')
    .then(function (response) {
      console.log('Respuesta de FilterGenius:', response.data)
      alert('FilterGenius ha respondido: ' + response.data.result)
    })
    .catch(error => console.error('Error:', error))
})
