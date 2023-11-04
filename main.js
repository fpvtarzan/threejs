//nu vill vi göra en funktion här
const engelska = () => {
    //KÅDIS
    console.log ("bajslogg")
    // Create an empty scene
    var scene = new THREE.Scene();
    // ta allt du haft in vingmåsarna

    // Create a basic perspective camera
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 4;
   
    // Create a renderer with Antialiasing
    var renderer = new THREE.WebGLRenderer({antialias:false});
   
    // Configure renderer clear color
    renderer.setClearColor("#FF00FF");

    // Configure renderer size
    renderer.setSize (window.innerWidth, window.innerHeight);

    // Append Renderer to DOM
    document.body.appendChild( renderer.domElement );

    // Nu kom massa nytt...... Create a Cube Mesh with basic material
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
    var material = new THREE.MeshStandardMaterial( { color: "#FF0011" } );
    var cube = new THREE.Mesh( geometry, material );

    // Add cube to Scene
    scene.add( cube );
    const light = new THREE.PointLight( 0xff0000, 1, 100 );
    scene.add (light)
    light.position.set( 0, 0, 1 );
  

    // Render Loop
    var render = function ()
    {
        requestAnimationFrame( render );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

    // Render the scene
        renderer.render(scene, camera);
    };


    // Gölv änna
    var floor = function ()
    {

        var floor_material = new THREE.MeshStandardMaterial( { color: "#FF00FF" } );
        var geom = new THREE.Geometry({});
        var widht = 3
        var hight = 7

        geom.vertices.push(new THREE.Vector3(-widht/2, 0.0, -hight/2));
        geom.vertices.push(new THREE.Vector3(widht/2, - 0.9, -hight/2));
        geom.vertices.push(new THREE.Vector3(-widht/2, 0.5, hight/2));
        geom.vertices.push(new THREE.Vector3(widht/2, 1.0, hight/2));
        geom.faces.push( new THREE.Face3( 0, -1, -2 ) );
        const golvet = new THREE.Mesh( geom, floor_material );
        return golvet
       
    };
    // Rendera gälvet vettuy
    var golvet = floor ()
    scene.add (golvet)
    const light_colors = new THREE.PointLight( 0x00fff0, 1, 100 );
    scene.add (light_colors)
    light_colors.position.set( 1, 2, 0 );

    render();
}

