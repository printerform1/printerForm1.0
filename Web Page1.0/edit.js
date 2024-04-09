var pdfName = "";
var finalCanvas;

//JavaScript for the Print Preview Popup buttons
//Close Button
document.getElementById('closeDownloadPopupBtn').addEventListener('click', function() {
    document.getElementById('downloadPopup').style.display = 'none';
});

//Back Button
document.getElementById('backDownloadPopupBtn').addEventListener('click', function() {
    document.getElementById('downloadPopup').style.display = 'none';

    document.getElementById('formSelectionPopup').style.display = 'block';
});

//Download Button
document.getElementById('downloadPDFbtn').addEventListener('click', function() {
    downloadAsPDF(finalCanvas);
});

function combineImagesOnTemplate(backgroundTemplateSrc, images, positions, templateWidth, imgWidthPx, imgHeightPx) {
    return new Promise((resolve, reject) => {
        // Load the background template image
        let template = new Image();
        template.onload = () => {
            let canvas = document.createElement('canvas');
            canvas.width = templateWidth;
            canvas.height = templateWidth/imgWidthPx*imgHeightPx;
            let ctx = canvas.getContext('2d');

            ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

            // Draw and rotate each canvas on the template
            console.log(images);
            images.forEach((imgCanvas, index) => {
                let pos = positions[index];
                ctx.save();
                ctx.translate(pos.x + imgCanvas.width / 2, pos.y + imgCanvas.height / 2);
                ctx.rotate(pos.rotation);
                ctx.drawImage(imgCanvas, -imgCanvas.width / 2, -imgCanvas.height / 2, pos.width, pos.height);
                ctx.restore();
            });

            resolve(canvas);
        };
        template.onerror = reject;
        template.src = backgroundTemplateSrc; // Set the path to your template image
    });
}

function displayFinalProduct(canvas, targetDivId) {
    const targetDiv = document.getElementById(targetDivId);
    if (targetDiv) {
        targetDiv.innerHTML = ''; // Clear any existing content
        targetDiv.appendChild(canvas); // Add the canvas to the div
    } else {
        console.error('Target div not found');
    }
}

function captureElement(elementId) {
    return new Promise((resolve, reject) => {
        const element = document.getElementById(elementId);
        if (element) {
            html2canvas(element).then(canvas => {
                resolve(canvas);
            });
        } else {
            reject(`Element with id ${elementId} not found`);
        }
    });
}

async function createAndDisplayPDF(pdfNameString, item) {
    try {
        itemElement = item.customElementInstance;
        let promises = []; // Use let for variables that will be reassigned, and an array to hold promises
        itemElement.viewArray.forEach (elementId =>  {
            // Push the promise returned by captureElement into the promises array
            promises.push(captureElement(elementId));
        });
        //const capturedElements = itemElement.generateObjects(itemElement);
        const positions = itemElement.viewPositions;
        const capturedElements = await Promise.all(promises);

        finalCanvas = await combineImagesOnTemplate(itemElement.template, capturedElements, positions, 600, 2511, 3323);
        
        // Display the final product
        displayFinalProduct(finalCanvas,"print-preview-container");

        pdfName = pdfNameString;
    } catch (error) {
        console.error('Error creating PDF:', error);
    }
}
window.jsPDF = window.jspdf.jsPDF;

function downloadAsPDF(canvas) {
    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
    });

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(pdfName);
}