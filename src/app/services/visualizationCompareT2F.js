'use client';

import React, { useEffect } from 'react';
import * as AMI from 'ami.js';
import * as CONSTANTS from '../constants';
import VisualizationLegend from './visualizationLegend';

const VisualizationCompareT2F = () => {
  var niiFile = '';
  var stlFile = '';
  var wholeStlFile = '';
  var coreStlFile = '';
  var enhancedStlFile =  '';

  if (CONSTANTS.SHOW_OG) {
    niiFile = CONSTANTS.niiFileT2F9;
    stlFile = CONSTANTS.stlFile9;
    wholeStlFile = CONSTANTS.wholeStlFile9;
    coreStlFile = CONSTANTS.coreStlFile9;
    enhancedStlFile =  CONSTANTS.enhancedStlFile9;
  } else if (CONSTANTS.SHOW_GBM) {
    niiFile = CONSTANTS.niiFileT2F0;
    stlFile = CONSTANTS.stlFile0;
    wholeStlFile = CONSTANTS.wholeStlFile0;
    coreStlFile = CONSTANTS.coreStlFile0;
    enhancedStlFile =  CONSTANTS.enhancedStlFile0;
  }
  
  useEffect(() => {

    // Classic ThreeJS setup
    const container = document.getElementById('container-2');
    const container_base = document.getElementById('container-1');
    
    var renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(CONSTANTS.colors.darkGrey, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    var renderer_base = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer_base.setSize(container_base.offsetWidth, container_base.offsetHeight);
    renderer_base.setClearColor(CONSTANTS.colors.darkGrey, 1);
    renderer_base.setPixelRatio(window.devicePixelRatio);
    container_base.appendChild(renderer_base.domElement);

    const scene = new THREE.Scene();
    const scene_base = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    camera.position.x = 150;
    camera.position.y = -50;
    camera.position.z = 750;

    const camera_base = new THREE.PerspectiveCamera(
      45,
      container_base.offsetWidth / container_base.offsetHeight,
      0.1,
      1000
    );
    camera_base.position.x = 150;
    camera_base.position.y = -50;
    camera_base.position.z = 750;

    // add axes
    // x axis is red, y axis is green, z axis is blue
    const axesHelper = new THREE.AxesHelper(25);
    scene.add(axesHelper);

    const axesHelper_base = new THREE.AxesHelper(25);
    scene_base.add(axesHelper_base);

    const controls = new AMI.TrackballControl(camera, container);
    const controls_base = new AMI.TrackballControl(camera_base, container_base);

    const onWindowResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);

      camera_base.aspect = container_base.offsetWidth / container_base.offsetHeight;
      camera_base.updateProjectionMatrix();
      renderer_base.setSize(container_base.offsetWidth, container_base.offsetHeight);
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
        color: 0x36F466, // green 
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

        const series_base = loader.data[0].mergeSeries(loader.data);
        const stack_base = series_base[0].stack[0];

        loader.free();

        const stackHelper = new AMI.StackHelper(stack);
        stackHelper.border.color = CONSTANTS.colors.red;
        scene.add(stackHelper);

        const stackHelper_base = new AMI.StackHelper(stack_base);
        stackHelper_base.border.color = CONSTANTS.colors.red;
        scene_base.add(stackHelper_base);

        // build gui
        gui(stackHelper, stackHelper_base);

        const centerLPS = stackHelper.stack.worldCenter();
        camera.lookAt(centerLPS.x, centerLPS.y, centerLPS.z);
        camera.updateProjectionMatrix();
        controls.target.set(centerLPS.x, centerLPS.y, centerLPS.z);

        const centerLPS_base = stackHelper_base.stack.worldCenter();
        camera_base.lookAt(centerLPS_base.x, centerLPS_base.y, centerLPS_base.z);
        camera_base.updateProjectionMatrix();
        controls_base.target.set(centerLPS_base.x, centerLPS_base.y, centerLPS_base.z);

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

      controls_base.update();
      renderer_base.render(scene_base, camera_base);

      requestAnimationFrame(function() {
        animate();
      });
    };
    animate();

    // setup gui
    const gui = (stackHelper, stackHelper_base) => {
      const stack = stackHelper.stack;
      const stack_base = stackHelper_base.stack;

      const gui = new dat.GUI({
        autoPlace: false,
      });
      const customContainer = document.getElementById('my-gui-container-compare-1');
      customContainer.appendChild(gui.domElement);

      const gui_base = new dat.GUI({
        autoPlace: false,
      });
      const customContainer_base = document.getElementById('my-gui-container-compare-2');
      customContainer_base.appendChild(gui_base.domElement);

      // stack
      const stackFolder = gui.addFolder('Stack');
      // index range depends on stackHelper orientation
      const index = stackFolder
        .add(stackHelper, 'index', 0, stack.dimensionsIJK.z - 1)
        .step(1)
        .listen();
      stackFolder.open();

      const stackFolder_base = gui_base.addFolder('Stack');
      const index_base = stackFolder_base
        .add(stackHelper_base, 'index', 0, stack_base.dimensionsIJK.z - 1)
        .step(1)
        .listen();
      stackFolder_base.open();

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

      const sliceFolder_base = gui_base.addFolder('Slice');
      sliceFolder_base
        .add(stackHelper_base.slice, 'windowWidth', 1, stack_base.minMax[1] - stack_base.minMax[0])
        .step(1)
        .listen();
      sliceFolder_base
        .add(stackHelper_base.slice, 'windowCenter', stack_base.minMax[0], stack_base.minMax[1])
        .step(1)
        .listen();
      sliceFolder_base.add(stackHelper_base.slice, 'intensityAuto').listen();
      sliceFolder_base.add(stackHelper_base.slice, 'invert');
      sliceFolder_base.open();

      // bbox
      const bboxFolder = gui.addFolder('Bounding Box');
      bboxFolder.add(stackHelper.bbox, 'visible');
      bboxFolder.addColor(stackHelper.bbox, 'color');
      bboxFolder.open();

      const bboxFolder_base = gui_base.addFolder('Bounding Box');
      bboxFolder_base.add(stackHelper_base.bbox, 'visible');
      bboxFolder_base.addColor(stackHelper_base.bbox, 'color');
      bboxFolder_base.open();

      // border
      const borderFolder = gui.addFolder('Border');
      borderFolder.add(stackHelper.border, 'visible');
      borderFolder.addColor(stackHelper.border, 'color');
      borderFolder.open();

      const borderFolder_base = gui_base.addFolder('Border');
      borderFolder_base.add(stackHelper_base.border, 'visible');
      borderFolder_base.addColor(stackHelper_base.border, 'color');
      borderFolder_base.open();
    };

  });

  return (
    <div>
      <VisualizationLegend />
      <div id='my-gui-container-compare-1'></div>
      <div id='container-1'></div>
      <div id='my-gui-container-compare-2'></div>
      <div id='container-2'></div>
    </div>
  );
};
  
export default VisualizationCompareT2F;
  