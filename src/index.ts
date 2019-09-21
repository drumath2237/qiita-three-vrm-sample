import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRM } from '@pixiv/three-vrm'

window.addEventListener('DOMContentLoaded', () => {
  
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3;
  camera.position.y = 1;

  const loader = new GLTFLoader();
  loader.load(
    '/models/shino.vrm',

    (gltf) =>{
      VRM.from(gltf).then( ( vrm ) => {
        scene.add(vrm.scene);
        vrm.scene.rotation.y = Math.PI;
      }) 
    }
  )

  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1,1,1).normalize();
  scene.add(light);

  const update = () => {
    requestAnimationFrame(update);    
    renderer.render(scene, camera);
  }
  update();
})