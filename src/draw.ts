import * as THREE from "three";

export default function draw() {
  const scene = new THREE.Scene();
  const aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(50, 151, 19);
  const material = new THREE.MeshNormalMaterial();
  const style1 = new THREE.Mesh(geometry, material);
  style1.position.x = 0;

  const style2 = new THREE.Mesh(geometry, material);
  style2.position.x = 100;

  scene.add(style1);
  scene.add(style2);

  camera.position.z = 500;
  camera.position.x = 400;

  function render() {
    requestAnimationFrame(render);
    //cube.rotation.x += 0.1;
    //cube.rotation.y += 0.1;
    renderer.render(scene, camera);
  }

  render();
}

draw();
