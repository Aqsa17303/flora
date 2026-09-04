function sendToWhatsApp(event) {
    event.preventDefault();

    // 1. APNA WHATSAPP NUMBER YAHAN LIKHEIN (Country code ke sath, bina zeros/plus ke)
    const phoneNumber = "923XXXXXXXXX"; 

    // Form data fields
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;

    // Product quantities
    const oil = document.getElementById('qty_oil').value;
    const serum = document.getElementById('qty_serum').value;
    const soap = document.getElementById('qty_soap').value;

    // Message building
    let message = `*New Order Received!* 🌿\n\n`;
    message += `*Customer Details:*\n`;
    message += `👤 Name: ${name}\n`;
    message += `📞 Phone: ${phone}\n`;
    message += `📍 Address: ${address}\n\n`;

    message += `*Products Ordered:*\n`;
    let hasItems = false;

    if (oil > 0) { message += `• Herbal Hair Oil: ${oil}\n`; hasItems = true; }
    if (serum > 0) { message += `• Hair Serum: ${serum}\n`; hasItems = true; }
    if (soap > 0) { message += `• Handmade Soap: ${soap}\n`; hasItems = true; }

    if (!hasItems) {
        alert("Baraye meharbani kam az kam ek product select karein!");
        return;
    }

    message += `\n*Payment Method:* ${payment}`;

    // URL encode the message
    const whatsappUrl = `https://whatsapp.com{phoneNumber}&text=${encodeURIComponent(message)}`;
    
   