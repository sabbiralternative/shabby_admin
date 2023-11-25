import jsPDF from "jspdf";
import "jspdf-autotable";
const UseExportToPdf = () => {
  const exportPdf = (id, name) => {
    const doc = new jsPDF();
    doc.autoTable({ html: id });
    doc.save(name);
  };
  return {
    exportPdf,
  };
};

export default UseExportToPdf;
