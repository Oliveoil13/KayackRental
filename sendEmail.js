function sendMeAnEmail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
  } 
  emailjs.send("service_tcfwpic","template_x2arf3e",parms).then(alert("Email Sent!!"))
}