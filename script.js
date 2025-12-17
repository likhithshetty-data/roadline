document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // Encode the message to be sent via WhatsApp
    var whatsappMessage = `Hello, I'm ${name}. Here's my message: ${message}`;

    // Replace 'PHONE_NUMBER' with your WhatsApp number (in international format)
    var phoneNumber = '919611996499';
    
    // Construct the WhatsApp URL
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to the WhatsApp URL
    window.location.href = whatsappURL;
});
