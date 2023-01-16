const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color( 0x000000 );
renderer.setSize( 800,800 );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 1, .5) ;
const material = new THREE.MeshBasicMaterial( { color: 0x63ff78, side: THREE.DoubleSide} );
const dvd = new THREE.Mesh( geometry, material );
scene.add( dvd );

//Variables
let xSpeed = 0.01;
let ySpeed = 0.01;

//rgb rand
function randColor()
{
    randColorR = Math.random(256);
    randColorG = Math.random(256);
    randColorB = Math.random(256);
    dvd.material.color.setRGB(randColorR,randColorG,randColorB);
}

//-size on bounce
function dvdSize()
{
    dvd.scale.x -= 0.15;
    dvd.scale.y -= 0.15;
}

camera.position.z = 1;

// default dvd position
dvd.position.x = 0;
dvd.position.y = 0;
dvd.position.z = 0;

// starting dvd color
randColor(dvd);

function animate() {
	requestAnimationFrame( animate );

    dvd.position.x += xSpeed
    dvd.position.y += ySpeed

    if(dvd.position.x > 0.7)
        {xSpeed *= -1; randColor(dvd); dvdSize();}
    else if(dvd.position.x < -0.7)
        {xSpeed *= -1; randColor(dvd); dvdSize();}
    else if(dvd.position.y > 0.85)
        {ySpeed *= -1; randColor(dvd); dvdSize();}
    else if(dvd.position.y < -0.85)
        {ySpeed *= -1; randColor(dvd); dvdSize();}
    else if(dvd.scale.x <= 0 && dvd.scale.y <= 0)
        {scene.remove(dvd);}

renderer.render( scene, camera );
}
animate();