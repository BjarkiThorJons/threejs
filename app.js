let scene = new THREE.Scene();
//gera myndavél, velja FOV, aspect ratio 
let camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load( 'myndir/stone.png' );


var materials = [
    new THREE.MeshBasicMaterial( { map: texture } ),
    new THREE.MeshBasicMaterial( { map: texture } ),
    new THREE.MeshBasicMaterial( { map: texture } ),
    new THREE.MeshBasicMaterial( { map: texture } ),
    new THREE.MeshBasicMaterial( { map: texture } ),
    new THREE.MeshBasicMaterial( { map: texture } )
];
var faceMaterial = new THREE.MeshFaceMaterial( materials );

let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let cube = new THREE.Mesh( geometry, faceMaterial );
let edges = new THREE.EdgesGeometry( geometry );
let line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );

let light = new THREE.AmbientLight( 0x404040 );

let group = new THREE.Group();
group.add(cube);
group.add(line);
group.add(light)
scene.add(group);


camera.position.z = 5;

let xSpeed = 0.1;
let ySpeed = 0.1;

document.addEventListener("keydown", Keydown, false);
function Keydown(event) {
    let keyCode = event.which;
    if (keyCode == 87) {
        cube.position.y += ySpeed;
    } 
    else if (keyCode == 83) {
        cube.position.y -= ySpeed;
    } 
    else if (keyCode == 65) {
        cube.position.x -= xSpeed;
    } 
    else if (keyCode == 68) {
        cube.position.x += xSpeed;
    } 
};

function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	line.rotation.x = cube.rotation.x
	line.rotation.y = cube.rotation.y
	renderer.render( scene, camera );
}
animate();
