function sendMail() {
    let parms = {

    name: document.getElementById("name").value ,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
    }
    emailjs.send("service_kjpthdk", "template_7zq4vtm", parms).then(alert("Email sent!"))
    // zPpqZJbe8Vj1DfNLH
}