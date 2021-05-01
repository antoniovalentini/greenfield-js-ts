import * as THREE from '../lib/three.module.js';
import * as SceneManager from "./sceneManager.js";

const canvas = document.querySelector('canvas.webgl')

let sceneWrapper = SceneManager.get("scene1");
sceneWrapper.load();

initButtons();

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize( sizes.width, sizes.height );
renderer.setPixelRatio( Math.min(window.devicePixelRatio, 2) );

function onWindowResize() {

    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize( sizes.width, sizes.height );
    renderer.setPixelRatio( Math.min(window.devicePixelRatio, 2) );
}
window.addEventListener( 'resize', onWindowResize );

// function animate() {
//     requestAnimationFrame( animate );

//     sceneWrapper.animate();

//     renderer.render( sceneWrapper.scene, camera );
// }
// animate();

const clock = new THREE.Clock();
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    sceneWrapper.animate(elapsedTime);

    // Render
    renderer.render(sceneWrapper.scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();

function initButtons() {
    const buttons = document.getElementById("buttons");
    const btnScene1 = document.createElement("button");
    btnScene1.innerHTML = "Scene1";
    btnScene1.id = "scene1";
    
    const btnScene2 = document.createElement("button");
    btnScene2.innerHTML = "Scene2";
    btnScene2.id = "scene2";
    btnScene2.style = "margin-left: 7px;";
    btnScene1.addEventListener("click", () => {
        sceneWrapper = SceneManager.get("scene1");
        sceneWrapper.load();
    });
    btnScene2.addEventListener("click", () => {
        sceneWrapper = SceneManager.get("scene2");
        sceneWrapper.load();
    });
    
    buttons.appendChild(btnScene1);
    buttons.appendChild(btnScene2);
}
