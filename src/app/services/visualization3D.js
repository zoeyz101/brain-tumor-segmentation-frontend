'use client';

import React, { useEffect } from 'react';
// import * as THREE from 'three';
import * as AMI from 'ami.js';
import * as CONSTANTS from '../constants';

const Visualization3D = () => {
  var niiFile = '';

  if (CONSTANTS.SHOW_OG) {
    niiFile = CONSTANTS.niiFileT2F9;
  } else if (CONSTANTS.SHOW_GBM) {
    niiFile = CONSTANTS.niiFileT2F0;
  }

  useEffect(() => {

    // Classic ThreeJS setup
    const container = document.getElementById('container');
    const renderer = new THREE.WebGLRenderer({
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

    const controls = new AMI.TrackballControl(camera, container);

    const onWindowResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    // Load NIFTI images and create AMI Helpers
    const loader = new AMI.VolumeLoader(container);
    loader
      .load(niiFile)
      .then(() => {
        const series = loader.data[0].mergeSeries(loader.data);
        const stack = series[0].stack[0];
        loader.free();

        const stackHelper = new AMI.StackHelper(stack);
        stackHelper.bbox.color = CONSTANTS.colors.red;
        stackHelper.border.color = CONSTANTS.colors.blue;

        scene.add(stackHelper);

        // build the gui
        gui(stackHelper);

        // center camera and interactor to center of bounding box
        const centerLPS = stackHelper.stack.worldCenter();
        camera.lookAt(centerLPS.x, centerLPS.y, centerLPS.z);
        camera.updateProjectionMatrix();
        controls.target.set(centerLPS.x, centerLPS.y - 50, centerLPS.z);
      })
      .catch(error => {
        window.console.log('oops... something went wrong...');
        window.console.log(error);
      });

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);

      requestAnimationFrame(() => {
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
      <div id='my-gui-container'></div>
      <div id='container'></div>
    </div>
  );
};
  
export default Visualization3D;
  