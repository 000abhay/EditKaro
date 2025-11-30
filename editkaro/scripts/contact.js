const scriptURL = "https://script.google.com/macros/s/AKfycbw2tScF-G6qoSe9pfvxtgnFtUXyOmWiSuiScwI2bodfpz_m_ahqbQY9lgFkJDvh-8y3/exec";

document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById("contactStatus").textContent = "Message sent successfully!";
            document.getElementById("contactForm").reset();
        } else {
            document.getElementById("contactStatus").textContent = "Failed to send message.";
        }
    } catch (error) {
        document.getElementById("contactStatus").textContent = "Failed to send message.";
    }
});
