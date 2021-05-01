import * as THREE from '../lib/three.module.js';

const scene = new THREE.Scene();
let init = false;
const cubes = [];

function createCube(i) {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    const x = i%2 ? i : -i;
    const y = i-2;
    const z = -i*3;
    cube.position.set(x,y,z);
    cubes.push(cube);
    scene.add( cube );
}

function addLight() {
    // white spotlight shining from the side, casting a shadow

    const spotLight = new THREE.SpotLight( 0xffffff );
    const spotLight2 = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 10, 30, 50 );
    spotLight2.position.set( -20, 10, 100 );

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    scene.add( spotLight );
    scene.add( spotLight2 );
    // gui.add(spotLight.position, "x");
    // gui.add(spotLight.position, "y");
    // gui.add(spotLight.position, "z");
}

function load() {
    if (init) return;
    addLight();
    for (let i = 0; i < 15; i++) {
        createCube(i, scene);
    }
    init = true;
}

function animate(elapsedTime) {
    for (let i = 0; i < cubes.length; i++) {
        const cube = cubes[i];
        cube.rotation.x = 0.5 * elapsedTime;
        cube.rotation.y = 0.5 * elapsedTime;
    }
}

export {
    load,
    animate,
    scene
}