// import React, { useRef } from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// const App: React.FC = () => {
//   const outputRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   const screenShot = () => {
//     // Scroll back to the top
//     window.scrollTo(0, 0);

//     // Set output dimensions
//     if (outputRef.current) {
//       outputRef.current.style.width = '800px';
//       outputRef.current.style.height = '900px';
//     }

//     // Remove any existing canvas
//     if (canvasRef.current) {
//       canvasRef.current.remove();
//     }

//     const div = document.getElementById('printPreview');
//     if (div) {
//       html2canvas(div).then((canvas) => {
//         canvas.id = 'myCanvas';
//         canvasRef.current = canvas;
//         if (outputRef.current) {
//           outputRef.current.appendChild(canvas);
//         }

//         setTimeout(() => {
//           downloadPDF();
//         }, 2000);
//       });
//     }
//   };

//   const downloadPDF = () => {
//     const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
//     if (!canvas) return;

//     const width = canvas.width;
//     const height = canvas.height;

//     // Create a PDF with jsPDF
//     const pdf = new jsPDF('p', 'px', [620 * 2, 800 * 2]);
//     pdf.addImage(canvas, 'JPEG', 0, 0, width, height);

//     alert(`width: ${width} \n Height: ${height}`);
//     pdf.save('download.pdf');

//     // Cleanup
//     canvas.remove();
//     if (outputRef.current) {
//       outputRef.current.style.width = '0px';
//       outputRef.current.style.height = '0px';
//     }
//   };

//   const uploadFile = () => {
//     const fileInput = document.getElementById('lFile') as HTMLInputElement;
//     if (fileInput) {
//       fileInput.click();
//       const uploadLink = document.getElementById('uploadLink');
//       const dummyDisplay = document.getElementById('dummyDisplay');
//       if (uploadLink) uploadLink.className = '';
//       if (dummyDisplay) dummyDisplay.remove();
//     }
//   };

//   const stlLoad = (files: FileList) => {
//     const canvasList = document.getElementsByTagName('canvas');
//     for (let i = 0, len = canvasList.length; i < len; i++) {
//       canvasList[0].remove();
//     }

//     const printPreview = document.getElementById('printPreview');
//     if (printPreview) printPreview.style.visibility = 'visible';

//     const stlViewerTop = new StlViewer(document.getElementById('stl_contTop'));
//     const stlViewerButton = new StlViewer(document.getElementById('stl_contButton'));

//     stlViewerTop.add_model({
//       id: 1,
//       local_file: files[0],
//       rotationx: 0.5 * Math.PI,
//       rotationy: 0,
//       rotationz: 0,
//       auto_resize: true,
//     });

//     stlViewerButton.add_model({
//       id: 1,
//       local_file: files[0],
//       rotationx: -0.5 * Math.PI,
//       rotationy: 0,
//       rotationz: 0,
//     });

//     const downloadLink = document.getElementById('downloadLink');
//     if (downloadLink) downloadLink.className = 'active';
//   };

//   const updateAnno = () => {
//     const annoText = (document.getElementById('annoText') as HTMLInputElement).value;
//     const annoDisplay = document.getElementById('annoDisplay');
//     if (annoDisplay) annoDisplay.innerText = annoText;
//   };

//   const loadBasic = () => {
//     const stlViewerMain = new StlViewer(document.getElementById('stl_contMain'));
//     stlViewerMain.remove_model(1);
//     stlViewerMain.add_model({
//       id: 1,
//       filename: 'Stanford_Bunny.stl',
//       animation: { delta: { rotationx: 1, rotationy: 0.5, msec: 1000, loop: true } },
//     });
//   };

//   return (
//     <div>
//       <div id="output" ref={outputRef}></div>
//       <div id="printPreview">
//         {/* Content to screenshot */}
//       </div>
//       <button onClick={screenShot}>Take Screenshot</button>
//       <button onClick={loadBasic}>Load Basic Model</button>
//       <input type="file" id="lFile" style={{ display: 'none' }} onChange={(e) => stlLoad(e.target.files!)} />
//       <button id="uploadLink" onClick={uploadFile}>Upload STL File</button>
//       <div id="dummyDisplay"></div>
//       <textarea id="annoText" onChange={updateAnno}></textarea>
//       <div id="annoDisplay"></div>
//     </div>
//   );
// };

// export default App;
