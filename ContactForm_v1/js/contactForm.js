// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1dSdq2-wgumt9RA5N6XTdtJfBbfsPsrA",
    authDomain: "portfolio-a40fb.firebaseapp.com",
    projectId: "portfolio-a40fb",
    storageBucket: "portfolio-a40fb.appspot.com",
    messagingSenderId: "1008576562948",
    appId: "1:1008576562948:web:b8f1bce159d9814c0ab251"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("info");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    console.log(name, email, subject, message);
    saveContactInfo(name, email, subject, message);

    document.querySelector(".contact-form").reset();
    sendEmail(name, email, subject, message);
};

// Save info to Firebase
function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
};

// Send Email Info
function sendEmail(name, email, subject, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'seanoconnell96@gmail.com',
        Password: "ksvvzaerynnfvecx",
        To: 'seanoconnell96@gmail.com',
        From: `${email}`,
        Subject: `${subject}`,
        Body: `${name} <br/> ${email} <br/> ${message}`
    }).then((message) => Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'email sent successfully',
        showConfirmButton: false,
        timer: 1500
      }))
};
