
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry(700, 700, 700);


var material = new THREE.MeshNormalMaterial({color: 0xfffff});



var cube = new THREE.Mesh(geometry, material);
var flag=0;
scene.add(cube);
camera.position.z = 1000; 
renderer.render(scene, camera);

function render1() {
	requestAnimationFrame(render1);
	if(flag==0){
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.025;
		cube.rotation.z += 0.05;
		renderer.render(scene, camera);
	}
	else{
		renderer.render(scene, camera);
	}
}
function f(){
	flag=1;
}

function f1(){
	if(flag==0)
		render1();
	flag=0;
}

//render();


