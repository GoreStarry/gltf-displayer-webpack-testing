import gltfDisplayer from 'gltf-displayer/dist/libDev.es'
// import gltfDisplayer from 'gltf-displayer'

gltfDisplayer('canvas-container', {
  isUseToggleButton: true,
  btnContainerID: 'btn-portal',
  btnClassName: '',
  listFocusRotateDeg: [
    [-90, 0, 0],
    [0, 0, 0],
  ],
  isUseAxesHelper: true,
  className: '',
  defaultCameraPosition: [0, 5, 0],
  cameraMaxDistance: 6,
  cameraMinDistance: 2,

  gltfPath: '/assets/3d/single_studio.gltf',
  gltfRotateDeg: [0, 0, 0],
  gltfPosition: [0, -0.5, 0],
  gltfScale: 5,

  isUseMousePointLight: true,
  mouseLightIntensity: 1,
  mouseLightColor: 'white',
  ambientLightColor: 'white',
  ambientLightIntensity: 0.5,
  directionalLightColor: 'white',
  directionalLightPosition: [0, 30, 0],
  directionalLightIntensity: 0.5,
  spotLightColor: 'white',
  spotLightPosition: [5, 30, 5],
  spotLightIntensity: 0.5,
})
