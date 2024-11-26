document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("contact").value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`contact: ${contact}`);
    alert("Thank you for reaching out! We'll get back to you soon.");
});