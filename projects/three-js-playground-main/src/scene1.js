import * as THREE from '../lib/three.module.js';
// import * as dat from "./dat-gui-min.js";

// const gui = new dat.GUI();

const scene = new THREE.Scene();
let init = false;
const cubes = [];

function createCube() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
    const cube = new THREE.Mesh( geometry, material );
    cubes.push(cube);
    scene.add( cube );

    // gui.add(cube.position, "x");
    // gui.add(cube.position, "y");
    // gui.add(cube.position, "z");
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
    for (let i = 0; i < 1; i++) {
        createCube();
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