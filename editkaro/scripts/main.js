document.getElementById("emailForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("emailMessage").textContent =
        "Email saved (Google Sheet integration coming next).";
});
