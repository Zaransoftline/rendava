const loader = new THREE.FBXLoader();
loader.load('./model.fbx', function(object) {
  object.scale.set(0.01, 0.01, 0.01);  // Scale the model if it's too large
  scene.add(object);
}, undefined, function(error) {
  console.error(error);
});
