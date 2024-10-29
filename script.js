function gerarEPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configurações para centralizar a marca d'água
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Define a marca d'água
    doc.setFontSize(50);
    doc.setTextColor(150, 150, 150);
    doc.text("Guarda Municipal de Fortaleza", pageWidth / 2, pageHeight / 2, {
        align: "center",
        angle: 45,
    });

    // Pega os dados do formulário
    const formData = new FormData(document.getElementById("cadastroForm"));
    let yPosition = 20;

    formData.forEach((value, key) => {
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`${key}: ${value}`, 10, yPosition);
        yPosition += 10;

        // Adiciona uma nova página se necessário
        if (yPosition > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;

            // Adiciona a marca d'água em cada nova página
            doc.setFontSize(50);
            doc.setTextColor(150, 150, 150);
            doc.text("Guarda Municipal de Fortaleza", pageWidth / 2, pageHeight / 2, {
                align: "center",
                angle: 45,
            });
        }
    });

    doc.save("Formulario_Cadastro.pdf");
}

function gerarEPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configuração da Marca d'água no centro
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setFontSize(50);
    doc.setTextColor(150, 150, 150);
    doc.text("Guarda Municipal de Fortaleza", pageWidth / 2, pageHeight / 2, {
        align: "center",
        angle: 45,
    });

    // Definições para compactar o conteúdo
    const formData = new FormData(document.getElementById("cadastroForm"));
    let yPosition = 10;
    const lineSpacing = 7; // Espaçamento menor para mais dados caberem em uma página
    const fontSize = 9; // Tamanho menor da fonte para caber mais conteúdo

    doc.setFontSize(fontSize);
    doc.setTextColor(0, 0, 0);

    formData.forEach((value, key) => {
        doc.text(`${key}: ${value}`, 10, yPosition);
        yPosition += lineSpacing;
    });

    // Salva o PDF com todos os dados em uma única página
    doc.save("Formulario_Cadastro.pdf");
}


