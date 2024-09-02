// 'process'
const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85))
// 'Objects'
const texture = new THREE.TextureLoader().load('path/to/your/texture.jpg')
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({ map: texture })
export const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
cube.position.x = 0
cube.position.x = 1
const repoCubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const repoCubeMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff })
const repoCube = new THREE.Mesh(repoCubeGeometry, repoCubeMaterial)
scene.add(repoCube)
repoCube.position.x = 2
repoCube.position.y = 2
repoCube.position.z = 2
// Luz
const ambientLight = new THREE.AmbientLight(0x404040)
scene.add(ambientLight)
// 'directionalLight'
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)

directionalLight.position.set(5, 5, 5).normalize()
scene.add(directionalLight)
// 'raycaster'
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
window.addEventListener('click', (event) => 