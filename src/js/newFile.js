import { repoCube, controls, composer } from "./main";

+function animate() {
  requestAnimationFrame(animate);
  repoCube.rotation.x += 0.01;
  repoCube.rotation.y += 0.01;
  controls.update();
  composer.render();
};
