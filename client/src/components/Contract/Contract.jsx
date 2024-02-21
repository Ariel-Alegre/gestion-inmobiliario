import React, {useState} from 'react'
import 'jspdf-autotable'; // Importa la biblioteca
import { jsPDF } from 'jspdf';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Contract = () => {
  const [pdfBase64, setPdfBase64] = useState(null);

  const generarContratoPDF = () => {
    const pdfDoc = new jsPDF();

    // Agregar título y contenido del contrato
    pdfDoc.setFontSize(18);
    pdfDoc.text('Contrato de Servicios', 20, 20);

    pdfDoc.setFontSize(12);
    pdfDoc.text('Este contrato se celebra entre...', 20, 30);

    // Agregar una tabla simple usando jspdf-autotable
    const headers = [['Nombre', 'Rol', 'Fecha']];
    const data = [['John Doe', 'Cliente', '2023-01-01'], ['Jane Smith', 'Administrador', '2023-01-02']];
    pdfDoc.autoTable({
      head: headers,
      body: data,
      startY: 40, // La posición Y donde comenzará la tabla
    });

    // Obtener el contenido del PDF como base64
    const base64 = pdfDoc.output('datauristring');

    // Actualizar el estado para mostrar el PDF
    setPdfBase64(base64);
  };

  const handleDownload = () => {
    const pdfDoc = new jsPDF();

    // Agregar título y contenido del contrato
    pdfDoc.setFontSize(18);
    pdfDoc.text('Contrato de Servicios', 20, 20);

    pdfDoc.setFontSize(12);
    pdfDoc.text('Este contrato se celebra entre...', 20, 30);

    // Agregar una tabla simple usando jspdf-autotable
    const headers = [['Nombre', 'Rol', 'Fecha']];
    const data = [['John Doe', 'Cliente', '2023-01-01'], ['Jane Smith', 'Administrador', '2023-01-02']];
    pdfDoc.autoTable({
      head: headers,
      body: data,
      startY: 40, // La posición Y donde comenzará la tabla
    });

    // Descargar el PDF con un nombre específico
    const fileName = 'Contrato_de_Servicios.pdf';
    pdfDoc.save(fileName);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Generador de Contratos</h1>
      <p>Haga clic en el botón para generar el contrato PDF:</p>
      <button onClick={generarContratoPDF}>Generar Contrato PDF</button>

      {pdfBase64 && (
        <div style={{ marginTop: '20px' }}>
          <Document file={pdfBase64} onLoadSuccess={() => console.log('PDF cargado exitosamente')}>
            <Page pageNumber={1} />
          </Document>
          <div style={{ marginTop: '10px' }}>
            <button onClick={handleDownload}>Descargar PDF</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contract;
