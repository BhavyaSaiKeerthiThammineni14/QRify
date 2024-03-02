function generateQRCode() {
    const inputText = document.getElementById("text-input").value;
    const qrCodeContainer = document.getElementById("qr-code");

    // Clear old QR
    qrCodeContainer.innerHTML = '';

    // Create QR
    const qr = new QRCode(qrCodeContainer, {
        text: inputText,
        width: 256,
        height: 256,
    });
}

function downloadQRCode() {
    const qrCodeContainer = document.getElementById("qr-code");
    const qrCodeImage = qrCodeContainer.querySelector('img');

    if (qrCodeImage) {
        const link = document.createElement('a');
        link.href = qrCodeImage.src;
        link.download = 'qrcode.png';
        link.click();
    } else {
        alert('Generate a QR code first before downloading.');
    }
}
