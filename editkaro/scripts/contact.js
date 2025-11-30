const scriptURL = "https://script.google.com/macros/s/AKfycbw2tScF-G6qoSe9pfvxtgnFtUXyOmWiSuiScwl2bodfpz_m_ahqbQY9IgFkJDvh-8y3/exec";

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(() => {
            document.getElementById("contactStatus").textContent = "Message sent successfully!";
            document.getElementById("contactForm").reset();
        })
        .catch(() => {
            document.getElementById("contactStatus").textContent = "Failed to send message.";
        });
});
