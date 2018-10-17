import pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = 'js/pdf.worker.bundle.js';

pdfjs.getDocument('sample.pdf').then((pdf) => {
    pdf.getPage(1).then((page) => {
        const viewport = page.getViewport(0.3);
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderCtx = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderCtx);
    });
});