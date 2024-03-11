'use client';

import React, { useEffect } from 'react';
import * as THREE from 'three';
import * as AMI from 'ami.js';
import * as CONSTANTS from '../constants';

const Visualization = () => {
  useEffect(() => {
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
    camera.position.y = 150;
    camera.position.z = 100;

    const controls = new AMI.TrackballControl(camera, container);
    //const controls = new TrackballControls(camera, container);

    const onWindowResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    const loader = new AMI.VolumeLoader(container);

    // once all files have been loaded (fetch + parse + add to array)
    // merge them into series / stacks / frames
    loader
    .load(CONSTANTS.files)
    .then(() => {
      //////test
      console.log('test');
      var geo = new THREE.BoxGeometry(150, 150, 100);
      geo.applyMatrix4(new THREE.Matrix4().makeTranslation(75, 75, 50));
      
      // merge files into clean series/stack/frame structure
      console.log('loading series...');
      const series = loader.data[0].mergeSeries(loader.data);
      console.log('creating stack...');
      const stack = series[0].stack[0];
      loader.free();

      console.log('stackhelper');
      const stackHelper = new AMI.StackHelper(stack);
      console.log('setting stackhelper...');
      stackHelper.bbox.color = CONSTANTS.colors.red;
      stackHelper.border.color = CONSTANTS.colors.blue;

      scene.add(stackHelper);

      // build gui
      gui(stackHelper);

      // center camera and interactor to center of bounding box
      const centreLPS = stackHelper.stack.worldCenter();
      camera.lookAt(centreLPS.x, centreLPS.y, centreLPS.z);
      camera.updateProjectionMatrix();
      controls.target.set(centreLPS.x, centreLPS.y, centreLPS.z);

      // // Display some content on the DOM
      // series.forEach((mySeries, seriesIndex) => {
      //   const seriesDiv = document.createElement('div');
      //   seriesDiv.className += 'indent';
      //   seriesDiv.insertAdjacentHTML(
      //     'beforeend',
      //     `<div> SERIES (${seriesIndex + 1}/${series.length})</div>`
      //   );
      //   seriesDiv.insertAdjacentHTML(
      //     'beforeend',
      //     `<div class="series"> numberOfChannels: ${mySeries.numberOfChannels}</div>`
      //   );
// 
      //   container.appendChild(seriesDiv);
// 
      //   // loop through stacks
      //   mySeries.stack.forEach((myStack, stackIndex) => {
      //     var stackDiv = document.createElement('div');
      //     stackDiv.className += 'indent';
      //     stackDiv.insertAdjacentHTML(
      //       'beforeend',
      //       `<div> STACK (${stackIndex + 1}/${mySeries.stack.length})</div>`
      //     );
      //     stackDiv.insertAdjacentHTML(
      //       'beforeend',
      //       `<div class="stack"> bitsAllocated: ${myStack.bitsAllocated}</div>`
      //     );
// 
      //     seriesDiv.appendChild(stackDiv);
// 
      //     // loop through frames
      //     myStack.frame.forEach((myFrame, frameIndex) => {
      //       var frameDiv = document.createElement('div');
      //       frameDiv.className += 'indent';
      //       frameDiv.insertAdjacentHTML(
      //         'beforeend',
      //         `<div> FRAME (${frameIndex + 1}/${myStack.frame.length})</div>`
      //       );
      //       frameDiv.insertAdjacentHTML(
      //         'beforeend',
      //         `<div class="frame"> instanceNumber: ${myFrame.instanceNumber}</div>`
      //       );
// 
      //       stackDiv.appendChild(frameDiv);
      //     });
      //   });
      // });
    })
    .catch(function(error) {
      console.log('oops... something went wrong...');
      console.log(error);
    });

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);

      requestAnimationFrame(() => {
        animate();
      });
    };
    animate();

    const gui = stackHelper => {
      const stack = stackHelper.stack;
      const gui = new dat.GUI({
        autoPlace: false,
      });
      const customContainer = document.getElementById('my-gui-container');
      customContainer.appendChild(gui.domElement);

      // stack
      const stackFolder = gui.addFolder('Stack');

      // index range depends on stackHelper orientation
      const index = stackFolder
        .add(stackHelper, 'index', 0, stack.dimensionIJK.z - 1)
        .step(1)
        .listen();
      const orientation = stackFolder
        .add(stackHelper, 'orientation', 0, 2)
        .step(1)
        .listen();
      orientation.onChange(value => {
        index._max = stackHelper.orientationMaxIndex;
        stackHelper.index = Math.floor(index._max / 2);
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
      borderFolder.add(stackHelper.border, 'color');
      borderFolder.open();
    };
  });

  return (
    //<div className='img'>
    //  <Image src={img} width={750} alt='mri'/>
    //</div>
    <div>
      <div id='my-gui-container'></div>
      <div id='container'></div>
    </div>
  );
};
  
export default Visualization;
  