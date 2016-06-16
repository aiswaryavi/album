
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

    var light = new THREE.AmbientLight( 0xffffff);
    light.position.set( 0, 1, 1 ).normalize();
    scene.add(light);
var geometry = new THREE.BoxGeometry(100, 100, 100);

var btn = document.createElement("BUTTON");
var t = document.createTextNode("CLICK ME"); 
    
btn.appendChild(t);                                
scene.add(btn);  
var material1 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/crate.jpg',btn) } );

    var material2 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/bricks.jpg') } );
    var material3 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/clouds.jpg') } );
    var material4 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/stone-wall.jpg') } );
    var material5 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/water.jpg') } );
    var material6 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/wood-floor.jpg') } );
  
    var materials = [material1, material2, material3, material4, material5, material6];
  
    var meshFaceMaterial = new THREE.MeshFaceMaterial( materials );
  
   var cube = new THREE.Mesh(geometry, meshFaceMaterial );
	cube.position.z=-50;
	meshFaceMaterial.onclick=click1;

var flag=1;
scene.add(cube);
camera.position.z = 150; 
renderer.render(scene, camera);
render1();
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
function click1(){
	
	
	 	alert("clicked");
	 
}




