'use client';

import React, { useEffect } from 'react';
import * as AMI from 'ami.js';
import * as CONSTANTS from '../constants';
import VisualizationLegend from './visualizationLegend';

const Visualization3DMesh = () => {
  var niiFile = '';
  var stlFile = '';
  var wholeStlFile = '';
  var coreStlFile = '';
  var enhancedStlFile =  '';

  if (CONSTANTS.SHOW_OG) {
    niiFile = CONSTANTS.niiFileTest9;
    stlFile = CONSTANTS.stlFile9;
    wholeStlFile = CONSTANTS.wholeStlFile9;
    coreStlFile = CONSTANTS.coreStlFile9;
    enhancedStlFile =  CONSTANTS.enhancedStlFile9;
  } else if (CONSTANTS.SHOW_GBM) {
    niiFile = CONSTANTS.niiFileTest0;
    stlFile = CONSTANTS.stlFile0;
    wholeStlFile = CONSTANTS.wholeStlFile0;
    coreStlFile = CONSTANTS.coreStlFile0;
    enhancedStlFile =  CONSTANTS.enhancedStlFile0;
  }
  
  useEffect(() => {

    // Classic ThreeJS setup
    const container = document.getElementById('container');
    var renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(CONSTANTS.colors.darkGrey, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    camera.position.x = 150;
    camera.position.y = -100;
    camera.position.z = 500;

    // add axes
    // x axis is red, y axis is green, z axis is blue
    const axesHelper = new THREE.AxesHelper(25);
    scene.add(axesHelper);

    const controls = new AMI.TrackballControl(camera, container);

    const onWindowResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener('resize', onWindowResize, false);

    const particleLight = new THREE.Mesh(
      new THREE.SphereBufferGeometry(4, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    const plLPS = new THREE.Matrix4();
    plLPS.set(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    particleLight.applyMatrix4(plLPS);
    scene.add(particleLight);

    scene.add(new THREE.AmbientLight(0x222222));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 800);
    particleLight.add(pointLight);

    // Load model and transform to LPS space
    // whole tumour mesh
    const loaderSTL = new THREE.STLLoader();
    loaderSTL.load(wholeStlFile, geometry => {
      const material = new THREE.MeshPhongMaterial({
        color: 0x36f466, // green 
        specular: 0x111111,
        shininess: 200,
      });
      const mesh = new THREE.Mesh(geometry, material);
      // to LPS space
      const RASToLPS = new THREE.Matrix4();
      RASToLPS.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1);
      mesh.applyMatrix4(RASToLPS);
      scene.add(mesh);
      mesh.position.set(0, -235, 0);
    });

    ///*
    // core tumour mesh
    loaderSTL.load(coreStlFile, geometry => {
      const material = new THREE.MeshPhongMaterial({
        color: 0x3655f4, // blue
        specular: 0x111111,
        shininess: 200,
      });
      const mesh = new THREE.Mesh(geometry, material);
      // to LPS space
      const RASToLPS = new THREE.Matrix4();
      RASToLPS.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1);
      mesh.applyMatrix4(RASToLPS);
      scene.add(mesh);
      mesh.position.set(0, -235, 0);
    });
    //*/

    ///*
    // enhanced tumour mesh
    loaderSTL.load(enhancedStlFile, geometry => {
      const material = new THREE.MeshPhongMaterial({
        color: 0xf44336, // red
        specular: 0x111111,
        shininess: 200,
      });
      const mesh = new THREE.Mesh(geometry, material);
      // to LPS space
      const RASToLPS = new THREE.Matrix4();
      RASToLPS.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1);
      mesh.applyMatrix4(RASToLPS);
      scene.add(mesh);
      mesh.position.set(0, -235, 0);
    });
    //*/

    // Load NIFTI data and setup the stack helper
    var loader = new AMI.VolumeLoader(container);
    loader
      .load(niiFile)
      .then(function() {
        const series = loader.data[0].mergeSeries(loader.data);
        const stack = series[0].stack[0];
        loader.free();

        const stackHelper = new AMI.StackHelper(stack);
        stackHelper.border.color = CONSTANTS.colors.red;
        scene.add(stackHelper);

        // build gui
        gui(stackHelper);

        const centerLPS = stackHelper.stack.worldCenter();
        camera.lookAt(centerLPS.x, centerLPS.y, centerLPS.z);
        camera.updateProjectionMatrix();
        controls.target.set(centerLPS.x, centerLPS.y - 50, centerLPS.z);

        particleLight.position.set(centerLPS.x, centerLPS.y, centerLPS.z);
      })
      .catch(function(error) {
        window.console.log('oops... something went wrong...');
        window.console.log(error);
      });

    const animate = () => {
      var timer = Date.now() * 0.00025;

      particleLight.position.x = Math.sin(timer * 7) * 150;
      particleLight.position.y = Math.cos(timer * 5) * 150;
      particleLight.position.z = Math.cos(timer * 3) * 150;

      controls.update();
      renderer.render(scene, camera);

      requestAnimationFrame(function() {
        animate();
      });
    };
    animate();

    // setup gui
    const gui = stackHelper => {
      const stack = stackHelper.stack;
      const gui = new dat.GUI({
        autoPlace: false,
      });
      const customContainer = document.getElementById('my-gui-container');
      customContainer.appendChild(gui.domElement);

      // stack
      const stackFolder = gui.addFolder('Stack');
      // index range depends on stackHelper orientation.
      const index = stackFolder
        .add(stackHelper, 'index', 0, stack.dimensionsIJK.z - 1)
        .step(1)
        .listen();
      const orientation = stackFolder
        .add(stackHelper, 'orientation', 0, 2)
        .step(1)
        .listen();
      orientation.onChange(value => {
        index.__max = stackHelper.orientationMaxIndex;
        stackHelper.index = Math.floor(index.__max / 2);
      });
      stackFolder.open();

      // slice
      const sliceFolder = gui.addFolder('Slice');
      sliceFolder
        .add(stackHelper.slice, 'windowWidth', 1, stack.minMax[1] - stack.minMax[0])
        .step(1)
        .listen();
      sliceFolder
        .add(stackHelper.slice, 'windowCenter', stack.minMax[0], stack.minMax[1])
        .step(1)
        .listen();
      sliceFolder.add(stackHelper.slice, 'intensityAuto').listen();
      sliceFolder.add(stackHelper.slice, 'invert');
      sliceFolder.open();

      // bbox
      const bboxFolder = gui.addFolder('Bounding Box');
      bboxFolder.add(stackHelper.bbox, 'visible');
      bboxFolder.addColor(stackHelper.bbox, 'color');
      bboxFolder.open();

      // border
      const borderFolder = gui.addFolder('Border');
      borderFolder.add(stackHelper.border, 'visible');
      borderFolder.addColor(stackHelper.border, 'color');
      borderFolder.open();
    };

  });

  return (
    <div>
      <VisualizationLegend />
      <div id='my-gui-container'></div>
      <div id='container'></div>
    </div>
  );
};
  
export default Visualization3DMesh;
  